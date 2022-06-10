import React, { useEffect, useState } from 'react'
import { useViewportScroll, useTransform, motion } from 'framer-motion'

import { useRefScrollProgress } from '../../../hooks/useRefScrollProgress'
import useWindowSize from '../../../hooks/useWindowSize'

const RoadMapSVG = (props) => {
    const { scrollY } = useViewportScroll()
    const { height } = useWindowSize()
    const [completed1, setCompleted1] = useState(false)
    const [completed2, setCompleted2] = useState(false)
    const [completed3, setCompleted3] = useState(false)
    const [completed4, setCompleted4] = useState(false)
    const [completed5, setCompleted5] = useState(false)
    const [completed6, setCompleted6] = useState(false)

    const { ref: step1Ref, start: start1 } = useRefScrollProgress()
    const { ref: step2Ref, start: start2 } = useRefScrollProgress()
    const { ref: step3Ref, start: start3 } = useRefScrollProgress()
    const { ref: step4Ref, start: start4 } = useRefScrollProgress()
    const { ref: step5Ref, start: start5 } = useRefScrollProgress()
    const { ref: step6Ref, start: start6 } = useRefScrollProgress()
    const { ref: step7Ref, start: start7 } = useRefScrollProgress()

    const screenHeightHalf = height * 0.5

    const step1ToStep2 = useTransform(
        scrollY,
        [start1 - screenHeightHalf, start2 - screenHeightHalf],
        [-100, 0]
    )

    const step2ToStep3 = useTransform(
        scrollY,
        [start2 - screenHeightHalf, start3 - screenHeightHalf],
        [-100, 0]
    )
    const step3ToStep4 = useTransform(
        scrollY,
        [start3 - screenHeightHalf, start4 - screenHeightHalf],
        [-100, 0]
    )

    const step4ToStep5 = useTransform(
        scrollY,
        [start4 - screenHeightHalf, start5 - screenHeightHalf],
        [-100, 0]
    )
    const step5ToStep6 = useTransform(
        scrollY,
        [start5 - screenHeightHalf, start6 - screenHeightHalf],
        [-100, 0]
    )

    const step6ToStep7 = useTransform(
        scrollY,
        [start6 - screenHeightHalf, start7 - screenHeightHalf],
        [-100, 0]
    )

    useEffect(
        () =>
            step1ToStep2.onChange((v) => {
                setCompleted1(v > -1)
            }),
        [step1ToStep2]
    )

    useEffect(
        () => step2ToStep3.onChange((v) => setCompleted2(v > -1)),
        [step2ToStep3]
    )

    useEffect(
        () => step3ToStep4.onChange((v) => setCompleted3(v > -1)),
        [step3ToStep4]
    )

    useEffect(
        () => step4ToStep5.onChange((v) => setCompleted4(v > -1)),
        [step4ToStep5]
    )

    useEffect(() =>
        step5ToStep6.onChange((v) => setCompleted5(v > -1), [step5ToStep6])
    )

    useEffect(() =>
        step6ToStep7.onChange((v) => setCompleted6(v > -1), [step6ToStep7])
    )

    console.log({ step2ToStep3, completed2 })

    return (
        <svg
            id="a"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 530.24 848.01"
            {...props}
        >
            <g>
                <text
                    transform="translate(181.16 11.92)"
                    style={{
                        fill: '#3ab295',
                        fontFamily: 'RussoOne-Regular, Russo One',
                        fontSize: '14.03px',
                    }}
                >
                    <tspan x={0} y={0}>
                        {'Q1 2022'}
                    </tspan>
                </text>
                <text
                    transform="translate(158.16 40.24)"
                    style={{
                        fill: '#10b4e9',
                        fontFamily: 'RussoOne-Regular, Russo One',
                        fontSize: '14.03px',
                    }}
                >
                    <tspan x={0} y={0}>
                        {'Launchpad'}
                    </tspan>
                </text>
                <text
                    transform="translate(184.62 62.71)"
                    style={{
                        fill: '#bbd0e3',
                        fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                        fontSize: '12.95px',
                    }}
                >
                    <tspan
                        x={0}
                        y={0}
                        style={{
                            letterSpacing: '-.03em',
                        }}
                    >
                        {'W'}
                    </tspan>
                    <tspan x={8.78} y={0}>
                        {'ebsi'}
                    </tspan>
                    <tspan
                        x={27.61}
                        y={0}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'t'}
                    </tspan>
                    <tspan
                        x={31.21}
                        y={0}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'e v.1'}
                    </tspan>
                    <tspan x={-39.47} y={21}>
                        {'Community suppo'}
                    </tspan>
                    <tspan
                        x={43.31}
                        y={21}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'r'}
                    </tspan>
                    <tspan
                        x={47.23}
                        y={21}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'t'}
                    </tspan>
                    <tspan x={-18} y={42}>
                        {'Mar'}
                    </tspan>
                    <tspan
                        x={0}
                        y={42}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'k'}
                    </tspan>
                    <tspan
                        x={5.24}
                        y={42}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'e'}
                    </tspan>
                    <tspan x={10.71} y={42}>
                        {'ting plan'}
                    </tspan>
                    <tspan x={-31.14} y={63}>
                        {'NF'}
                    </tspan>
                    <tspan
                        x={-19.11}
                        y={63}
                        style={{
                            letterSpacing: '-.01em',
                        }}
                    >
                        {'T'}
                    </tspan>
                    <tspan x={-13.94} y={63} xmlSpace="preserve">
                        {' d'}
                    </tspan>
                    <tspan
                        x={-5.66}
                        y={63}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'ev'}
                    </tspan>
                    <tspan
                        x={4.91}
                        y={63}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'elopment '}
                    </tspan>
                </text>
                <text
                    transform="translate(295.25 108.42)"
                    style={{
                        fill: '#3ab295',
                        fontFamily: 'RussoOne-Regular, Russo One',
                        fontSize: '14.03px',
                    }}
                >
                    <tspan x={0} y={0}>
                        {'Q1 2022'}
                    </tspan>
                </text>
                <text
                    transform="translate(295.25 136.73)"
                    style={{
                        fill: '#10b4e9',
                        fontFamily: 'RussoOne-Regular, Russo One',
                        fontSize: '14.03px',
                    }}
                >
                    <tspan x={0} y={0}>
                        {'Nomadzland Communi'}
                    </tspan>
                    <tspan
                        x={157.5}
                        y={0}
                        style={{
                            letterSpacing: '-.02em',
                        }}
                    >
                        {'t'}
                    </tspan>
                    <tspan x={163.39} y={0}>
                        {'y'}
                    </tspan>
                </text>
                <text
                    transform="translate(295.25 159.21)"
                    style={{
                        fill: '#bbd0e3',
                        fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                        fontSize: '12.95px',
                    }}
                >
                    <tspan x={0} y={0}>
                        {'Community '}
                    </tspan>
                    <tspan
                        x={54.81}
                        y={0}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'r'}
                    </tspan>
                    <tspan
                        x={58.56}
                        y={0}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'ew'}
                    </tspan>
                    <tspan x={71.85} y={0}>
                        {'a'}
                    </tspan>
                    <tspan
                        x={77.34}
                        y={0}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'r'}
                    </tspan>
                    <tspan x={81.08} y={0}>
                        {'ds'}
                    </tspan>
                    <tspan x={0} y={21}>
                        {'Ai'}
                    </tspan>
                    <tspan
                        x={9.05}
                        y={21}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'r'}
                    </tspan>
                    <tspan x={12.79} y={21}>
                        {'d'}
                    </tspan>
                    <tspan
                        x={18.59}
                        y={21}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'r'}
                    </tspan>
                    <tspan
                        x={22.33}
                        y={21}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'ops'}
                    </tspan>
                    <tspan x={0} y={42}>
                        {'Gi'}
                    </tspan>
                    <tspan
                        x={8.91}
                        y={42}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'v'}
                    </tspan>
                    <tspan
                        x={14.07}
                        y={42}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'e'}
                    </tspan>
                    <tspan
                        x={19.6}
                        y={42}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'aw'}
                    </tspan>
                    <tspan x={32.86} y={42}>
                        {'ays & mo'}
                    </tspan>
                    <tspan
                        x={75.41}
                        y={42}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'r'}
                    </tspan>
                    <tspan x={79.15} y={42}>
                        {'e'}
                    </tspan>
                    <tspan
                        x={0}
                        y={63}
                        style={{
                            letterSpacing: '-.03em',
                        }}
                    >
                        {'T'}
                    </tspan>
                    <tspan
                        x={4.97}
                        y={63}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'o'}
                    </tspan>
                    <tspan
                        x={10.63}
                        y={63}
                        style={{
                            letterSpacing: '-.01em',
                        }}
                    >
                        {'k'}
                    </tspan>
                    <tspan x={15.87} y={63}>
                        {'en and bac'}
                    </tspan>
                    <tspan
                        x={65.15}
                        y={63}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'k'}
                    </tspan>
                    <tspan
                        x={70.39}
                        y={63}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'end suppo'}
                    </tspan>
                    <tspan
                        x={118.01}
                        y={63}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'r'}
                    </tspan>
                    <tspan
                        x={121.93}
                        y={63}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'t deployment '}
                    </tspan>
                </text>
                <text
                    transform="translate(109.91 451.52)"
                    style={{
                        fill: '#3ab295',
                        fontFamily: 'RussoOne-Regular, Russo One',
                        fontSize: '14.03px',
                    }}
                >
                    <tspan x={0} y={0}>
                        {'Q2 2022 Season 2'}
                    </tspan>
                </text>
                <text
                    transform="translate(68.68 479.84)"
                    style={{
                        fill: '#10b4e9',
                        fontFamily: 'RussoOne-Regular, Russo One',
                        fontSize: '14.03px',
                    }}
                >
                    <tspan x={0} y={0}>
                        {'Nomadzland Metaverse'}
                    </tspan>
                </text>
                <text
                    transform="translate(132.84 502.31)"
                    style={{
                        fill: '#bbd0e3',
                    }}
                >
                    <tspan
                        style={{
                            fontFamily:
                                'SairaCondensed-Medium, Saira Condensed',
                            fontSize: '12.95px',
                        }}
                    >
                        <tspan x={0} y={0}>
                            {'Public mint of all '}
                        </tspan>
                        <tspan
                            x={78.58}
                            y={0}
                            style={{
                                letterSpacing: '0em',
                            }}
                        >
                            {'r'}
                        </tspan>
                        <tspan x={82.26} y={0}>
                            {'aces'}
                        </tspan>
                    </tspan>
                    <tspan
                        style={{
                            fontFamily:
                                'SairaCondensed-Medium, Saira Condensed',
                            fontSize: '12.95px',
                        }}
                    >
                        <tspan x={-77.41} y={21}>
                            {'The second '}
                        </tspan>
                        <tspan
                            x={-23.5}
                            y={21}
                            style={{
                                letterSpacing: '0em',
                            }}
                        >
                            {'wav'}
                        </tspan>
                        <tspan
                            x={-5.07}
                            y={21}
                            style={{
                                letterSpacing: '0em',
                            }}
                        >
                            {'e of De'}
                        </tspan>
                        <tspan
                            x={26.79}
                            y={21}
                            style={{
                                letterSpacing: '0em',
                            }}
                        >
                            {'s'}
                        </tspan>
                        <tspan x={31.59} y={21}>
                            {'tin'}
                        </tspan>
                        <tspan
                            x={43.73}
                            y={21}
                            style={{
                                letterSpacing: '0em',
                            }}
                        >
                            {'a'}
                        </tspan>
                        <tspan x={49.16} y={21}>
                            {'tions d'}
                        </tspan>
                        <tspan
                            x={80.11}
                            y={21}
                            style={{
                                letterSpacing: '0em',
                            }}
                        >
                            {'r'}
                        </tspan>
                        <tspan
                            x={83.85}
                            y={21}
                            style={{
                                letterSpacing: '0em',
                            }}
                        >
                            {'ops '}
                        </tspan>
                    </tspan>
                    <tspan
                        style={{
                            fontFamily:
                                'SairaCondensed-Regular, Saira Condensed',
                            fontSize: 9,
                        }}
                    >
                        <tspan x={10.45} y={34}>
                            {'(2 Nomadz '}
                        </tspan>
                        <tspan
                            x={46.18}
                            y={34}
                            style={{
                                letterSpacing: '0em',
                            }}
                        >
                            {'r'}
                        </tspan>
                        <tspan
                            x={48.7}
                            y={34}
                            style={{
                                letterSpacing: '0em',
                            }}
                        >
                            {'equi'}
                        </tspan>
                        <tspan
                            x={62.44}
                            y={34}
                            style={{
                                letterSpacing: '0em',
                            }}
                        >
                            {'r'}
                        </tspan>
                        <tspan x={64.96} y={34}>
                            {'ed '}
                        </tspan>
                        <tspan
                            x={74.59}
                            y={34}
                            style={{
                                letterSpacing: '0em',
                            }}
                        >
                            {'t'}
                        </tspan>
                        <tspan x={77} y={34}>
                            {'o apply)'}
                        </tspan>
                    </tspan>
                    <tspan
                        style={{
                            fontFamily:
                                'SairaCondensed-Medium, Saira Condensed',
                            fontSize: '12.95px',
                        }}
                    >
                        <tspan x={36.93} y={55}>
                            {'DD'}
                        </tspan>
                        <tspan
                            x={49.78}
                            y={55}
                            style={{
                                letterSpacing: '0em',
                            }}
                        >
                            {'O'}
                        </tspan>
                        <tspan
                            x={56.35}
                            y={55}
                            style={{
                                letterSpacing: '-.01em',
                            }}
                        >
                            {'T'}
                        </tspan>
                        <tspan x={61.52} y={55} xmlSpace="preserve">
                            {' Ai'}
                        </tspan>
                        <tspan
                            x={73.05}
                            y={55}
                            style={{
                                letterSpacing: '0em',
                            }}
                        >
                            {'r'}
                        </tspan>
                        <tspan x={76.8} y={55}>
                            {'d'}
                        </tspan>
                        <tspan
                            x={82.6}
                            y={55}
                            style={{
                                letterSpacing: '0em',
                            }}
                        >
                            {'r'}
                        </tspan>
                        <tspan
                            x={86.34}
                            y={55}
                            style={{
                                letterSpacing: '0em',
                            }}
                        >
                            {'ops'}
                        </tspan>
                    </tspan>
                    <tspan
                        style={{
                            fontFamily:
                                'SairaCondensed-Medium, Saira Condensed',
                            fontSize: '12.95px',
                        }}
                    >
                        <tspan x={-24.97} y={76}>
                            {'Public sale De'}
                        </tspan>
                        <tspan
                            x={37.95}
                            y={76}
                            style={{
                                letterSpacing: '0em',
                            }}
                        >
                            {'s'}
                        </tspan>
                        <tspan x={42.75} y={76}>
                            {'tin'}
                        </tspan>
                        <tspan
                            x={54.89}
                            y={76}
                            style={{
                                letterSpacing: '0em',
                            }}
                        >
                            {'a'}
                        </tspan>
                        <tspan x={60.32} y={76}>
                            {'tions NF'}
                        </tspan>
                        <tspan
                            x={97.5}
                            y={76}
                            style={{
                                letterSpacing: '-.01em',
                            }}
                        >
                            {'T'}
                        </tspan>
                    </tspan>
                </text>
            </g>
            <polyline
                points="257.75 21.89 41.25 21.89 41.25 56.89"
                style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeMiterlimit: 10,
                    strokeWidth: '.5px',
                }}
            />
            <motion.line
                x1={257.75}
                y1={115.81}
                x2={257.75}
                y2={22.81}
                style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeMiterlimit: 10,
                    strokeWidth: '.5px',
                }}
                strokeDashoffset={step1ToStep2}
                pathLength="100"
                strokeDasharray="100"
            />
            <motion.line
                x1={257.75}
                y1={243.89}
                x2={257.75}
                y2={115.81}
                style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeMiterlimit: 10,
                    strokeWidth: '.5px',
                }}
                strokeDashoffset={step2ToStep3}
                pathLength="100"
                strokeDasharray="100"
            />
            <motion.line
                x1={257.75}
                y1={344.39}
                x2={257.75}
                y2={243.89}
                style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeMiterlimit: 10,
                    strokeWidth: '.5px',
                }}
                strokeDashoffset={step3ToStep4}
                pathLength="100"
                strokeDasharray="100"
            />
            <motion.line
                x1={257.75}
                y1={459.39}
                x2={257.75}
                y2={344.39}
                style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeMiterlimit: 10,
                    strokeWidth: '.5px',
                }}
                strokeDashoffset={step4ToStep5}
                pathLength="100"
                strokeDasharray="100"
            />
            <motion.line
                x1={257.75}
                y1={604.39}
                x2={257.75}
                y2={459.39}
                style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeMiterlimit: 10,
                    strokeWidth: '.5px',
                }}
                strokeDashoffset={step5ToStep6}
                pathLength="100"
                strokeDasharray="100"
            />
            <motion.line
                x1={257.75}
                y1={737.81}
                x2={257.75}
                y2={604.39}
                style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeMiterlimit: 10,
                    strokeWidth: '.5px',
                }}
                strokeDashoffset={step6ToStep7}
                pathLength="100"
                strokeDasharray="100"
            />
            <polyline
                points="256.99 116.31 529.99 116.31 529.99 144.81"
                style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeMiterlimit: 10,
                    strokeWidth: '.5px',
                }}
            />
            <polyline
                points="256.25 459.89 .25 459.89 .25 493.89"
                style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeMiterlimit: 10,
                    strokeWidth: '.5px',
                }}
            />
            <g>
                <rect
                    ref={step1Ref}
                    x={252.89}
                    y={17.44}
                    width={9.9}
                    height={9.9}
                    transform="translate(91.35 -175.76) rotate(45)"
                    style={{
                        fill: '#3cb295',
                    }}
                />
                <path
                    d="M257.84,15.39l7,7-7,7-7-7,7-7m0-4.24l-2.12,2.12-7,7-2.12,2.12,2.12,2.12,7,7,2.12,2.12,2.12-2.12,7-7,2.12-2.12-2.12-2.12-7-7-2.12-2.12h0Z"
                    style={{
                        fill: '#fff',
                    }}
                />
            </g>
            <g>
                <rect
                    ref={step2Ref}
                    x={252.63}
                    y={110.86}
                    width={9.9}
                    height={9.9}
                    transform="translate(157.33 -148.22) rotate(45)"
                    style={{ fill: completed1 ? '#3bb396' : '#03152b' }}
                />
                <path
                    d="M257.58,108.81l7,7-7,7-7-7,7-7m0-4.24l-2.12,2.12-7,7-2.12,2.12,2.12,2.12,7,7,2.12,2.12,2.12-2.12,7-7,2.12-2.12-2.12-2.12-7-7-2.12-2.12h0Z"
                    style={{
                        fill: '#fff',
                    }}
                />
            </g>
            <g>
                {/* 5 */}
                <rect
                    ref={step5Ref}
                    x={252.89}
                    y={454.44}
                    width={9.9}
                    height={9.9}
                    transform="translate(400.36 -47.77) rotate(45)"
                    style={{ fill: completed4 ? '#3bb396' : '#03152b' }}
                />
                <path
                    d="M257.84,452.39l7,7-7,7-7-7,7-7m0-4.24l-2.12,2.12-7,7-2.12,2.12,2.12,2.12,7,7,2.12,2.12,2.12-2.12,7-7,2.12-2.12-2.12-2.12-7-7-2.12-2.12h0Z"
                    style={{
                        fill: '#fff',
                    }}
                />
            </g>
            <g>
                <text
                    transform="translate(178.57 235.13)"
                    style={{
                        fill: '#3ab295',
                        fontFamily: 'RussoOne-Regular, Russo One',
                        fontSize: '14.03px',
                    }}
                >
                    <tspan x={0} y={0}>
                        {'Q2 2022'}
                    </tspan>
                </text>
                <text
                    transform="translate(69.66 263.45)"
                    style={{
                        fill: '#10b4e9',
                        fontFamily: 'RussoOne-Regular, Russo One',
                        fontSize: '14.03px',
                    }}
                >
                    <tspan x={0} y={0}>
                        {'Nomadzland p'}
                    </tspan>
                    <tspan
                        x={100.56}
                        y={0}
                        style={{
                            letterSpacing: '-.02em',
                        }}
                    >
                        {'r'}
                    </tspan>
                    <tspan x={106.73} y={0}>
                        {'eseason'}
                    </tspan>
                </text>
                <polyline
                    points="257.25 243.89 24.25 243.89 24.25 284.89"
                    style={{
                        fill: 'none',
                        stroke: '#fff',
                        strokeMiterlimit: 10,
                        strokeWidth: '.5px',
                    }}
                />
                <g>
                    {/* 3 */}
                    <rect
                        ref={step3Ref}
                        x={252.89}
                        y={238.44}
                        width={9.9}
                        height={9.9}
                        transform="translate(247.62 -111.03) rotate(45)"
                        style={{ fill: completed2 ? '#3bb396' : '#03152b' }}
                    />
                    <path
                        d="M257.84,236.39l7,7-7,7-7-7,7-7m0-4.24l-2.12,2.12-7,7-2.12,2.12,2.12,2.12,7,7,2.12,2.12,2.12-2.12,7-7,2.12-2.12-2.12-2.12-7-7-2.12-2.12h0Z"
                        style={{
                            fill: '#fff',
                        }}
                    />
                </g>
                <text
                    transform="translate(159.88 281.43)"
                    style={{
                        fill: '#bbd0e3',
                        fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                        fontSize: '12.95px',
                    }}
                >
                    <tspan
                        x={0}
                        y={0}
                        style={{
                            letterSpacing: '-.03em',
                        }}
                    >
                        {'W'}
                    </tspan>
                    <tspan x={8.78} y={0}>
                        {'ebsi'}
                    </tspan>
                    <tspan
                        x={27.61}
                        y={0}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'t'}
                    </tspan>
                    <tspan
                        x={31.21}
                        y={0}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'e upd'}
                    </tspan>
                    <tspan
                        x={56.67}
                        y={0}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'at'}
                    </tspan>
                    <tspan x={65.69} y={0}>
                        {'es'}
                    </tspan>
                    <tspan x={-86.24} y={21}>
                        {'R'}
                    </tspan>
                    <tspan
                        x={-79.87}
                        y={21}
                        style={{
                            letterSpacing: '-.01em',
                        }}
                    >
                        {'ew'}
                    </tspan>
                    <tspan x={-66.57} y={21}>
                        {'a'}
                    </tspan>
                    <tspan
                        x={-61.08}
                        y={21}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'r'}
                    </tspan>
                    <tspan x={-57.34} y={21}>
                        {"ds claiming's pl"}
                    </tspan>
                    <tspan
                        x={12.35}
                        y={21}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'a'}
                    </tspan>
                    <tspan
                        x={17.78}
                        y={21}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'t'}
                    </tspan>
                    <tspan
                        x={21.44}
                        y={21}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'f'}
                    </tspan>
                    <tspan x={25.13} y={21}>
                        {'orm launch'}
                    </tspan>
                    <tspan x={-7.18} y={42}>
                        {'Pa'}
                    </tspan>
                    <tspan
                        x={4.34}
                        y={42}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'r'}
                    </tspan>
                    <tspan x={8.26} y={42}>
                        {'tners & Collabs'}
                    </tspan>
                </text>
            </g>
            <g>
                <text
                    transform="translate(295.51 336.56)"
                    style={{
                        fill: '#3ab295',
                        fontFamily: 'RussoOne-Regular, Russo One',
                        fontSize: '14.03px',
                    }}
                >
                    <tspan x={0} y={0}>
                        {'Q2 2022'}
                    </tspan>
                </text>
                <text
                    transform="translate(295.51 364.88)"
                    style={{
                        fill: '#10b4e9',
                        fontFamily: 'RussoOne-Regular, Russo One',
                        fontSize: '14.03px',
                    }}
                >
                    <tspan x={0} y={0}>
                        {'Nomadzland Season 1'}
                    </tspan>
                </text>
                <polyline
                    points="256.25 344.89 526.99 344.89 526.99 382.89"
                    style={{
                        fill: 'none',
                        stroke: '#fff',
                        strokeMiterlimit: 10,
                        strokeWidth: '.5px',
                    }}
                />
                <g>
                    {/* 4 */}
                    <rect
                        ref={step4Ref}
                        x={252.89}
                        y={339.44}
                        width={9.9}
                        height={9.9}
                        transform="translate(319.04 -81.45) rotate(45)"
                        style={{
                            fill: completed3 ? '#3cb295' : '#03152b',
                        }}
                    />
                    <path
                        d="M257.84,337.39l7,7-7,7-7-7,7-7m0-4.24l-2.12,2.12-7,7-2.12,2.12,2.12,2.12,7,7,2.12,2.12,2.12-2.12,7-7,2.12-2.12-2.12-2.12-7-7-2.12-2.12h0Z"
                        style={{
                            fill: '#fff',
                        }}
                    />
                </g>
                <text
                    transform="translate(295.51 387.35)"
                    style={{
                        fill: '#bbd0e3',
                        fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                        fontSize: '12.95px',
                    }}
                >
                    <tspan x={0} y={0}>
                        {'Genesis collection minting period'}
                    </tspan>
                    <tspan x={0} y={21}>
                        {'Pri'}
                    </tspan>
                    <tspan
                        x={12.48}
                        y={21}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'v'}
                    </tspan>
                    <tspan
                        x={17.65}
                        y={21}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'at'}
                    </tspan>
                    <tspan x={26.67} y={21}>
                        {'e & P'}
                    </tspan>
                    <tspan
                        x={50.09}
                        y={21}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'r'}
                    </tspan>
                    <tspan x={53.83} y={21}>
                        {'esale DD'}
                    </tspan>
                    <tspan
                        x={93.21}
                        y={21}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'O'}
                    </tspan>
                    <tspan
                        x={99.79}
                        y={21}
                        style={{
                            letterSpacing: '-.01em',
                        }}
                    >
                        {'T'}
                    </tspan>
                    <tspan x={104.96} y={21} xmlSpace="preserve">
                        {' access '}
                    </tspan>
                    <tspan
                        x={139.72}
                        y={21}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'f'}
                    </tspan>
                    <tspan x={143.41} y={21}>
                        {'or genesis holders'}
                    </tspan>
                    <tspan x={0} y={42}>
                        {'De'}
                    </tspan>
                    <tspan
                        x={11.95}
                        y={42}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'s'}
                    </tspan>
                    <tspan x={16.75} y={42}>
                        {'tin'}
                    </tspan>
                    <tspan
                        x={28.9}
                        y={42}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'a'}
                    </tspan>
                    <tspan x={34.32} y={42}>
                        {'tion NF'}
                    </tspan>
                    <tspan
                        x={66.63}
                        y={42}
                        style={{
                            letterSpacing: '-.03em',
                        }}
                    >
                        {'T'}
                    </tspan>
                    <tspan x={71.61} y={42} xmlSpace="preserve">
                        {'s  d'}
                    </tspan>
                    <tspan
                        x={87.24}
                        y={42}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'r'}
                    </tspan>
                    <tspan
                        x={90.99}
                        y={42}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'op '}
                    </tspan>
                    <tspan
                        x={104.93}
                        y={42}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'t'}
                    </tspan>
                    <tspan x={108.53} y={42}>
                        {'o genesis holders'}
                    </tspan>
                    <tspan x={0} y={63}>
                        {'De'}
                    </tspan>
                    <tspan
                        x={11.95}
                        y={63}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'s'}
                    </tspan>
                    <tspan x={16.75} y={63}>
                        {'tina'}
                    </tspan>
                    <tspan
                        x={34.39}
                        y={63}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'r'}
                    </tspan>
                    <tspan x={38.13} y={63}>
                        {'e pl'}
                    </tspan>
                    <tspan
                        x={54.58}
                        y={63}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'a'}
                    </tspan>
                    <tspan x={60.01} y={63}>
                        {'t'}
                    </tspan>
                    <tspan
                        x={63.67}
                        y={63}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'f'}
                    </tspan>
                    <tspan
                        x={67.36}
                        y={63}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'orm access'}
                    </tspan>
                </text>
            </g>
            <g>
                <text
                    transform="translate(144.77 729.52)"
                    style={{
                        fill: '#3ab295',
                        fontFamily: 'RussoOne-Regular, Russo One',
                        fontSize: '14.03px',
                    }}
                >
                    <tspan x={0} y={0}>
                        {'Q2 - Q3 2022'}
                    </tspan>
                </text>
                <text
                    transform="translate(90.35 757.84)"
                    style={{
                        fill: '#10b4e9',
                        fontFamily: 'RussoOne-Regular, Russo One',
                        fontSize: '14.03px',
                    }}
                >
                    <tspan x={0} y={0}>
                        {'Nomadzland & DDOT'}
                    </tspan>
                </text>
                <text
                    transform="translate(145.01 780.31)"
                    style={{
                        fill: '#bbd0e3',
                        fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                        fontSize: '12.95px',
                    }}
                >
                    <tspan x={0} y={0}>
                        {'Public '}
                    </tspan>
                    <tspan
                        x={29.96}
                        y={0}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'s'}
                    </tspan>
                    <tspan
                        x={34.76}
                        y={0}
                        style={{
                            letterSpacing: '-.01em',
                        }}
                    >
                        {'t'}
                    </tspan>
                    <tspan x={38.29} y={0}>
                        {'aking DD'}
                    </tspan>
                    <tspan
                        x={78.75}
                        y={0}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'O'}
                    </tspan>
                    <tspan
                        x={85.33}
                        y={0}
                        style={{
                            letterSpacing: '-.01em',
                        }}
                    >
                        {'T'}
                    </tspan>
                    <tspan x={13.96} y={21}>
                        {'Coingec'}
                    </tspan>
                    <tspan
                        x={49.09}
                        y={21}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'k'}
                    </tspan>
                    <tspan x={54.34} y={21}>
                        {'o li'}
                    </tspan>
                    <tspan
                        x={67.76}
                        y={21}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'s'}
                    </tspan>
                    <tspan
                        x={72.56}
                        y={21}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'ting'}
                    </tspan>
                    <tspan x={-79.89} y={42}>
                        {'Applic'}
                    </tspan>
                    <tspan
                        x={-52.08}
                        y={42}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'a'}
                    </tspan>
                    <tspan x={-46.66} y={42}>
                        {'tion '}
                    </tspan>
                    <tspan
                        x={-26.37}
                        y={42}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'f'}
                    </tspan>
                    <tspan
                        x={-22.68}
                        y={42}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'or cent'}
                    </tspan>
                    <tspan
                        x={8.82}
                        y={42}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'r'}
                    </tspan>
                    <tspan x={12.49} y={42}>
                        {'alized '}
                    </tspan>
                    <tspan
                        x={41.97}
                        y={42}
                        style={{
                            letterSpacing: '-.01em',
                        }}
                    >
                        {'ex'}
                    </tspan>
                    <tspan x={52.63} y={42}>
                        {'changes'}
                    </tspan>
                    <tspan x={-89.21} y={63}>
                        {'Mo'}
                    </tspan>
                    <tspan
                        x={-74.85}
                        y={63}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'r'}
                    </tspan>
                    <tspan x={-71.11} y={63}>
                        {'e benefits and announcements TBA'}
                    </tspan>
                </text>
                <polyline
                    points="256.25 737.89 .25 737.89 .25 771.89"
                    style={{
                        fill: 'none',
                        stroke: '#fff',
                        strokeMiterlimit: 10,
                        strokeWidth: '.5px',
                    }}
                />
                <g>
                    {/* 7 */}
                    <rect
                        ref={step7Ref}
                        x={252.89}
                        y={732.44}
                        width={9.9}
                        height={9.9}
                        transform="translate(596.93 33.66) rotate(45)"
                        style={{
                            fill: completed6 ? '#3cb295' : '',
                        }}
                    />
                    <path
                        d="M257.84,730.39l7,7-7,7-7-7,7-7m0-4.24l-2.12,2.12-7,7-2.12,2.12,2.12,2.12,7,7,2.12,2.12,2.12-2.12,7-7,2.12-2.12-2.12-2.12-7-7-2.12-2.12h0Z"
                        style={{
                            fill: '#fff',
                        }}
                    />
                </g>
            </g>
            <g>
                <text
                    transform="translate(295.51 596.36)"
                    style={{
                        fill: '#3ab295',
                        fontFamily: 'RussoOne-Regular, Russo One',
                        fontSize: '14.03px',
                    }}
                >
                    <tspan x={0} y={0}>
                        {'Q2 2022 '}
                    </tspan>
                </text>
                <text
                    transform="translate(295.51 624.68)"
                    style={{
                        fill: '#10b4e9',
                        fontFamily: 'RussoOne-Regular, Russo One',
                        fontSize: '14.03px',
                    }}
                >
                    <tspan x={0} y={0}>
                        {'Nomadzland season 3'}
                    </tspan>
                </text>
                <polyline
                    points="257.25 604.89 484.99 604.89 484.99 634.89"
                    style={{
                        fill: 'none',
                        stroke: '#fff',
                        strokeMiterlimit: 10,
                        strokeWidth: '.5px',
                    }}
                />
                <g>
                    {/* 6 */}
                    <rect
                        ref={step6Ref}
                        x={252.89}
                        y={599.44}
                        width={9.9}
                        height={9.9}
                        transform="translate(502.89 -5.3) rotate(45)"
                        style={{
                            fill: completed5 ? '#3cb295' : '',
                        }}
                    />
                    <path
                        d="M257.84,597.39l7,7-7,7-7-7,7-7m0-4.24l-2.12,2.12-7,7-2.12,2.12,2.12,2.12,7,7,2.12,2.12,2.12-2.12,7-7,2.12-2.12-2.12-2.12-7-7-2.12-2.12h0Z"
                        style={{
                            fill: '#fff',
                        }}
                    />
                </g>
                <text
                    transform="translate(295.51 647.16)"
                    style={{
                        fill: '#bbd0e3',
                        fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                        fontSize: '12.95px',
                    }}
                >
                    <tspan x={0} y={0}>
                        {'Public sale DD'}
                    </tspan>
                    <tspan
                        x={63.81}
                        y={0}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'O'}
                    </tspan>
                    <tspan
                        x={70.39}
                        y={0}
                        style={{
                            letterSpacing: '-.01em',
                        }}
                    >
                        {'T'}
                    </tspan>
                    <tspan x={0} y={21}>
                        {'The second '}
                    </tspan>
                    <tspan
                        x={53.91}
                        y={21}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'wav'}
                    </tspan>
                    <tspan
                        x={72.33}
                        y={21}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'e of DD'}
                    </tspan>
                    <tspan
                        x={105.08}
                        y={21}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'O'}
                    </tspan>
                    <tspan
                        x={111.66}
                        y={21}
                        style={{
                            letterSpacing: '-.02em',
                        }}
                    >
                        {'T'}
                    </tspan>
                    <tspan x={116.83} y={21} xmlSpace="preserve">
                        {' Ai'}
                    </tspan>
                    <tspan
                        x={128.36}
                        y={21}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'r'}
                    </tspan>
                    <tspan x={132.1} y={21}>
                        {'d'}
                    </tspan>
                    <tspan
                        x={137.9}
                        y={21}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'r'}
                    </tspan>
                    <tspan x={141.65} y={21}>
                        {'ops '}
                    </tspan>
                    <tspan x={0} y={42}>
                        {'Mo'}
                    </tspan>
                    <tspan
                        x={14.36}
                        y={42}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'r'}
                    </tspan>
                    <tspan x={18.1} y={42}>
                        {'e Pa'}
                    </tspan>
                    <tspan
                        x={37.63}
                        y={42}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'r'}
                    </tspan>
                    <tspan
                        x={41.56}
                        y={42}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'tners & Collabs'}
                    </tspan>
                    <tspan x={0} y={63}>
                        {'Li'}
                    </tspan>
                    <tspan
                        x={7.55}
                        y={63}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'s'}
                    </tspan>
                    <tspan x={12.35} y={63}>
                        {'ting DD'}
                    </tspan>
                    <tspan
                        x={45.61}
                        y={63}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'O'}
                    </tspan>
                    <tspan
                        x={52.19}
                        y={63}
                        style={{
                            letterSpacing: '-.01em',
                        }}
                    >
                        {'T'}
                    </tspan>
                    <tspan x={57.35} y={63} xmlSpace="preserve">
                        {' on Unis'}
                    </tspan>
                    <tspan
                        x={93.77}
                        y={63}
                        style={{
                            letterSpacing: '0em',
                        }}
                    >
                        {'w'}
                    </tspan>
                    <tspan x={101.67} y={63}>
                        {'app'}
                    </tspan>
                </text>
            </g>
        </svg>
    )
}
export default RoadMapSVG
