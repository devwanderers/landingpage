import { useEffect } from 'react'
import { useLocalStorage } from './useStorage'
import useAuth from './useAuth'
import { useWeb3React } from '@web3-react/core'

const useConnect = () => {
    const { login } = useAuth()
    const { connector, account } = useWeb3React()
    const [walletAuth, setWalletAuth] = useLocalStorage('walletAuth', false)

    useEffect(() => {
        if (walletAuth) {
            login()
        }
        // if (!account && !active && !walletAuth) {
        //     setWalletAuth(true)
        // }
    }, [login])

    useEffect(() => {
        if (account && connector) {
            const handleDeactivate = () => {
                setWalletAuth(false)
            }

            const reload = () => {
                window.location.reload()
            }

            connector.on('Web3ReactDeactivate', handleDeactivate)
            window.ethereum.on('chainChanged', reload)
            window.ethereum.on('accountsChanged', reload)
            return () => {
                connector.removeListener(
                    'Web3ReactDeactivate',
                    handleDeactivate
                )
                window.ethereum.removeListener('chainChanged', reload)
                window.ethereum.removeListener('accountsChanged', reload)
            }
        }
        return undefined
    }, [connector])
}

export default useConnect
