import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'

const useScrollTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.history.scrollRestoration = 'manual'
        // window.scrollTo(0, 0)
        scroll.scrollToTop({ duration: 0 })
    }, [])

    useEffect(() => {
        scroll.scrollToTop({ duration: 0 })
    }, [pathname])
}

export default useScrollTop
