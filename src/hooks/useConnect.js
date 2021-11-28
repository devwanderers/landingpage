import { useEffect } from 'react'
import { useLocalStorage } from './useStorage'
import useAuth from './useAuth'

const useConnect = () => {
    const { login } = useAuth()
    const [walletAuth] = useLocalStorage('walletAuth', false)

    useEffect(() => {
        if (walletAuth) {
            login()
        }
    }, [login, walletAuth])
}

export default useConnect
