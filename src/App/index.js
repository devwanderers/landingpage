import React from 'react'
import useConnect from '../hooks/useConnect'
import '../styles/App.less'

import LandingPage from '../views/LandingPage'
// import useDeactivateListener from './../hooks/useDeactivateListener'

const App = () => {
    useConnect()
    // useDeactivateListener()
    return (
        <React.Fragment>
            <LandingPage />
        </React.Fragment>
    )
}

export default App
