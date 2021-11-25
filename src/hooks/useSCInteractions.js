import { useState } from 'react'
import { useWeb3React } from '@web3-react/core'
// import { useDispatch } from 'react-redux'
import { injected } from '../wallet/connectors'
import { useLocalStorage } from './useStorage'
import DestinareContract from '../abi/DestinareContract.json'
import AvatarDestinare from '../abi/AvatarDestinare.json'
import useEffectOnce from './useEffectOnce'

const useSCInteractions = () => {
    const [data, setData] = useState({
        circulatingSupply: 0,
        totalSupply: 0,
        getPresaleInfo: { 0: [], 1: [] },
    })

    const { active, library, activate, deactivate, error } = useWeb3React()
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
        console.log({ ethereum })
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

    async function mintAvatar(callBack) {
        if (!active) callBack({ error: 'Wallet not connected' })
        try {
            const contract = new library.eth.Contract(
                AvatarDestinare,
                process.env.REACT_APP_AVATAR_DESTINARE_CONTRACT_ADDRESS
            )
            console.log({ contract })
            // const circulatingSupply = await contract.methods
            //     .circulatingSupply()
            //     .call()
            callBack('Successful call')
        } catch (error) {
            callBack({ error: 'Something went wrong while minting the nft.' })
        }
    }

    useEffectOnce(async () => {
        validateChainIdNetwork()
        if (walletActive) await connect()
        if (library?.eth) {
            const contract = new library.eth.Contract(
                DestinareContract,
                process.env.REACT_APP_DESTINARE_CONTRACT_ADDRESS
            )

            const circulatingSupply = await contract.methods
                .circulatingSupply()
                .call()
            const totalSupply = await contract.methods.totalSupply().call()
            const getPresaleInfo = await contract.methods
                .getPresaleInfo()
                .call()
            // const getUserInfo = await contract.methods.getUserInfo().call()
            // console.log({ getPresaleInfo })
            // console.log({ getUserInfo })
            setData((state) => ({
                ...state,
                circulatingSupply,
                totalSupply,
                getPresaleInfo: { ...getPresaleInfo },
            }))
        }
    })

    return { connect, disconnect, mintAvatar, active, error, data }
}

export default useSCInteractions
