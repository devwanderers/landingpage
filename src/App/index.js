import React from 'react'
// import ReactGA from 'react-ga'
// import useConnect from '../hooks/useConnect'
import '../styles/App.less'

import LandingPage from '../views/LandingPage'
// import useDeactivateListener from './../hooks/useDeactivateListener'
// import useEffectOnce from './../hooks/useEffectOnce'
import useGoogleAnalytics from './../hooks/useGoogleAnalytics'

const App = () => {
    // useConnect()
    // useDeactivateListener()
    useGoogleAnalytics()
    // useEffectOnce(() => {
    //     ReactGA.initialize('G-4TR2JXTP2D')
    //     // ReactGA.pageview(window.location.pathname + window.location.search)
    // })
    return (
        <React.Fragment>
            <LandingPage />
        </React.Fragment>
    )
}

export default App
