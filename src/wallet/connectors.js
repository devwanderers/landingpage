import { InjectedConnector } from '@web3-react/injected-connector'
import { supportedChainIds } from './../constants/chainNetworks'

console.log({ supportedChainIds })
export const injected = new InjectedConnector({
    supportedChainIds,
})
