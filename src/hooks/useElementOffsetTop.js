import { useState, useEffect } from 'react'
import useEventListener from './useEventListener'

export const useElementOffsetTop = (ref) => {
    const [topOffset, setTopOffset] = useState(0)

    useEffect(() => {
        if (ref.current == null) return
        const _topOffset =
            ref.current.getBoundingClientRect().top +
            document.documentElement.scrollTop
        console.log(document.documentElement.scrollTop)
        setTopOffset(_topOffset)
    }, [])

    useEventListener('resize', () => {
        if (ref.current == null) return
        const _topOffset =
            ref.current.getBoundingClientRect().top +
            document.documentElement.scrollTop
        setTopOffset(_topOffset)
    })

    return topOffset
}
