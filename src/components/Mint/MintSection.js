/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import IncreaseDecreaseInput from '../Inputs/IncreaseDecreaseInput'
import { useWeb3React } from '@web3-react/core'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import useAuth from './../../hooks/useAuth'
// import { returnValueByScreenWidth } from '../../services/stylesServices'
// import useResponsive from './../../hooks/useResponsive'
import ModalMint from './ModalMint'
import { supportedChainIds } from './../../constants/chainNetworks'
import { setupNetwork } from './../../services/wallet'
import useSCInteractions from './../../hooks/useSCInteractions'
import useDeepCompareEffect from './../../hooks/useDeepCompareEffect'
import { useSupply } from '../../hooks/useSupply'

const antIcon = (
    <LoadingOutlined style={{ fontSize: 50, color: 'white' }} spin />
)

const publicPrice = 25e16
const presalePrice = 15e16

const MintSection = () => {
    const [maxMint, setMaxMint] = useState(0)
    const [priceMint, setPrice] = useState('0.0555 ETH')
    const { login, logout } = useAuth()
    const { account, chainId } = useWeb3React()
    const [mintAmount, setMintAmount] = useState(0)
    const [visibleModal, setVisibleModal] = useState(false)

    const {
        data,
        fetchingData,
        mintAvatar,
        mintData,
        minting,
        mintingError,
        resetError,
    } = useSCInteractions()

    const handleShowMintModal = () => {
        setVisibleModal(!visibleModal)
    }

    const mint = () => {
        const validChainId = supportedChainIds.reduce((acc, val) => {
            if (!acc && val === chainId) return true
            return acc
        }, false)
        if (!validChainId) {
            setupNetwork()
        } else {
            handleShowMintModal()
            mintAvatar(mintAmount)
        }
    }

    useDeepCompareEffect(() => {
        if (data) {
            const { whitelisted, onlyWhitelisted, maxMintAmount, balanceOf } = data;
            if (onlyWhitelisted && whitelisted) {
                setMaxMint(1 - balanceOf)
                setPrice('0.0555 ETH')
            } else if (!onlyWhitelisted && whitelisted) {
                setMaxMint(maxMintAmount - balanceOf)
                setPrice('0.0555 ETH')
            } else {
                setMaxMint(0)
                setPrice('0.25 ETH')
            }
        }
    }, [data])

    useDeepCompareEffect(() => {
        if (!visibleModal) return
        if (mintingError) {
            resetError()
            handleShowMintModal()

            if (mintingError?.code !== 4001) {
                console.log({ mintingError })
            }
        }
    }, [visibleModal, mintingError])

    const { reload, supply } = useSupply()

    return (
        <React.Fragment>
            <ModalMint
                data={mintData}
                visibleModal={visibleModal}
                onCloseModal={handleShowMintModal}
                // mintAmount={mintAmount}
                minting={minting}
            />
            <div
                className="w-full md:w-6/12 lg:w-4/12 bg-black-1 bg-opacity-40 px-5 py-6 relative mx-auto lg:mx-0 mb-5"
            // style={{ borderColor: '#2fb39b' }}
            >
                <div>
                    <div className="relative">
                        <div className="text-white">
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-5xl leading-none">
                                    {/* {supply ? `${supply} /` : ""} 555 */}
                                    Supply 555
                                </span>
                                <span className="font-bold text-5xl" style={{ lineHeight: 0 }}>
                                    Nomadz
                                </span>
                            </div>
                            <div className="text-2xl text-right">
                                <span className="leading-none">
                                    Price {priceMint}
                                </span>
                            </div>
                        </div>
                        <div className="text-white text-center w-4/5 m-auto">
                            <IncreaseDecreaseInput
                                onValueChange={(val) => {
                                    setMintAmount(val)
                                }}
                                maxValue={maxMint}
                                disabled={!data || maxMint === 0}
                            />
                            <span className="text-xl">
                                {maxMint} mints left
                            </span>
                        </div>
                        <div className="flex justify-center mt-4 space-x-3">
                            {!account ? (
                                <button
                                    onClick={() => login()}
                                    className="bg-info hover:bg-info focus:bg-info w-full text-white border-none text-xl py-1 "
                                    size="large"
                                >
                                    Connect
                                </button>
                            ) : (
                                <button
                                    onClick={() => logout()}
                                    className="bg-info hover:bg-info focus:bg-info w-full text-white border-none text-xl py-1"
                                    size="large"
                                >
                                    Disconnect
                                </button>
                            )}
                            <button
                                disabled={!account || maxMint === 0}
                                onClick={() => {
                                    mint()
                                }}
                                className="bg-primary hover:bg-primary py-1  w-full focus:bg-primary text-white border-none text-xl  disabled:opacity-75"
                                size="large"
                            >
                                Mint now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute right-0 left-0 top-0">
                    <div
                        className="w-full mx-auto "
                        style={{
                            height: '1px',
                            backgroundColor: '#2fb39b',
                        }}
                    ></div>
                </div>
                <div className="absolute right-0 left-0 top-0">
                    <div
                        className="w-6/12 mx-auto "
                        style={{
                            height: '4px',
                            backgroundColor: '#2fb39b',
                        }}
                    ></div>
                </div>
                <div className="absolute right-0 left-0 bottom-0">
                    <div
                        className="w-full mx-auto "
                        style={{
                            height: '1px',
                            backgroundColor: '#2fb39b',
                        }}
                    ></div>
                </div>
                <div className="absolute right-0 left-0 bottom-0">
                    <div
                        className="w-6/12 mx-auto "
                        style={{
                            height: '4px',
                            backgroundColor: '#2fb39b',
                        }}
                    ></div>
                </div>
                {fetchingData && (
                    <div className="absolute inset-0 bg-gray-800 bg-opacity-30 flex justify-center items-center">
                        <Spin indicator={antIcon} />
                    </div>
                )}
            </div>
        </React.Fragment>
    )
}

export default MintSection
