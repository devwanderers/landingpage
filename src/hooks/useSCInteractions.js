/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useWeb3React } from '@web3-react/core'
import { injected } from '../wallet/connectors'
import { useLocalStorage } from './useStorage'
import AvatarDestinareAbi from '../abi/AvatarDestinare.json'
import useEffectOnce from './useEffectOnce'
import * as scActions from '../store/reducers/scInteractionReducer/actions'
import { scInteractionReducerSelector } from '../store/reducers/scInteractionReducer/selectors'
import { returnPromise } from '../services/promises'
import useInterval from './useInterval'

const nftAvatar = 1000000000000000000

const transformMintAvatarResult = (res) => {
    const {
        events: { Transfer },
    } = res

    if (!Array.isArray(Transfer)) {
        const {
            returnValues: { tokenId },
        } = Transfer
        return { [tokenId]: { tokenId } }
    }

    return Transfer.reduce((acc, val) => {
        const {
            returnValues: { tokenId },
        } = val
        return { ...acc, [tokenId]: { tokenId } }
    }, {})
}

const transformTokenIdResult = (res) => {
    return res.reduce((acc, val) => {
        return { ...acc, [val.tokenId]: { ...val } }
    }, {})
}

const fetchAllTokens = async () => {}

const useSCInteractions = () => {
    const [minting, setFetchingMinting] = useState(false)
    const [mintingError, setMintingError] = useState(null)
    // Estado traido del reducer
    const scInteractions = useSelector(scInteractionReducerSelector)
    const dispatch = useDispatch()

    // Acciones conectadas con dispatch
    const setMinting = (data) => dispatch(scActions.setMinting(data))
    const setMinted = (data) => dispatch(scActions.setMinted(data))
    const clearMinting = () => dispatch(scActions.clearMinting())
    const clearMinted = () => dispatch(scActions.clearMinted())

    const { active, library, activate, deactivate, account, error } =
        useWeb3React()

    const [walletActive, setWalletActive] = useLocalStorage('wallet', false)

    async function connect() {
        try {
            await activate(injected)

            if (!walletActive) setWalletActive(true)
        } catch (ex) {
            console.log({ ex })
        }
    }

    async function disconnect() {
        try {
            await deactivate()
            setWalletActive(false)
        } catch (ex) {
            console.log(ex)
        }
    }

    async function getTokenUris() {
        if (Object.keys(scInteractions.minting).length === 0) return
        const promises = Object.keys(scInteractions.minting).reduce(
            (acc, val) => {
                return [
                    ...acc,
                    new Promise((resolve, reject) => {
                        ;(async () => {
                            try {
                                const contract = new library.eth.Contract(
                                    AvatarDestinareAbi,
                                    process.env.REACT_APP_AVATAR_DESTINARE_CONTRACT_ADDRESS
                                )
                                const tokenUri = await contract.methods
                                    .tokenURI(val)
                                    .call()
                                // const response = await fetch(tokenUri)
                                // const nftJSON = await response.json()
                                // console.log({ nftJSON })
                                resolve({
                                    tokenId: val,
                                    tokenUri,
                                    // nftData: JSON.parse(nftJSON),
                                })
                            } catch (error) {
                                reject(error)
                            }
                        })()
                    }),
                ]
            },
            []
        )

        Promise.all(promises)
            .then((values) => {
                setFetchingMinting(false)
                clearMinting()
                setMinted(transformTokenIdResult(values))
                // callBack(values)
            })
            .catch((reason) => {
                console.log({ reason })
                setMintingError(reason)
            })
    }

    async function mintAvatar(amount, callBack = () => {}) {
        if (!active) setMintingError('Wallet not connected')
        if (mintingError) setMintingError(null)

        clearMinted()
        try {
            const contract = new library.eth.Contract(
                AvatarDestinareAbi,
                process.env.REACT_APP_AVATAR_DESTINARE_CONTRACT_ADDRESS
            )
            const mintAvatar = await contract.methods
                .mint(account, amount)
                .send({ from: account, value: nftAvatar * amount })

            const transformedData = transformMintAvatarResult(mintAvatar)
            setMinting(transformedData)
            setFetchingMinting(true)
        } catch (error) {
            console.log({ error })
            setMintingError(error)
        }
    }

    useInterval(
        () => {
            console.log('getTokenUris')
            getTokenUris()
        },
        minting ? 5000 : null
    )

    useEffectOnce(async () => {
        if (walletActive) await connect()
    })

    return {
        connect,
        disconnect,
        mintAvatar,
        active,
        error,
        mintData: scInteractions.minted,
        minting,
        mintingError,
    }
}

export default useSCInteractions
