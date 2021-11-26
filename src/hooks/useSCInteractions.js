/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useWeb3React } from '@web3-react/core'
import { injected } from '../wallet/connectors'
import { useLocalStorage } from './useStorage'
import AvatarDestinareAbi from '../abi/AvatarDestinare.json'
import useEffectOnce from './useEffectOnce'
import { saveMintData as saveMintDataAction } from './../store/reducers/mint/actions'
import { mintReducerSelector } from './../store/reducers/mint/selectors'
import { returnPromise } from '../services/promises'

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

const fetchAllTokens = async () => {}

const useSCInteractions = () => {
    const mintState = useSelector(mintReducerSelector)
    const dispatch = useDispatch()

    const saveMintData = (data) => dispatch(saveMintDataAction(data))

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

    async function validateChainIdNetwork() {
        const ethereum = window.ethereum
        if (
            !ethereum ||
            (ethereum &&
                (ethereum.chainId === '0x89' || ethereum.chainId === '0x539'))
        )
            return null
        try {
            await ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x89' }],
            })
        } catch (switchError) {
            // This error code indicates that the chain has not been added to MetaMask.
            if (switchError.code === 4902) {
                try {
                    await ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [
                            {
                                chainName: 'Polygon',
                                nativeCurrency: {
                                    name: 'MATIC',
                                    decimals: 18,
                                    symbol: 'MATIC',
                                },
                                chainId: '0x89',
                                rpcUrls: ['https://polygon-rpc.com/'],
                            },
                        ],
                    })
                } catch (addError) {
                    console.log({ addError })
                    // handle "add" error
                }
            }
            // handle other "switch" errors
        }
    }

    async function getTokenUris(callBack) {
        const promises = Object.keys(mintState.minting).reduce((acc, val) => {
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
                            resolve(tokenUri)
                        } catch (error) {
                            reject(error)
                        }
                    })()
                }),
            ]
        }, [])
        Promise.all(promises)
            .then((values) => {
                console.log({ values })
            })
            .catch((reason) => {
                console.log(reason)
            })
    }

    async function mintAvatar(amount, callBack) {
        if (!active) callBack({ error: 'Wallet not connected' })
        try {
            const contract = new library.eth.Contract(
                AvatarDestinareAbi,
                process.env.REACT_APP_AVATAR_DESTINARE_CONTRACT_ADDRESS
            )
            const mintAvatar = await contract.methods
                .mint(account, amount)
                .send({ from: account, value: nftAvatar * amount })

            const transformedData = transformMintAvatarResult(mintAvatar)
            saveMintData(transformedData)
            // const tokenUri = await contract.methods.tokenURI(1).call()
            callBack('Successful call')
        } catch (error) {
            console.log({ error })
            callBack({ error: 'Something went wrong while minting the nft.' })
        }
    }

    useEffectOnce(async () => {
        validateChainIdNetwork()
        if (walletActive) await connect()
    })

    return { connect, disconnect, mintAvatar, getTokenUris, active, error }
}

export default useSCInteractions
