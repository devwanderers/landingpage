/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Row, Col, Button, Modal } from 'antd'
import ReactPlayer from 'react-player'
import { create } from 'ipfs-http-client'
import revealNft from '../../assets/images/utilities/reveal-nft.mp4'
import useResponsive from './../../hooks/useResponsive'
import { FrameNftTopSVG, FrameNftBottomSVG } from '../../assets/svg/frames'
import useSCInteractions from './../../hooks/useSCInteractions'
import utilitiesImages from './../../assets/images/utilities/index'
import useDeepCompareEffect from './../../hooks/useDeepCompareEffect'

const ModalMint = ({ visibleModal, mintAmount, onCloseModal, onEnded }) => {
    const [showVideo, setShowVideo] = useState(true)
    const [initMint, setInitMint] = useState(false)
    const [closable, setClosable] = useState(false)
    const [widthModal] = useResponsive({ base: '100%', xl: '70%', lg: '80%' })
    const { mintAvatar, mintData, minting, mintingError } = useSCInteractions()

    const handleOnClodeModal = () => {
        setShowVideo(true)
        setClosable(false)
        onCloseModal()
        setInitMint(false)
    }

    useDeepCompareEffect(() => {
        if (visibleModal) {
            if (mintingError?.code === 4001) {
                handleOnClodeModal()
            }
            if (!initMint) {
                setInitMint(true)
                mintAvatar(mintAmount)
            }
        }
    }, [visibleModal, mintingError])

    return (
        <Modal
            centered
            closable={closable}
            visible={visibleModal}
            onCancel={handleOnClodeModal}
            width={widthModal}
            maskClosable={false}
            footer={null}
        >
            {showVideo ? (
                <ReactPlayer
                    width="100%"
                    height="100%"
                    controls={false}
                    playing={showVideo}
                    url={revealNft}
                    muted={true}
                    onError={(e) => console.log('error', e)}
                    onEnded={() => {
                        setShowVideo(false)
                        setClosable(true)
                    }}
                />
            ) : (
                <>
                    <Row gutter={[20, 10]} className="my-5">
                        <Col
                            xs={24}
                            sm={8}
                            md={8}
                            lg={8}
                            xl={8}
                            style={{
                                marginBottom: '5%',
                            }}
                        >
                            <div className="nft-card relative">
                                <div
                                    className="absolute left-0 right-0"
                                    style={{
                                        top: '-10px',
                                    }}
                                >
                                    <FrameNftTopSVG width="100%" />
                                </div>
                                <div
                                    className="absolute left-0 right-0"
                                    style={{
                                        bottom: '-12px',
                                    }}
                                >
                                    <FrameNftBottomSVG width="100%" />
                                </div>
                                <img
                                    className="w-full h-auto"
                                    src={mintData[0]?.nftData.image}
                                    alt={mintData[0]?.nftData.image}
                                />
                            </div>
                        </Col>
                        <Col xs={24} sm={16} md={16} lg={16} xl={16}>
                            <div className="nft-info h-full p-4">
                                <div className="nft-name mb-5">
                                    <h2 className="text-info text-2xl font-bold">
                                        {mintData[0]?.nftData.name}
                                    </h2>
                                </div>
                                <div className="nft-about my-2">
                                    <h3 className="text-green-0 text-lg">
                                        About
                                    </h3>
                                    <p>{mintData[0]?.nftData.description}</p>
                                </div>
                                <hr className="my-2 border-green-3" />
                                <div className="flex space-x-5 flex-wrap nft-data my-2">
                                    <div className="nft-class">
                                        <h3 className="text-green-0 text-lg">
                                            Class
                                        </h3>
                                        <p>Renegate</p>
                                    </div>
                                    <div className="nft-rarity">
                                        <h3 className="text-green-0 text-lg">
                                            Rarity
                                        </h3>
                                        <p>20% Anormaly</p>
                                    </div>
                                </div>
                                <hr className="my-2 border-green-3" />
                                <div className="nft-details my-2">
                                    <h3 className="text-green-0 text-lg">
                                        Details
                                    </h3>
                                    <p>
                                        {JSON.stringify(
                                            mintData[0]?.nftData.attributes
                                        )}
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={[20]}>
                        <Col
                            xs={{ span: 24, offset: 0 }}
                            sm={{ span: 16, offset: 8 }}
                            md={{ span: 16, offset: 8 }}
                            lg={{ span: 16, offset: 8 }}
                            xl={{ span: 16, offset: 8 }}
                            // offset={8}
                        >
                            <div className="nft-footer flex space-x-10 flex-wrap">
                                <Button
                                    className="flex-1 border-none bg-primary hover:bg-primary 
                                            focus:bg-primary text-white hover:text-white focus:text-white"
                                    key="myprofile"
                                    size="large"
                                >
                                    My profile
                                </Button>
                                <Button
                                    className="flex-1 border-none bg-info hover:bg-info 
                                            focus:bg-info text-white hover:text-white focus:text-white"
                                    key="marketplace"
                                    size="large"
                                >
                                    Marketplace
                                </Button>
                                <Button
                                    className="flex-1 border-solid border-1 border-info bg-transparent 
                                            text-info hover:border-white hover:bg-info focus:bg-info 
                                            hover:text-white focus:text-whit"
                                    key="download"
                                    size="large"
                                >
                                    Download Image
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </>
            )}
        </Modal>
    )
}

export default ModalMint
