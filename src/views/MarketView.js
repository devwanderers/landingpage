/* eslint-disable no-unused-vars */
/* eslint-disable no-loss-of-precision */
import React, { useRef, useState } from 'react'
import GlobeComponent from './../components/GlobeComponent/index'
// import useResponsive from './../hooks/useResponsive'
import useEventListener from './../hooks/useEventListener'
import useEffectOnce from './../hooks/useEffectOnce'
import { Input, Select, Button, Row, Col } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const data = [
    {
        coordinates: {
            x: -75.52331968861891,
            y: 120.93591638952593,
            z: 140.4705070828558,
        },
        label: 'USA',
    },
    {
        coordinates: {
            x: 45.88175533655218,
            y: -32.460460709678475,
            z: 191.45491548435085,
        },
        label: 'Brasil',
    },
]

const MarketView = () => {
    const globeContainerRef = useRef(null)
    const [globeSizes, setGlobalSizes] = useState({ width: 0, height: 0 })
    const [searchText, setSearchText] = useState()
    const [selected, setSelected] = useState(data[0]?.label)

    useEffectOnce(() => {
        setGlobalSizes({
            width: globeContainerRef.current.offsetWidth,
            height: globeContainerRef.current.offsetHeight,
        })
    })

    useEventListener('resize', () => {
        setGlobalSizes({
            width: globeContainerRef.current.offsetWidth,
            height: globeContainerRef.current.offsetHeight,
        })
    })

    const handleOnChangeSearchText = (e) => {
        console.log({ e })
        e.preventDefault()
        setSearchText(e.target.value)
    }

    const handleOnChangeSelect = (id) => {
        setSelected(data[id].label)
        setSearchText(data[id].label)
    }
    console.log({ data })
    return (
        <div>
            <div
                ref={globeContainerRef}
                className="w-12/12 bg-red-400 m-auto"
                style={{ height: '600px' }}
            >
                <GlobeComponent
                    data={data}
                    width={globeSizes.width}
                    height={globeSizes.height}
                />
            </div>
            <div className="relative">
                <div className="absolute right-0 left-0 -top-5 max-w-1000px m-auto">
                    <Input.Group>
                        <Row>
                            <Col
                                xs={4}
                                className="bg-white pl-4  rounded-l-full"
                            >
                                <Select
                                    className="w-full ant-selector-border-0"
                                    size="large"
                                    value={selected}
                                    onChange={handleOnChangeSelect}
                                >
                                    {data.map((d, i) => (
                                        <Select.Option key={d.label} value={i}>
                                            {d.label}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Col>
                            <Col xs={16} className="bg-red-400">
                                <Input
                                    value={searchText}
                                    onChange={handleOnChangeSearchText}
                                    className="w-6/12"
                                    size="large"
                                />
                            </Col>
                            <Col xs={3}>
                                <Button
                                    className="w-full rounded-r-full"
                                    size="large"
                                >
                                    <SearchOutlined />
                                </Button>
                            </Col>
                        </Row>
                    </Input.Group>
                </div>
            </div>
            <div className="bg-blue-1 h-screen"></div>
        </div>
    )
}

export default MarketView
