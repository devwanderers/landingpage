/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import {
    motion,
    useViewportScroll,
    useTransform,
    useSpring,
} from 'framer-motion'
import useSize from './../../../hooks/useSize'
import { useRefScrollProgress } from '../../../hooks/useRefScrollProgress'
import useWindowSize from './../../../hooks/useWindowSize'

// export default RoadMapSVG

const RoadgMapSVG = (props) => {
    const { scrollY } = useViewportScroll()
    const { height } = useWindowSize()

    const [completed1, setCompleted1] = useState(false)
    const [completed2, setCompleted2] = useState(false)
    const [completed3, setCompleted3] = useState(false)
    const [completed4, setCompleted4] = useState(false)
    const [completed5, setCompleted5] = useState(false)

    const { ref: step1Ref, start: start1 } = useRefScrollProgress()
    const { ref: step2Ref, start: start2 } = useRefScrollProgress()
    const { ref: step3Ref, start: start3 } = useRefScrollProgress()
    const { ref: step4Ref, start: start4 } = useRefScrollProgress()
    const { ref: step5Ref, start: start5 } = useRefScrollProgress()
    const { ref: step6Ref, start: start6 } = useRefScrollProgress()

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
    return (
        <svg
            id="Capa_1"
            data-name="Capa 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 481.5 544.39"
            {...props}
        >
            <text
                transform="translate(144.77 11.92)"
                style={{
                    isolation: 'isolate',
                    fontSize: '14.025400161743164px',
                    fill: '#39b396',
                    fontFamily: 'RussoOne, Russo One',
                }}
            >
                {'Q1 2022'}
            </text>
            <text
                transform="translate(122.61 40.24)"
                style={{
                    isolation: 'isolate',
                    fontSize: '14.025400161743164px',
                    fill: '#10b4ea',
                    fontFamily: 'RussoOne, Russo One',
                }}
            >
                {'Launchpad'}
            </text>
            <text
                transform="translate(67.8 62.71)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'W'}
            </text>
            <text
                transform="translate(76.58 62.71)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'eb 1.0, community suppo'}
            </text>
            <text
                transform="translate(190.31 62.71)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'r'}
            </text>
            <text
                transform="translate(194.22 62.71)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'t'}
            </text>
            <text
                transform="translate(197.25 62.71)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {','}
            </text>
            <text
                transform="translate(46.19 78.25)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'mar'}
            </text>
            <text
                transform="translate(64.33 78.25)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'k'}
            </text>
            <text
                transform="translate(69.58 78.25)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'e'}
            </text>
            <text
                transform="translate(75.06 78.25)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'ting plan, NF'}
            </text>
            <text
                transform="translate(132.46 78.25)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                    letterSpacing: '-0.030021386495812385em',
                }}
            >
                {'T'}
            </text>
            <g
                style={{
                    isolation: 'isolate',
                }}
            >
                <text
                    transform="translate(137.63 78.25)"
                    style={{
                        isolation: 'isolate',
                        fontSize: '12.946499824523926px',
                        fill: '#698da6',
                        fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                        fontWeight: 500,
                    }}
                >
                    <tspan xmlSpace="preserve">{' d'}</tspan>
                </text>
            </g>
            <text
                transform="translate(145.91 78.25)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'e'}
            </text>
            <text
                transform="translate(151.31 78.25)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'v'}
            </text>
            <text
                transform="translate(156.5 78.25)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'elopment'}
            </text>
            <text
                transform="translate(276.61 100)"
                style={{
                    isolation: 'isolate',
                    fontSize: '14.025400161743164px',
                    fill: '#39b396',
                    fontFamily: 'RussoOne, Russo One',
                }}
            >
                {'Q1 2022'}
            </text>
            <text
                transform="translate(276.61 128.31)"
                style={{
                    isolation: 'isolate',
                    fontSize: '14.025400161743164px',
                    fill: '#10b4ea',
                    fontFamily: 'RussoOne, Russo One',
                }}
            >
                {'Nomadzland Communi'}
            </text>
            <text
                transform="translate(434.11 128.31)"
                style={{
                    isolation: 'isolate',
                    fontSize: '14.025400161743164px',
                    fill: '#10b4ea',
                    fontFamily: 'RussoOne, Russo One',
                }}
            >
                {'t'}
            </text>
            <text
                transform="translate(440 128.31)"
                style={{
                    isolation: 'isolate',
                    fontSize: '14.025400161743164px',
                    fill: '#10b4ea',
                    fontFamily: 'RussoOne, Russo One',
                }}
            >
                {'y'}
            </text>
            <text
                transform="translate(276.61 150.79)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'Community'}
            </text>
            <text
                transform="translate(331.42 150.79)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'r'}
            </text>
            <text
                transform="translate(335.17 150.79)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'e'}
            </text>
            <text
                transform="translate(340.57 150.79)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'w'}
            </text>
            <text
                transform="translate(348.49 150.79)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'a'}
            </text>
            <text
                transform="translate(353.98 150.79)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'r'}
            </text>
            <text
                transform="translate(357.73 150.79)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'ds, ai'}
            </text>
            <text
                transform="translate(381.72 150.79)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'r'}
            </text>
            <text
                transform="translate(385.47 150.79)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'d'}
            </text>
            <text
                transform="translate(391.27 150.79)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'r'}
            </text>
            <text
                transform="translate(395.03 150.79)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'ops, gi'}
            </text>
            <text
                transform="translate(424.97 150.79)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'v'}
            </text>
            <text
                transform="translate(430.14 150.79)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'e'}
            </text>
            <text
                transform="translate(435.67 150.79)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'a'}
            </text>
            <text
                transform="translate(441.04 150.79)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'w'}
            </text>
            <text
                transform="translate(448.94 150.79)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'ays'}
            </text>
            <text
                transform="translate(276.61 166.33)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'& mo'}
            </text>
            <text
                transform="translate(300.48 166.33)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'r'}
            </text>
            <text
                transform="translate(304.24 166.33)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'e, apply'}
            </text>
            <text
                transform="translate(343.01 166.33)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'t'}
            </text>
            <text
                transform="translate(346.61 166.33)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'o li'}
            </text>
            <text
                transform="translate(360.04 166.33)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'s'}
            </text>
            <text
                transform="translate(364.85 166.33)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'t NFT\xB4s in OpenSea,'}
            </text>
            <text
                transform="translate(276.61 181.86)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'t'}
            </text>
            <text
                transform="translate(280.22 181.86)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'o'}
            </text>
            <text
                transform="translate(285.88 181.86)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'k'}
            </text>
            <text
                transform="translate(291.14 181.86)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'en and bac'}
            </text>
            <text
                transform="translate(340.41 181.86)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'k'}
            </text>
            <text
                transform="translate(345.65 181.86)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'end suppo'}
            </text>
            <text
                transform="translate(393.27 181.86)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'r'}
            </text>
            <text
                transform="translate(397.18 181.86)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'t deployment'}
            </text>
            <text
                transform="translate(145.61 191.13)"
                style={{
                    isolation: 'isolate',
                    fontSize: '14.025400161743164px',
                    fill: '#39b396',
                    fontFamily: 'RussoOne, Russo One',
                }}
            >
                {'Q2 2022'}
            </text>
            <text
                transform="translate(44.28 219.45)"
                style={{
                    isolation: 'isolate',
                    fontSize: '14.025400161743164px',
                    fill: '#10b4ea',
                    fontFamily: 'RussoOne, Russo One',
                }}
            >
                {'Nomadzland p'}
            </text>
            <text
                transform="translate(144.84 219.45)"
                style={{
                    isolation: 'isolate',
                    fontSize: '14.025400161743164px',
                    fill: '#10b4ea',
                    fontFamily: 'RussoOne, Russo One',
                }}
            >
                {'r'}
            </text>
            <text
                transform="translate(151.01 219.45)"
                style={{
                    isolation: 'isolate',
                    fontSize: '14.025400161743164px',
                    fill: '#10b4ea',
                    fontFamily: 'RussoOne, Russo One',
                }}
            >
                {'eseason'}
            </text>
            <text
                transform="translate(57.22 241.93)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'W'}
            </text>
            <text
                transform="translate(66 241.93)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'eb 2.0 & mar'}
            </text>
            <text
                transform="translate(124.42 241.93)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'k'}
            </text>
            <text
                transform="translate(129.67 241.93)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'e'}
            </text>
            <text
                transform="translate(135.14 241.93)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'tplace upd'}
            </text>
            <text
                transform="translate(182.71 241.93)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'a'}
            </text>
            <text
                transform="translate(188.13 241.93)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'t'}
            </text>
            <text
                transform="translate(191.74 241.93)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'e,'}
            </text>
            <text
                transform="translate(113.31 257.46)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'NF'}
            </text>
            <text
                transform="translate(125.34 257.46)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                    letterSpacing: '-0.030021386495812385em',
                }}
            >
                {'T'}
            </text>
            <g
                style={{
                    isolation: 'isolate',
                }}
            >
                <text
                    transform="translate(130.52 257.46)"
                    style={{
                        isolation: 'isolate',
                        fontSize: '12.946499824523926px',
                        fill: '#698da6',
                        fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                        fontWeight: 500,
                    }}
                >
                    <tspan xmlSpace="preserve">{' minting period'}</tspan>
                </text>
            </g>
            <text
                transform="translate(276.61 284.56)"
                style={{
                    isolation: 'isolate',
                    fontSize: '14.025400161743164px',
                    fill: '#39b396',
                    fontFamily: 'RussoOne, Russo One',
                }}
            >
                {'Q2 2022'}
            </text>
            <text
                transform="translate(276.61 312.88)"
                style={{
                    isolation: 'isolate',
                    fontSize: '14.025400161743164px',
                    fill: '#10b4ea',
                    fontFamily: 'RussoOne, Russo One',
                }}
            >
                {'Nomadzland season 1'}
            </text>
            <text
                transform="translate(276.61 335.35)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'NF'}
            </text>
            <text
                transform="translate(288.64 335.35)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                    letterSpacing: '-0.030021386495812385em',
                }}
            >
                {'T'}
            </text>
            <text
                transform="translate(296.3 335.35)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'r'}
            </text>
            <text
                transform="translate(300.48 335.35)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'elease, IDO DD'}
                <tspan
                    x={66.13}
                    y={0}
                    style={{
                        letterSpacing: '-0.006977332288599612em',
                    }}
                >
                    {'O'}
                </tspan>
                <tspan
                    x={72.71}
                    y={0}
                    style={{
                        letterSpacing: '-0.015010693247906192em',
                    }}
                >
                    {'T'}
                </tspan>
                <tspan x={77.87} y={0} />
                <tspan
                    x={80.36}
                    y={0}
                    style={{
                        letterSpacing: '-0.030021386495812385em',
                    }}
                >
                    {'T'}
                </tspan>
                <tspan x={85.33} y={0}>
                    {'o'}
                </tspan>
                <tspan
                    x={90.99}
                    y={0}
                    style={{
                        letterSpacing: '-0.009994557062048093em',
                    }}
                >
                    {'k'}
                </tspan>
                <tspan x={96.23} y={0}>
                    {'en, '}
                </tspan>
                <tspan
                    x={112.79}
                    y={0}
                    style={{
                        letterSpacing: '-0.004978420876189994em',
                    }}
                >
                    {'t'}
                </tspan>
                <tspan x={116.39} y={0}>
                    {'o'}
                </tspan>
                <tspan
                    x={122.04}
                    y={0}
                    style={{
                        letterSpacing: '-0.009994557062048093em',
                    }}
                >
                    {'k'}
                </tspan>
                <tspan x={127.29} y={0}>
                    {'en sale, '}
                </tspan>
            </text>
            <text
                transform="translate(276.61 350.89)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'Prime & Ambassador p'}
                <tspan
                    x={104.02}
                    y={0}
                    style={{
                        letterSpacing: '-0.0050161361858581em',
                    }}
                >
                    {'r'}
                </tspan>
                <tspan
                    x={107.76}
                    y={0}
                    style={{
                        letterSpacing: '0.00003771530966810601em',
                    }}
                >
                    {'esale'}
                </tspan>
            </text>
            <text
                transform="translate(145.61 379.52)"
                style={{
                    isolation: 'isolate',
                    fontSize: '14.025400161743164px',
                    fill: '#39b396',
                    fontFamily: 'RussoOne, Russo One',
                }}
            >
                {'Q2 2022'}
            </text>
            <text
                transform="translate(33.55 407.84)"
                style={{
                    isolation: 'isolate',
                    fontSize: '14.025400161743164px',
                    fill: '#10b4ea',
                    fontFamily: 'RussoOne, Russo One',
                }}
            >
                {'Nomadzland me'}
            </text>
            <text
                transform="translate(146.66 407.84)"
                style={{
                    isolation: 'isolate',
                    fontSize: '14.025400161743164px',
                    fill: '#10b4ea',
                    fontFamily: 'RussoOne, Russo One',
                }}
            >
                {'t'}
            </text>
            <text
                transform="translate(152.57 407.84)"
                style={{
                    isolation: 'isolate',
                    fontSize: '14.025400161743164px',
                    fill: '#10b4ea',
                    fontFamily: 'RussoOne, Russo One',
                }}
            >
                {'a'}
            </text>
            <text
                transform="translate(160.79 407.84)"
                style={{
                    isolation: 'isolate',
                    fontSize: '14.025400161743164px',
                    fill: '#10b4ea',
                    fontFamily: 'RussoOne, Russo One',
                }}
            >
                {'v'}
            </text>
            <text
                transform="translate(168.78 407.84)"
                style={{
                    isolation: 'isolate',
                    fontSize: '14.025400161743164px',
                    fill: '#10b4ea',
                    fontFamily: 'RussoOne, Russo One',
                }}
            >
                {'erse'}
            </text>
            <text
                transform="translate(24.22 430.31)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'Fir'}
            </text>
            <text
                transform="translate(35.9 430.31)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'s'}
            </text>
            <text
                transform="translate(40.71 430.31)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'t'}
            </text>
            <text
                transform="translate(46.86 430.31)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'r'}
            </text>
            <text
                transform="translate(50.62 430.31)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'e'}
            </text>
            <text
                transform="translate(56.02 430.31)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'v'}
            </text>
            <text
                transform="translate(61.19 430.31)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'enue sha'}
            </text>
            <text
                transform="translate(102.61 430.31)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'r'}
            </text>
            <text
                transform="translate(106.35 430.31)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'es, Prime & Ambassador '}
            </text>
            <text
                transform="translate(71.71 445.85)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'s'}
            </text>
            <text
                transform="translate(76.53 445.85)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'t'}
            </text>
            <text
                transform="translate(80.07 445.85)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'a'}
            </text>
            <text
                transform="translate(85.56 445.85)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'r'}
            </text>
            <text
                transform="translate(89.49 445.85)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'t'}
            </text>
            <text
                transform="translate(95.63 445.85)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'s'}
            </text>
            <text
                transform="translate(100.45 445.85)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'t'}
            </text>
            <text
                transform="translate(105.04 445.85)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'aking periods, CMC li'}
            </text>
            <text
                transform="translate(198.75 445.85)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'s'}
            </text>
            <text
                transform="translate(203.55 445.85)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'ting,'}
            </text>
            <text
                transform="translate(111.68 461.38)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'game planning'}
            </text>
            <text
                transform="translate(276.61 473.36)"
                style={{
                    isolation: 'isolate',
                    fontSize: '14.025400161743164px',
                    fill: '#39b396',
                    fontFamily: 'RussoOne, Russo One',
                }}
            >
                {'Q3 2022'}
            </text>
            <text
                transform="translate(276.61 501.68)"
                style={{
                    isolation: 'isolate',
                    fontSize: '14.025400161743164px',
                    fill: '#10b4ea',
                    fontFamily: 'RussoOne, Russo One',
                }}
            >
                {'Nomadzland season 2'}
            </text>
            <text
                transform="translate(276.61 524.16)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'Game d'}
            </text>
            <text
                transform="translate(311.02 524.16)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'e'}
            </text>
            <text
                transform="translate(316.42 524.16)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'v'}
            </text>
            <text
                transform="translate(321.59 524.16)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'elomen'}
            </text>
            <text
                transform="translate(355.62 524.16)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'t'}
            </text>
            <text
                transform="translate(358.65 524.16)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {','}
            </text>
            <text
                transform="translate(276.61 539.69)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'season 2'}
            </text>
            <text
                transform="translate(319.51 539.69)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'r'}
            </text>
            <text
                transform="translate(323.26 539.69)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'e'}
            </text>
            <text
                transform="translate(328.67 539.69)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'v'}
            </text>
            <text
                transform="translate(333.83 539.69)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'enue model & mo'}
            </text>
            <text
                transform="translate(413.88 539.69)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'r'}
            </text>
            <text
                transform="translate(417.62 539.69)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'e'}
            </text>
            <polyline
                points="238.95 21.9 22.25 21.9 22.25 56.9"
                style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeMiterlimit: 10,
                    strokeWidth: '0.5px',
                }}
            />
            <motion.line
                x1={238.95}
                y1={107.4}
                x2={238.95}
                y2={21.9}
                style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeMiterlimit: 10,
                    strokeWidth: '2px',
                    strokeDashoffset: step1ToStep2,
                    strokeDasharray: 100,
                }}
            />
            <motion.line
                x1={238.95}
                y1={199.4}
                x2={238.95}
                y2={107.4}
                style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeMiterlimit: 10,
                    strokeWidth: '2px',
                    strokeDashoffset: step2ToStep3,
                    strokeDasharray: 100,
                }}
            />
            <motion.line
                x1={238.95}
                y1={292.4}
                x2={238.95}
                y2={199.4}
                style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeMiterlimit: 10,
                    strokeWidth: '2px',
                    strokeDashoffset: step3ToStep4,
                    strokeDasharray: 100,
                }}
            />
            <motion.line
                x1={238.95}
                y1={387.4}
                x2={238.95}
                y2={292.4}
                style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeMiterlimit: 10,
                    strokeWidth: '2px',
                    strokeDashoffset: step4ToStep5,
                    strokeDasharray: 100,
                }}
            />
            <motion.line
                x1={238.95}
                y1={482.4}
                x2={238.95}
                y2={387.4}
                style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeMiterlimit: 10,
                    strokeWidth: '2px',
                    strokeDashoffset: step5ToStep6,
                    strokeDasharray: 100,
                }}
            />
            <polyline
                points="238.25 107.9 481.25 107.9 481.25 136.4"
                style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeMiterlimit: 10,
                    strokeWidth: '0.5px',
                }}
            />
            <polyline
                points="238.25 199.9 24.25 199.9 24.25 240.9"
                style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeMiterlimit: 10,
                    strokeWidth: '0.5px',
                }}
            />
            <polyline
                points="237.25 292.9 466.25 292.9 466.25 330.9"
                style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeMiterlimit: 10,
                    strokeWidth: '0.5px',
                }}
            />
            <polyline
                points="237.25 387.9 0.25 387.9 0.25 421.9"
                style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeMiterlimit: 10,
                    strokeWidth: '0.5px',
                }}
            />
            <polyline
                points="238.25 481.9 461.25 481.9 461.25 511.9"
                style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeMiterlimit: 10,
                    strokeWidth: '0.5px',
                }}
            />
            <rect
                ref={step1Ref}
                x={232.95}
                y={16.42}
                width={11.9}
                height={11.9}
                transform="translate(54.16 175.48) rotate(-45)"
                style={{
                    fill: '#3bb396',
                }}
            />
            <path
                d="M239,15.4l7,7-7,7-7-7,7-7m0-2.8-1.4,1.4-7,7-1.4,1.4,1.4,1.4,7,7,1.4,1.4,1.4-1.4,7-7,1.4-1.4-1.4-1.4-7-7A18.49,18.49,0,0,1,239,12.6Z"
                style={{
                    fill: '#fff',
                }}
            />
            <rect
                ref={step2Ref}
                x={232.95}
                y={101.42}
                width={11.9}
                height={11.9}
                transform="translate(-5.95 200.38) rotate(-45)"
                style={{ fill: completed1 ? '#3bb396' : '#03152b' }}
            />
            <path
                d="M239,100.4l7,7-7,7-7-7,7-7m0-2.8-1.4,1.4-7,7-1.4,1.4,1.4,1.4,7,7,1.4,1.4,1.4-1.4,7-7,1.4-1.4-1.4-1.4-7-7Z"
                style={{
                    fill: '#fff',
                }}
            />
            <rect
                ref={step3Ref}
                x={232.95}
                y={193.42}
                width={11.9}
                height={11.9}
                transform="translate(-71.01 227.32) rotate(-45)"
                style={{ fill: completed2 ? '#3bb396' : '#03152b' }}
            />
            <path
                d="M239,192.4l7,7-7,7-7-7,7-7m0-2.8-1.4,1.4-7,7-1.4,1.4,1.4,1.4,7,7,1.4,1.4,1.4-1.4,7-7,1.4-1.4-1.4-1.4-7-7Z"
                style={{
                    fill: '#fff',
                }}
            />
            <rect
                ref={step4Ref}
                x={232.95}
                y={286.41}
                width={11.9}
                height={11.9}
                transform="translate(-136.76 254.56) rotate(-45)"
                style={{ fill: completed3 ? '#3bb396' : '#03152b' }}
            />
            <path
                d="M239,285.4l7,7-7,7-7-7,7-7m0-2.8-1.4,1.4-7,7-1.4,1.4,1.4,1.4,7,7,1.4,1.4,1.4-1.4,7-7,1.4-1.4-1.4-1.4-7-7Z"
                style={{
                    fill: '#fff',
                }}
            />
            <rect
                ref={step5Ref}
                x={232.95}
                y={381.41}
                width={11.9}
                height={11.9}
                transform="translate(-203.94 282.38) rotate(-45)"
                style={{ fill: completed4 ? '#3bb396' : '#03152b' }}
            />
            <path
                d="M239,380.4l7,7-7,7-7-7,7-7m0-2.8-1.4,1.4-7,7-1.4,1.4,1.4,1.4,7,7,1.4,1.4,1.4-1.4,7-7,1.4-1.4-1.4-1.4-7-7Z"
                style={{
                    fill: '#fff',
                }}
            />
            <rect
                ref={step6Ref}
                x={232.96}
                y={475.41}
                width={11.9}
                height={11.9}
                transform="translate(-270.4 309.92) rotate(-45)"
                style={{ fill: completed5 ? '#3bb396' : '#03152b' }}
            />
            <path
                d="M239,474.4l7,7-7,7-7-7,7-7m0-2.8-1.4,1.4-7,7-1.4,1.4,1.4,1.4,7,7,1.4,1.4,1.4-1.4,7-7,1.4-1.4-1.4-1.4-7-7Z"
                style={{
                    fill: '#fff',
                }}
            />
            <text
                transform="translate(46.86 445.85)"
                style={{
                    isolation: 'isolate',
                    fontSize: '12.946499824523926px',
                    fill: '#698da6',
                    fontFamily: 'SairaCondensed-Medium, Saira Condensed',
                    fontWeight: 500,
                }}
            >
                {'sale,'}
            </text>
        </svg>
    )
}

export default RoadgMapSVG
