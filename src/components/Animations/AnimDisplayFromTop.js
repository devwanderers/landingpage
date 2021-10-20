import React from 'react'
import { useTransition, animated, config } from 'react-spring'
import PropTypes from 'prop-types'

const AnimDisplayFromTop = ({ visible, children }) => {
    const transitions = useTransition(!!visible, {
        from: { opacity: 1, height: 0, transformOrigin: '100% 0%' },
        enter: { opacity: 1, height: 100, transformOrigin: '100% 0%' },
        leave: { opacity: 1, height: 0, transformOrigin: '100% 0%' },
        delay: 200,
        config: config.stiff,
    })

    return transitions(
        (props, item) =>
            item && (
                <animated.div className="css-generic max-w-full" style={props}>
                    {children}
                </animated.div>
            )
    )
}
AnimDisplayFromTop.defaultProps = {}

AnimDisplayFromTop.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
}

export default AnimDisplayFromTop
