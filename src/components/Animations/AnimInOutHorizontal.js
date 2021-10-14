import React from 'react'
import { Transition, animated } from 'react-spring'
import PropTypes from 'prop-types'

const AnimInOutHorizontal = ({ visible, children, side = 'left' }) => {
    const transitionX = side === 'left' ? -200 : 200
    return (
        <Transition
            items={!!visible}
            from={{ opacity: 0, x: transitionX }}
            enter={{ opacity: 1, x: 0 }}
            leave={{ opacity: 0, x: transitionX }}
            // delay={200}
        >
            {(props, show) =>
                show && (
                    <animated.div
                        className="css-generic max-w-full"
                        style={props}
                    >
                        {children}
                    </animated.div>
                )
            }
        </Transition>
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
