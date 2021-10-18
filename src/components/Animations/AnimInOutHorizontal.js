import React from 'react'
import { useTransition, animated, config } from 'react-spring'
import PropTypes from 'prop-types'

const AnimInOutHorizontal = ({ visible, children, side = 'left' }) => {
    const transitionX = side === 'left' ? -200 : 200
    const transitions = useTransition(!!visible, {
        from: { opacity: 0, x: transitionX },
        enter: { opacity: 1, x: 0 },
        leave: { opacity: 0, x: transitionX },
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
AnimInOutHorizontal.defaultProps = {}

AnimInOutHorizontal.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    side: PropTypes.oneOf(['left', 'right']),
}

export default AnimInOutHorizontal
