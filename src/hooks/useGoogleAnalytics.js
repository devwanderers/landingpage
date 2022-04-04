import ReactGA from 'react-ga'
import { useHistory } from 'react-router'
import useEffectOnce from './useEffectOnce'

const useGoogleAnalytics = () => {
    const history = useHistory()

    useEffectOnce(() => {
        ReactGA.initialize('UA-186217071-3')
        history.listen((location) => ReactGA.pageview(location.pathname))
    })
}

export default useGoogleAnalytics
