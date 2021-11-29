import React, { useState } from 'react'
import { Row, Col } from 'antd'
import IncreaseDecreaseInput from '../Inputs/IncreaseDecreaseInput'
import { useWeb3React } from '@web3-react/core'
import useAuth from './../../hooks/useAuth'
import { returnValueByScreenWidth } from '../../services/stylesServices'
import useResponsive from './../../hooks/useResponsive'
import {
    FrameCounterBottomSVG,
    FrameCounterTopSVG,
} from '../../assets/svg/frames'
import ModalMint from './ModalMint'

const MintSection = (props) => {
    const { login, logout } = useAuth()
    const { account } = useWeb3React()
    const [mintAmount, setMintAmount] = useState(0)
    const [visibleModal, setVisibleModal] = useState(false)
    const [topPos] = useResponsive({
        base: '-6px',
        md: '-11px',
        lg: '-10px',
        xl: '-12px',
    })

    const handleShowMintModal = () => {
        setVisibleModal(!visibleModal)
    }
    return (
        <React.Fragment>
            {visibleModal && (
                <ModalMint
                    visibleModal={visibleModal}
                    onCloseModal={handleShowMintModal}
                    mintAmount={mintAmount}
                />
            )}
            <Row className="connect-section">
                <Col span={12}>
                    <div className="mb-10 z-20">
                        <div className="bg-black-1 bg-opacity-40 mx-auto lg:px-4 pt-5 pb-4 relative z-10">
                            <div className="connect-box">
                                <div className="wanderers-amount text-white">
                                    <div className="amount">
                                        <span id="total">9,000</span>
                                        <span id="title">WANDERERS</span>
                                    </div>
                                    <div className="price">
                                        <span>Price .06 ETH</span>
                                    </div>
                                </div>
                            </div>
                            <div className="selector-box text-white text-center my-5 w-4/5 m-auto">
                                <IncreaseDecreaseInput
                                    onValueChange={(val) => {
                                        setMintAmount(val)
                                    }}
                                ></IncreaseDecreaseInput>
                                <span className="text-xl">
                                    Max 15 mints per tx
                                </span>
                            </div>
                            <div className="buttons-select my-4">
                                {!account ? (
                                    <button
                                        onClick={() => login()}
                                        className="bg-info hover:bg-info focus:bg-info btn-connect py-1"
                                        size="large"
                                    >
                                        Connect
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => logout()}
                                        className="bg-info hover:bg-info focus:bg-info btn-connect py-1"
                                        size="large"
                                    >
                                        Disconnect
                                    </button>
                                )}
                                <button
                                    disabled={!account}
                                    onClick={() => {
                                        handleShowMintModal()
                                    }}
                                    className="bg-primary hover:bg-primary py-1 focus:bg-primary btn-now disabled:opacity-75"
                                    size="large"
                                >
                                    Mint now
                                </button>
                            </div>
                            <div
                                className="absolute right-0 left-0 "
                                style={{
                                    top: returnValueByScreenWidth(topPos, {
                                        base: '-6px',
                                        md: '-11px',
                                        lg: '-10px',
                                        xl: '-12px',
                                    }),
                                }}
                            >
                                <FrameCounterTopSVG width="100%" />
                            </div>
                            <div
                                className="absolute right-0 left-0 "
                                style={{ bottom: '-3px' }}
                            >
                                <FrameCounterBottomSVG
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default MintSection
