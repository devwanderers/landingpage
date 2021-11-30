/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react'
import { Row, Col, Button, Modal } from 'antd'
import ReactPlayer from 'react-player'
import { create } from 'ipfs-http-client'
import loadingVideo from '../../assets/images/utilities/LOADING-3D.mp4'
import useResponsive from './../../hooks/useResponsive'
import { FrameNftTopSVG, FrameNftBottomSVG } from '../../assets/svg/frames'
import useSCInteractions from './../../hooks/useSCInteractions'
import utilitiesImages from './../../assets/images/utilities/index'
import useDeepCompareEffect from './../../hooks/useDeepCompareEffect'
import MintDisplay from './MintDisplay'
import useTimeout from './../../hooks/useTimeout'

const MintWaitingVideo = ({ minting, onEnded }) => {
    const [fetching, setFetching] = useState(true)
    const [playedVideo, setPlayed] = useState(0)
    const playerRef = useRef(null)

    const handleRestartVideo = () => {
        console.log(playedVideo)
        if (minting && playedVideo > 3) {
            console.log('restart')
            playerRef.current.seekTo(0)
        }
    }
    const handleOnProgress = ({ playedSeconds }) => {
        setPlayed(playedSeconds)
    }

    useEffect(() => {
        handleRestartVideo()
    }, [playedVideo])

    if (fetching) {
        return (
            <ReactPlayer
                ref={playerRef}
                width="100%"
                height="100%"
                controls={false}
                playing
                url={loadingVideo}
                muted={true}
                onProgress={handleOnProgress}
                onError={(e) => console.log('error', e)}
                onEnded={() => {
                    onEnded()
                }}
            />
        )
    }
}

const ModalMint = ({ visibleModal, mintAmount, onCloseModal, onEnded }) => {
    const [showVideo, setShowVideo] = useState(true)
    const [initMint, setInitMint] = useState(false)
    const [closable, setClosable] = useState(false)
    const [widthModal] = useResponsive({
        base: '100%',
        lg: '95%',
        xl: '1300px',
    })
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
                <MintWaitingVideo
                    minting={minting}
                    onEnded={() => {
                        console.log('entro')
                        setShowVideo(false)
                    }}
                />
            ) : (
                <MintDisplay data={mintData} />
            )}
        </Modal>
    )
}

export default ModalMint
