import React from 'react'

const FrameCounterHeaderCustom = ({
    backgroundColor = '#1d1d1b',
    opacity = '0.4',
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 265.1 39.04">
            <g style={{ isolation: 'isolate' }}>
                <g id="Capa_1" data-name="Capa 1">
                    <polyline
                        points="0 0 29.57 37.87 236.46 37.2 265.1 0"
                        style={{
                            fill: backgroundColor,
                            opacity: opacity,
                            mixBlendMode: 'multiply',
                        }}
                    />
                    <path
                        d="M250.17,18.47l-7.44,9.26c-2.4,3-4.76,6-7.13,9L210,36.41l-13-.14-4.76,0-7.21,0C167.72,36,150.45,36,133.09,36H132c-17.36,0-34.63,0-51.95.16l-7.21,0q-9.39.06-18.79.18l-24.56.27c-2.37-3-4.73-6-7.13-9l-7.44-9.26Q7.52,9.2,0,0,6.39,8.72,12.88,17.38l1.28,1.72,7.11,9.52c2.36,3.18,4.77,6.32,7.15,9.48l.25.27,3.26,0,23.16.26,13,.14,12,.06h1q25.5.24,50.92.16h1.08q25.42.06,50.92-.16h1l12-.06,13-.14,23.16-.26,2.84,0h.42l.25-.27c2.38-3.16,4.79-6.3,7.15-9.48l7.11-9.52,1.28-1.72Q258.68,8.7,265.1,0,257.58,9.2,250.17,18.47Z"
                        transform="translate(0 0)"
                        style={{
                            fill: '#2fb39b',
                        }}
                    />
                </g>
            </g>
        </svg>
    )
}

export default FrameCounterHeaderCustom
