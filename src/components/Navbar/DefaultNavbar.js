/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { BrandLogoSVG } from '../../assets/svg/brand'
import { windowOpen, windowLocationPush } from './../../services/windowServices'
import useWindowSize from './../../hooks/useWindowSize'
import {
    OctagonDiscordSVG,
    OctagonTelegramSVG,
    OctagonTwitterSVG,
    OctagonInstagramSVG,
} from './../../assets/svg/icons/index'
import { Drawer } from 'antd'
import { scrollTo } from '../../services/react-scroll-utils'
import { GiHamburgerMenu } from 'react-icons/gi'
import { HomePath, WhitelistPath } from '../../constants/routerConstants'
import { destinareLink, whitePaperLink } from './../../constants/linksContants'

const DefaultNavbar = () => {
    const [selectedMenu, setMenuIndex] = useState(0)
    const [showDrawer, setShowDrawer] = useState(false)
    const { width } = useWindowSize()
    const history = useHistory()
    const marketPlaceMenu = [
        {
            key: 'mint',
            label: 'Mint',
            onClick: () => {
                scrollTo('mint')
            },
        },
        {
            key: 'nomadz',
            label: 'Nomadz',
            onClick: () => {
                scrollTo('nomadz')
            },
        },
        {
            key: 'lands',
            label: 'Metaverse',
            onClick: () => {
                scrollTo('lands')
            },
        },
        {
            key: 'token',
            label: 'Token',
            onClick: () => {
                scrollTo('token')
            },
        },
        {
            key: 'roadMap',
            label: 'RoadMap',
            onClick: () => {
                scrollTo('roadMap')
            },
        },
        {
            key: 'team',
            label: 'Team',
            onClick: () => {
                scrollTo('team')
            },
        },
        {
            key: 'destinare',
            label: 'Destinare.io',
            onClick: () => {
                windowLocationPush(destinareLink)
            },
        },
    ]

    const handleOnClickBurger = () => {
        setShowDrawer(!showDrawer)
    }

    return width > 768 ? (
        <header className="h-24 relative z-50 lg:px-0 text-white bg-blue-5 bg-opacity-25">
            <div className="max-w-1800px m-auto flex flex-row h-full px-6 3xl:px-0 ">
                <div className=" sm:mr-10 xl:mr-20 h-full py-5 ">
                    <a className="h-full bg-blue-2">
                        <div className="h-full">
                            <BrandLogoSVG
                                width={'100%'}
                                height={'100%'}
                                onClick={() => {
                                    history.push(HomePath)
                                }}
                            />
                        </div>
                    </a>
                </div>
                <div className="flex-1 flex items-center h-full py-6">
                    <div className=" text-xl font-saira-condensed flex flex-row items-center  h-full space-x-4">
                        {marketPlaceMenu.map((val, index) => (
                            <div
                                key={`menuNav-${val.key}`}
                                className={`h-full  flex justify-center items-center${
                                    selectedMenu === index
                                        ? ' border-b-2 border-primary text-primary '
                                        : ' text-white'
                                }`}
                            >
                                <a
                                    className="px-1"
                                    target="_blank"
                                    // href=""
                                    onClick={() => {
                                        if (selectedMenu !== index)
                                            setMenuIndex(index)

                                        val.onClick()
                                    }}
                                >
                                    {val.label}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex-1 flex flex-row justify-end h-full py-6 ">
                    <div className="flex flex-row items-center space-x-2 h-full">
                        <a
                            onClick={() =>
                                windowOpen('https://twitter.com/NomadzlandNFT')
                            }
                            className="h-full flex items-center px-1"
                        >
                            <div className="h-10 w-10 ">
                                <OctagonTwitterSVG width="100%" height="100%" />
                            </div>
                        </a>
                        <a
                            onClick={() =>
                                windowOpen(
                                    'https://www.instagram.com/nomadzlandnft'
                                )
                            }
                            className="h-full flex items-center px-1"
                        >
                            <div className="h-10 w-10 ">
                                <OctagonInstagramSVG
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                        </a>
                        <a
                            onClick={() =>
                                windowOpen('https://discord.gg/JPx5v9Xv9g')
                            }
                            className="h-full flex items-center px-1"
                        >
                            <div className="h-10 w-10  ">
                                <OctagonDiscordSVG width="100%" height="100%" />
                            </div>
                        </a>
                    </div>
                    <div className="hidden lg:block h-full pl-3">
                        <button
                            onClick={() => windowOpen(whitePaperLink)}
                            className="text-xl h-full  border border-blue-7 flex justify-center items-center px-4"
                        >
                            Whitepaper
                        </button>
                    </div>
                </div>
            </div>
        </header>
    ) : (
        <React.Fragment>
            <Drawer
                placement="left"
                closable={true}
                onClose={handleOnClickBurger}
                visible={showDrawer}
                key="left"
            >
                <div className="flex flex-col mb-4">
                    {marketPlaceMenu.map((val, index) => (
                        <div
                            key={`menuNav-${val.key}`}
                            className={`py-1
                            }`}
                        >
                            <a
                                className={`px-1${
                                    selectedMenu === index
                                        ? ' border-b-2 border-primary text-primary '
                                        : ' '
                                }`}
                                target="_blank"
                                // href=""
                                onClick={() => {
                                    if (selectedMenu !== index)
                                        setMenuIndex(index)

                                    val.onClick()
                                    handleOnClickBurger()
                                }}
                            >
                                {val.label}
                            </a>
                        </div>
                    ))}
                </div>
                <div className="flex flex-row items-center space-x-2 mb-4">
                    <a
                        onClick={() =>
                            windowOpen('https://twitter.com/NomadzlandNFT')
                        }
                        className="h-full flex items-center px-1"
                    >
                        <div className="h-10 w-10 ">
                            <OctagonTwitterSVG width="100%" height="100%" />
                        </div>
                    </a>
                    <a
                        onClick={() =>
                            windowOpen(
                                'https://www.instagram.com/nomadzlandnft'
                            )
                        }
                        className="h-full flex items-center px-1"
                    >
                        <div className="h-10 w-10 ">
                            <OctagonInstagramSVG width="100%" height="100%" />
                        </div>
                    </a>
                    <a
                        // onClick={() =>
                        //     windowOpen('https://discord.gg/thewanderers')
                        // }
                        className="h-full flex items-center px-1 pointer-events-none"
                    >
                        <div className="h-10 w-10  ">
                            <OctagonDiscordSVG width="100%" height="100%" />
                        </div>
                    </a>
                    <a
                        // onClick={() =>
                        //     windowOpen('https://t.me/joinchat/tXoYj6NupWRlNjEx')
                        // }
                        className="h-full flex items-center px-1 pointer-events-none"
                    >
                        <div className="h-10 w-10 ">
                            <OctagonTelegramSVG width="100%" height="100%" />
                        </div>
                    </a>
                </div>
                <div className="">
                    <button
                        onClick={() => windowOpen(whitePaperLink)}
                        className="text-xl h-full  border border-blue-7 flex justify-center items-center px-4"
                    >
                        Whitepaper
                    </button>
                </div>
            </Drawer>
            <header className="h-24 relative z-50 lg:px-0 text-white bg-blue-5  bg-opacity-25">
                <div className=" m-auto flex justify-between h-full px-6">
                    <div className=" sm:mr-10 xl:mr-20 h-full py-5 ">
                        <a className="h-full bg-blue-2">
                            <div className="h-full w-12">
                                <BrandLogoSVG width={'100%'} height={'100%'} />
                            </div>
                        </a>
                    </div>
                    <div className="relative py-6">
                        <a className="">
                            <div
                                onClick={handleOnClickBurger}
                                className="flex items-center justify-center text-2xl h-full cursor-pointer  transform  active:scale-125 "
                                style={{ color: '#fff' }}
                            >
                                <GiHamburgerMenu height="100%" />
                            </div>
                        </a>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default DefaultNavbar
