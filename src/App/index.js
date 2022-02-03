import React from 'react'
import ReactGA from 'react-ga'
import useConnect from '../hooks/useConnect'
import '../styles/App.less'

import LandingPage from '../views/LandingPage'
// import useDeactivateListener from './../hooks/useDeactivateListener'
import useEffectOnce from './../hooks/useEffectOnce'

const App = () => {
    useConnect()
    // useDeactivateListener()

    useEffectOnce(() => {
        ReactGA.initialize('G-4TR2JXTP2D')
        // ReactGA.pageview(window.location.pathname + window.location.search)
    })
    console.log('APP')
    return (
        <React.Fragment>
            <LandingPage />
        </React.Fragment>
    )
}

export default App
