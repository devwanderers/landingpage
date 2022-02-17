import React from 'react'
// import NoAuthLayout from './components/Layouts/NoAuthLayout'
// import 'antd/dist'
import './styles/App.less'

// import { useThemeSwitcher } from 'react-css-theme-switcher'
// import { Button } from 'antd'
// import { UseEffectHook } from './hooks/UseEffectHook'
import AppRouter from './Router'
// import AuthLayout from './components/Layouts/AuthLayout'
// import LandingPage from './views/LandingPage'
import useGoogleAnalytics from './hooks/useGoogleAnalytics'

const App = () => {
    useGoogleAnalytics()
    return <AppRouter />
}

export default App
