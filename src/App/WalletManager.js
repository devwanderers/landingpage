/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

export default class WalletManager extends Component {
    constructor(props) {
        super(props)

        this.state = { valindatingNetwork: false }
    }

    interval = null

    componentDidMount() {
        this.interval = setInterval(() => {
            this.validateChainIdNetwork()
        }, 2000)
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval)
        }
    }

    clearInterval2() {
        console.log('Hola')
    }

    clearInterval = () => clearInterval(this.interval)

    setvalidatingChainId = () =>
        this.setState({ valindatingNetwork: !this.state.valindatingNetwork })

    validateChainIdNetwork = async () => {
        const ethereum = window.ethereum
        // valida que si esta corriendo actualmente una validacion no se ejecute nuevamente
        if (this.state.valindatingNetwork) return
        this.setvalidatingChainId()

        if (!ethereum || !ethereum?.networkVersion) {
            return null
        } else if (
            ethereum &&
            (ethereum.networkVersion === '137' ||
                ethereum.networkVersion === '5777')
        ) {
            return null
        }
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
        this.setvalidatingChainId()
        this.clearInterval()
    }

    render() {
        return null
    }
}
