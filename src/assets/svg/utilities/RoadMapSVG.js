import React from 'react'
import { Tooltip } from 'antd'

const RoadMapSVG = ({
    selectedKey,
    onSelectedKey,
    width = '100%',
    height = '100%',
}) => {
    console.log({ selectedKey })
    return (
        <div style={{ width, height }}>
            <svg
                id="Capa_1"
                data-name="Capa 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 778 117.13"
                style={{ width: 'inherit', height: 'inherit' }}
            >
                <g style={{ opacity: '0.7000000000000001' }}>
                    <path
                        d="M8.61,54.91c7.94-2.95,16.06-5.38,24.24-7.57s16.44-4.08,24.77-5.66A327.68,327.68,0,0,1,108.09,36q12.72-.37,25.44.43a221.48,221.48,0,0,1,25.27,3,246,246,0,0,1,24.79,5.73c8.18,2.22,16.32,4.55,24.45,6.93,32.52,9.5,64.72,20,97.1,29.87s64.92,19.24,98,26.48c16.51,3.65,33.15,6.73,49.9,8.92a361.85,361.85,0,0,0,50.52,3.31,229.23,229.23,0,0,0,50.16-5.7,168.64,168.64,0,0,0,24.08-7.59c7.85-3.06,15.28-7,22.85-10.89,30.12-15.48,60.47-30.52,91.18-44.81,15.41-7,30.85-14,46.56-20.35q11.74-4.82,23.73-9c4-1.34,8-2.71,12.11-3.84,2-.63,4.09-1.08,6.14-1.6a31.12,31.12,0,0,1,6.28-.86,30.92,30.92,0,0,0-6.26.92c-2.05.54-4.11,1-6.13,1.65-4.07,1.17-8.06,2.59-12.06,4q-11.92,4.35-23.63,9.28c-15.63,6.48-31,13.59-46.32,20.78C661.6,67,631.33,82.14,601.31,97.79c-7.5,3.86-15,7.93-22.92,11.08a169.51,169.51,0,0,1-24.31,7.71,231.17,231.17,0,0,1-50.54,5.84,365.2,365.2,0,0,1-50.78-3.23c-16.83-2.18-33.53-5.23-50.09-8.87C369.56,103,337,93.55,304.61,83.62S240,63.21,207.6,53.48q-12.15-3.63-24.38-7a246.2,246.2,0,0,0-24.64-5.83,223.06,223.06,0,0,0-25.13-3.09c-8.43-.58-16.88-.75-25.33-.57a326.9,326.9,0,0,0-50.41,5.22q-12.49,2.25-24.8,5.41C24.72,49.68,16.58,52,8.61,54.91Z"
                        transform="translate(-8.61 -15.91)"
                        style={{
                            fill: '#82c4e4',
                        }}
                    />
                </g>
                <Tooltip title="Lorem1">
                    <rect
                        onMouseEnter={() => onSelectedKey(1)}
                        onMouseLeave={() => console.log('Mouse leave')}
                        x="76.61"
                        y="29.9"
                        width="17.51"
                        height="17.51"
                        transform="translate(-10.95 55.77) rotate(-45)"
                        style={{
                            fill: selectedKey === 1 ? '#32b39b' : '#cfe9e9',
                        }}
                    />
                </Tooltip>

                <Tooltip title="Lorem2" placement="bottom">
                    <rect
                        onMouseEnter={() => onSelectedKey(2)}
                        x="272.61"
                        y="65.9"
                        width="17.51"
                        height="17.51"
                        transform="translate(21.01 204.91) rotate(-45)"
                        style={{
                            fill: selectedKey === 2 ? '#32b39b' : '#cfe9e9',
                        }}
                    />
                </Tooltip>
                <Tooltip title="Lorem3">
                    <rect
                        onMouseEnter={() => onSelectedKey(3)}
                        x="491.61"
                        y="111.9"
                        width="17.51"
                        height="17.51"
                        transform="translate(52.62 373.24) rotate(-45)"
                        style={{
                            fill: selectedKey === 3 ? '#32b39b' : '#cfe9e9',
                        }}
                    />
                </Tooltip>
                <Tooltip title="Lorem4" placement="bottom">
                    <rect
                        onMouseEnter={() => onSelectedKey(4)}
                        x="668.61"
                        y="50.9"
                        width="17.51"
                        height="17.51"
                        transform="translate(147.6 480.53) rotate(-45)"
                        style={{
                            fill: selectedKey === 4 ? '#32b39b' : '#cfe9e9',
                        }}
                    />
                </Tooltip>
            </svg>
        </div>
    )
}

RoadMapSVG.propTypes = {}

export default RoadMapSVG
