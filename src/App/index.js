import React from 'react'
import useConnect from '../hooks/useConnect'
import '../styles/App.less'

import LandingPage from '../views/LandingPage'

const App = () => {
    useConnect()

    return (
        <React.Fragment>
            <LandingPage />
        </React.Fragment>
    )
}

export default App
