/* eslint-disable no-unused-vars */
import { useState, useCallback, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useWeb3React } from '@web3-react/core'
import { injected } from '../wallet/connectors'
import { useLocalStorage } from './useStorage'
import AvatarDestinareAbi from '../abi/AvatarDestinare.json'
import useEffectOnce from './useEffectOnce'
import * as scActions from '../store/reducers/scInteractionReducer/actions'
import { scInteractionReducerSelector } from '../store/reducers/scInteractionReducer/selectors'
import { abortablePromise, returnPromise } from '../services/promises'
import useInterval from './useInterval'
import useDeepCompareEffect from './useDeepCompareEffect'

const publicPrice = 30e16

const mintResultConverToArray = (res) => {
    const {
        events: { Transfer },
    } = res

    if (!Array.isArray(Transfer)) {
        const {
            returnValues: { tokenId },
        } = Transfer
        return [tokenId]
    }

    return Transfer.reduce((acc, val) => {
        const {
            returnValues: { tokenId },
        } = val
        return [...acc, tokenId]
    }, [])
}

const transformTokenIdResult = (res) => {
    return res.reduce((acc, val) => {
        return { ...acc, [val.tokenId]: { ...val } }
    }, {})
}

const ntfObjectToArray = (data) => {
    if (Object.keys(data).length === 0) return {}
    return Object.keys(data).reduce((acc, val) => {
        return [...acc, data[val]]
    }, [])
}

const useSCInteractions = () => {
    const [fetchingData, setFetchingData] = useState(false)
    const [currentAccount, setCurrentAccount] = useState(null)
    const [minting, setFetchingMinting] = useState(false)
    const [mintingError, setMintingError] = useState(null)
    const [error, setError] = useState(false)
    // Estado traido del reducer
    const scInteractions = useSelector(scInteractionReducerSelector)
    const dispatch = useDispatch()

    // Acciones conectadas con dispatch
    const setData = (data) => dispatch(scActions.setData(data))
    const setMinting = (data) => dispatch(scActions.setMinting(data))
    const setMinted = (data) => dispatch(scActions.setMinted(data))
    const clearMinting = () => dispatch(scActions.clearMinting())
    const clearMinted = () => dispatch(scActions.clearMinted())
    const resetData = () => dispatch(scActions.clearData())

    const { active, library, activate, deactivate, account, chainId } =
        useWeb3React()

    const refController = useRef(new AbortController())

    const { data } = scInteractions

    const abortCalls = () => {
        const controller = refController.current
        controller.abort()
        refController.current = new AbortController()
    }

    async function getTokenUris() {
        if (scInteractions.minting.length === 0) return
        const promises = scInteractions.minting.reduce((acc, val) => {
            return [
                ...acc,
                new Promise((resolve, reject) => {
                    ; (async () => {
                        try {
                            const contract = new library.eth.Contract(
                                AvatarDestinareAbi,
                                process.env.REACT_APP_AVATAR_DESTINARE_CONTRACT_ADDRESS
                            )
                            const tokenUri = await contract.methods
                                .tokenURI(val)
                                .call()
                            const uri = tokenUri.replace(
                                /^ipfs?:\/\//,
                                'https://wanderers.mypinata.cloud/ipfs/'
                            )

                            const response = await fetch(uri)
                            const nftData = await response.json()
                            resolve({
                                tokenId: val,
                                tokenUri,
                                nftData,
                            })
                        } catch (error) {
                            reject(error)
                        }
                    })()
                }),
            ]
        }, [])

        Promise.all(promises)
            .then((values) => {
                setFetchingMinting(false)
                clearMinting()
                setMinted(values)
                getData()
                // callBack(values)
            })
            .catch((reason) => {
                console.log({ reason })
                setMintingError(reason)
            })
    }

    const getContractData = ({ signal }) => {
        return abortablePromise({ signal }, async (resolve, reject) => {
            try {
                const contract = new library.eth.Contract(
                    AvatarDestinareAbi,
                    process.env.REACT_APP_AVATAR_DESTINARE_CONTRACT_ADDRESS
                )
                const whitelisted = await contract.methods
                    .whitelisted(account)
                    .call()
                    .then((res) => {
                        console.log({ res })
                        return { tickets: parseInt(res[0]), active: res[1] }
                    })
                console.log({ whitelisted })
                resolve({ whitelisted })
            } catch (err) {
                console.log({ err })
                reject(err)
            }
        })
    }

    const getData = useCallback(async () => {
        if (!fetchingData && library?.eth && account) {
            setFetchingData(true)
            const controller = refController.current
            try {
                const signal = controller.signal
                const data = await getContractData({
                    signal,
                })
                console.log({ data })
                setTimeout(() => {
                    setData({
                        ...data,
                    })
                    setFetchingData(false)
                }, 600)
            } catch (err) {
                setTimeout(() => {
                    setFetchingData(false)
                }, 600)
                if (err?.name === 'AbortError') {
                    console.log('Promise Aborted')
                } else {
                    setError(true)
                    console.log(err)
                }
            }
        }
    }, [library, account, fetchingData])

    const mintAvatar = useCallback(
        async (amount) => {
            if (!active) setMintingError('Wallet not connected')
            if (mintingError) setMintingError(null)

            clearMinted()
            setFetchingMinting(true)
            try {
                const contract = new library.eth.Contract(
                    AvatarDestinareAbi,
                    process.env.REACT_APP_AVATAR_DESTINARE_CONTRACT_ADDRESS
                )

                const whitelisted = await contract.methods
                    .whitelisted(account)
                    .call()
                    .then((res) => {
                        return { tickets: parseInt(res[0]), active: res[1] }
                    })
                console.log({ amount, account })
                let mintAvatar
                if (whitelisted.active && whitelisted.tickets > 0) {
                    mintAvatar = await contract.methods
                        .mint(account, amount)
                        .send({ from: account, value: 0 })
                } else {
                    mintAvatar = await contract.methods
                        .mint(account, amount)
                        .send({ from: account, value: publicPrice * amount })
                }

                const transformedData = mintResultConverToArray(mintAvatar)
                setMinting(transformedData)
            } catch (error) {
                console.log({ error })
                setFetchingMinting(false)
                setMintingError(error)
            }
        },
        [active, library, account]
    )

    const resetError = useCallback(() => {
        setFetchingMinting(false)
        setMintingError(null)
    }, [mintingError])

    useDeepCompareEffect(() => {
        if (!account && fetchingData) {
            // reloadData(true)
            setFetchingData(false)
            abortCalls()
        } else if (!data && !fetchingData && !error) {
            getData()
        } else if (currentAccount !== account) {
            setCurrentAccount(account)
            if (currentAccount) {
                if (fetchingData) abortCalls()
                resetData()
            }
        }
    }, [library, account, data, fetchingData])

    useInterval(
        () => {
            getTokenUris()
        },
        minting ? 5000 : null
    )

    return {
        data,
        fetchingData,
        mintAvatar,
        mintData: scInteractions.minted,
        minting,
        mintingError,
        resetError,
    }
}

export default useSCInteractions
