/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import PropTypes from 'prop-types'

const transitionOptions = {
    left: {
        hidden: {
            opacity: 0,
            x: -200,
        },
        show: {
            opacity: 1,
            x: 0,
        },
    },
    top: {
        hidden: {
            opacity: 0,
            y: -200,
        },
        show: {
            opacity: 1,
            y: 0,
        },
    },
    right: {
        hidden: {
            opacity: 0,
            x: 200,
        },
        show: {
            opacity: 1,
            x: 0,
        },
    },
    bottom: {
        hidden: {
            opacity: 0,
            y: 200,
        },
        show: {
            opacity: 1,
            y: 0,
        },
    },
    leftTop: {
        hidden: {
            opacity: 0,
            x: -200,
            y: -200,
        },
        show: {
            opacity: 1,
            x: 0,
        },
    },
    rightTop: {
        hidden: {
            opacity: 0,
            x: 200,
            y: -200,
        },
        show: {
            opacity: 1,
            x: 0,
        },
    },
    leftBottom: {
        hidden: {
            opacity: 0,
            x: -200,
            y: 200,
        },
        show: {
            opacity: 1,
            x: 0,
        },
    },
    rightBottom: {
        hidden: {
            opacity: 0,
            x: 200,
            y: 200,
        },
        show: {
            opacity: 1,
            x: 0,
        },
    },
}

const defaultTransitionConfig = {
    type: 'spring',
}

const AnimateTransition = ({
    visible,
    transitionFrom = 'left',
    children,
    className,
    duration = 0.85,
    transitionConfig = defaultTransitionConfig,
}) => {
    const controls = useAnimation()

    useEffect(() => {
        if (visible) controls.start('show')
        else controls.start('hidden')
    }, [controls, visible])
    return (
        <motion.div
            className={className}
            initial="hidden"
            variants={transitionOptions[transitionFrom]}
            animate={controls}
            transition={{ duration, ...transitionConfig }}
        >
            {children}
        </motion.div>
    )
}
AnimateTransition.defaultProps = {}

AnimateTransition.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
}

export default AnimateTransition
