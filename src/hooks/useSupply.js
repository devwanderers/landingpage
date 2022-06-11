import AvatarDestinareAbi from '../abi/AvatarDestinare.json'
import { useWeb3React } from '@web3-react/core'
import { useCallback, useState } from 'react'
import useInterval from './useInterval'

export const useSupply = () => {
    const { account, library } = useWeb3React()

    const [supply, setSupply] = useState(null)
    const fetchSupply = useCallback(async () => {
        if (!account) return
        const contract = new library.eth.Contract(
            AvatarDestinareAbi,
            process.env.REACT_APP_AVATAR_DESTINARE_CONTRACT_ADDRESS
        )
        const newSupply = await contract.methods.totalSupply().call()
        setSupply(newSupply)
    }, [account])

    useInterval(
        () => {
            fetchSupply()
        },
        account ? 5000 : null
    )

    return { reload: fetchSupply, supply }
}
