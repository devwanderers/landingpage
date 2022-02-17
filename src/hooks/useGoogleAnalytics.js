import ReactGA from 'react-ga'
import { useHistory } from 'react-router'
import useEffectOnce from './useEffectOnce'

const useGoogleAnalytics = () => {
    const history = useHistory()

    useEffectOnce(() => {
        ReactGA.initialize('G-4TR2JXTP2D')
        history.listen((location) => ReactGA.pageview(location.pathname))
    })
}

export default useGoogleAnalytics
