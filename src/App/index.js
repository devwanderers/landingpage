import React from 'react'
import useConnect from '../hooks/useConnect'
import '../styles/App.less'
import { Widget } from '@maticnetwork/wallet-widget'

import LandingPage from '../views/LandingPage'
// import useDeactivateListener from './../hooks/useDeactivateListener'
import useEffectOnce from './../hooks/useEffectOnce'

const widget = new Widget({
    target: '#ethBridge',
    appName: 'The_wanderers_bridge',
    autoShowTime: 0,
    position: 'center',
    height: 630,
    width: 540,
    overlay: false,
    network: 'mainnet',
    closable: true,
})

const App = () => {
    useConnect()
    // useDeactivateListener()
    useEffectOnce(() => widget.create())

    return (
        <React.Fragment>
            <LandingPage />
        </React.Fragment>
    )
}

export default App
