/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Layout, Row, Col, Button, BackTop } from 'antd'
import Slider from 'react-slick'
import ReactPlayer from 'react-player/file'
import { Element, scroller } from 'react-scroll'
import { BiUpArrowAlt } from 'react-icons/bi'
import Article from '../../components/DisplayText/Article'
import utilitiesImages from '../../assets/images/utilities'
import { LineWrapper } from '../../components/Wrappers/LineWrapper'
import HeaderText from '../../components/DisplayText/Header'
import NextArrowControl from '../../components/CustomSliderControls/NextArrowControl'
import PrevArrowControl from '../../components/CustomSliderControls/PrevArrowControl'
import Paragraph from '../../components/DisplayText/Paragraph'
import DefaultNavbar from '../../components/Navbar/DefaultNavbar'
import islandVideo from '../../assets/images/backgrounds/FLOAT-ISLAND.mp4'
import lands from '../../assets/videos/LANDS.mp4'
import {
    FrameCounterTopSVG,
    FrameCounterBottomSVG,
    FrameFAQTopSVG,
    FrameFAQBottomSVG,
} from '../../assets/svg/frames'
import FrameCounterHeaderCustom from '../../assets/svg/frames/FrameCounterHeaderCustom'
import {
    DownArrowSVG,
    OctagonDiscordSVG,
    OctagonTelegramSVG,
    OctagonTwitterSVG,
    OctagonInstagramSVG,
} from '../../assets/svg/icons'
import { RenderMarcoSVG } from './../../assets/svg/sections/index'
import { returnValueByScreenWidth } from '../../services/stylesServices'
import { windowOpen } from '../../services/windowServices'
import Faq from './Faq'
import MeetTeam from './MeetTeam'
import Mint from './Mint'
import Wanderers from './Wanderers'
import RoadMap from './RoadMap'
import useScrollTop from '../../hooks/useScrollTop'
import Token from './Token'
import { Logo1SVG } from '../../assets/svg/brand'
import useWindowSize from '../../hooks/useWindowSize'
import nftsImages from '../../assets/images/nfts'
import MintSection from '../../components/Mint/MintSection'
import GenericCountDown from '../../components/CountDowns/GenericCountDown'

const { Content } = Layout

// TODO change percents
const landImages = [
    {
        id: 1,
        img: nftsImages.canada,
        // title: '40%',
        // percent: 'Country',
    },
    {
        id: 2,
        img: nftsImages.madrid,
        // title: '30%',
        // percent: 'Destiny',
    },
    {
        id: 3,
        img: nftsImages.urkLondon,
        // title: '30%',
        // percent: 'Destiny',
    },
    {
        id: 4,
        img: nftsImages.australiaA,
        // title: '30%',
        // percent: 'Destiny',
    },
    {
        id: 5,
        img: nftsImages.australiaG,
        // title: '30%',
        // percent: 'Destiny',
    },
    {
        id: 5,
        img: nftsImages.germany,
        // title: '30%',
        // percent: 'Destiny',
    },
]

const scrollTo = (name) => {
    scroller.scrollTo(name, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
    })
}

const LandingPage = () => {
    useScrollTop()
    const { width } = useWindowSize()
    const [imageIndex, setImageIndex] = useState(0)
    const [collapseFaq, setCollapseFAQ] = useState(true)

    const sliderLandSettings = {
        dots: false,
        infinite: true,
        lazyLoad: true,
        autoplay: true,
        speed: 300,
        slidesToShow: width < 768 ? 1 : 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrowControl />,
        prevArrow: <PrevArrowControl />,
        beforeChange: (_, next) => setImageIndex(next),
    }

    const handleCollapseFaq = () => {
        setCollapseFAQ(!collapseFaq)
    }

    return (
        <Layout className="block min-w-minMobileWidth">
            <BackTop>
                <div className="h-12 w-12 lg:h-16 lg:w-16 rounded-full flex justify-center items-center bg-primary text-white">
                    <BiUpArrowAlt className="text-2xl" />
                </div>
            </BackTop>
            <DefaultNavbar />
            <Content>
                <div className="-mt-24 pb-1 xl:pb-32 lg:pb-40 relative ">
                    <div className="absolute top-0 left-0 bottom-0 right-0 overflow-hidden">
                        <ReactPlayer
                            className="custom-react-player"
                            width="100%"
                            height="100%"
                            controls={false}
                            loop={true}
                            playing={true}
                            url={islandVideo}
                            muted={true}
                            // onReady={handlePlayVideo}
                            onError={(e) => console.log('error', e)}
                            onStart={() => console.log('playing')}
                        />
                    </div>
                    <div className="h-screen relative max-w-1400px mx-auto px-6 md:px-10 lg:px-14 pt-64px mb-20">
                        <div className="h-full flex flex-col justify-between py-4 md:py-6 lg:py-10">
                            <div className="w-80 lg:w-96 mx-auto pt-10 pb-6">
                                <Logo1SVG width="100%" />
                            </div>
                            {/* <MintSection /> */}
                            <div className="mb-10 z-20 px-4 md:px-12">
                                <div className="count-down bg-black-1 bg-opacity-40 mx-auto lg:px-4 py-8  relative z-10 ">
                                    <div className="flex justify-center text-white text-lg md:text-2xl lg:text-4xl text-center">
                                        <div className="flex flex-col">
                                            <GenericCountDown
                                                date={new Date('2022/06/11')}
                                                className="text-5xl md:text-8xl  xl:text-10xl"
                                            />
                                            <div
                                                className="text-4xl md:text-5xl lg:text-6xl font-russo-one leading-none   tracking-widest "
                                                // style={{ letterSpacing: '1.2rem' }}
                                            >
                                                06.11.2022
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
                                </div>
                                <div className="flex">
                                    <div className="flex px-12 md:px-16 xl:px-20 text-center mx-auto relative">
                                        <div className="absolute right-0 left-0 top-0">
                                            <FrameCounterHeaderCustom
                                                width="100%"
                                                // backgroundColor="2fb39b"
                                            />
                                        </div>
                                        <HeaderText
                                            base="xl"
                                            md="3xl"
                                            lg="34px"
                                            className="text-white z-10"
                                        >
                                            MINT DAY
                                        </HeaderText>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center z-20">
                                <a
                                    className="bg-dark bg-opacity-50 h-auto text-primary text-xl md:text-2xl lg:text-3xl xl:text-4xl py-2 px-8"
                                    type="primary"
                                    target="blank"
                                    onClick={() => scrollTo('community')}
                                >
                                    JOIN OUR COMMUNITY
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute right-0 left-0"
                        style={{ bottom: '-1px' }}
                    >
                        <RenderMarcoSVG width="100%" />
                    </div>
                </div>
                <Mint />
                <Wanderers />
                <Element
                    name="lands"
                    className="bg-blue-5 pt-10 pb-3 lg:pb-16 border-0"
                >
                    <div className="max-w-1400px mx-auto px-6 md:px-10 lg:px-14 pb-6 lg:pb-32">
                        <Row className=" flex-wrap-reverse lg:flex-wrap">
                            <Col
                                xs={24}
                                lg={12}
                                className="hidden lg:flex justify-center pr-10"
                            >
                                <div className="w-6/12 md:w-5/12 lg:w-10/12 xl:w-full pt-10 ">
                                    <ReactPlayer
                                        // className="custom-react-player"
                                        width="100%"
                                        height="100%"
                                        controls={false}
                                        loop={true}
                                        playing={true}
                                        url={lands}
                                        muted={true}
                                        // onReady={handlePlayVideo}
                                        onError={(e) => console.log('error', e)}
                                        onStart={() => console.log('playing')}
                                    />
                                </div>
                            </Col>
                            <Col xs={24} lg={12}>
                                <div className=" lg:pl-5">
                                    <HeaderText
                                        base="4xl"
                                        lg="89px"
                                        className="text-primary leading-tight tracking-widest text-center lg:text-left"
                                    >
                                        Metaverse
                                    </HeaderText>
                                </div>

                                <LineWrapper
                                    borderHeight="60%"
                                    borderWidth="80%"
                                    decorationBottom="0.7rem"
                                >
                                    <Article
                                        paragraphProps={{
                                            className:
                                                ' text-blue-4 text-justify mb-8',
                                            base: 'lg',
                                            lg: '23px',
                                        }}
                                    >
                                        The mission began when a small group of
                                        Nomadz decided to reinitiate an
                                        investigation about the Earth’s
                                        gravitational catastrophe that happened
                                        hundreds of years ago. These Nomadz went
                                        off to investigate if there were any
                                        remaining civilizations or Destinations
                                        after the catastrophe, and that sets off
                                        the mission. After realizing there were
                                        over 150 different territoryes with
                                        thousands of different Destination the
                                        Nomadz decided to start an expansion in
                                        their civilization.
                                    </Article>
                                    <Article
                                        header="Destinations NFTs"
                                        headerProps={{
                                            className:
                                                'mb-4 font-saira-condensed leading-none text-info font-semibold  text-center lg:text-left',
                                            base: '2xl',
                                            lg: '40px',
                                        }}
                                        paragraphProps={{
                                            className:
                                                'mb-8 text-blue-4 text-justify',
                                            base: 'lg',
                                            lg: '23px',
                                        }}
                                    >
                                        Feel the power!! Once you get this class
                                        of NTF, now you’re the only owner of
                                        this Prime NFT, it means that every
                                        single booking completed to the
                                        equivalent place in our partnet travel
                                        platform will pay you a commission!
                                    </Article>

                                    {/* <Article
                                        header="Ambassador NFTs"
                                        headerProps={{
                                            className:
                                                'mb-4 font-saira-condensed leading-none text-info font-semibold  text-center lg:text-left',
                                            base: '2xl',
                                            lg: '40px',
                                        }}
                                        paragraphProps={{
                                            className:
                                                'mb-10 text-blue-4 text-justify',
                                            base: 'lg',
                                            lg: '23px',
                                        }}
                                    >
                                        As the Ambassador you and 9 others will
                                        guard the land, by doing so, you will
                                        also be rewarded with a commission when
                                        a booking has been completed, but in a
                                        smaller percentage. In other words,
                                        you’re working for the Prime NFT owner
                                        but whom will share revenue with you.
                                    </Article> */}
                                </LineWrapper>
                            </Col>
                        </Row>
                    </div>
                </Element>
                <div className="bg-blue-5 pb-16 relative border-0">
                    <div className="max-w-1400px mx-auto px-6 md:px-10 lg:px-14 ">
                        <div className="text-center mb-2 w-full lg:w-8/12 mx-auto">
                            <Article
                                header={'Rewards Distribution'}
                                headerProps={{
                                    className:
                                        'text-primary text-4xl lg:text-89px mb-5 md:mb-10 leading-tight tracking-widest mx-auto',
                                }}
                                paragraphProps={{
                                    className: 'mb-8 text-blue-4 text-justify',
                                    base: 'lg',
                                    lg: '23px',
                                }}
                            >
                                The Destination Nft consist of the Countries,
                                Cities and Destinations. It distribute a
                                percentage of profit sales given by our partner
                                to the owner of each unique NFT. It means if you
                                are a holder of one destination you get rewarded
                                every single time that someone complete a
                                booking through our partner portal.
                            </Article>
                        </div>
                        <div className="flex flex-col">
                            <Slider
                                className="px-12 py-10"
                                {...sliderLandSettings}
                            >
                                {landImages.map(({ id, img }, idx) => (
                                    <div
                                        key={`land-${id}`}
                                        className={
                                            idx === imageIndex
                                                ? 'landSlide activeSlide'
                                                : 'landSlide'
                                        }
                                    >
                                        <img src={img} alt={img} />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <div className="flex flex-col items-center mt-5">
                            <HeaderText
                                className="leading-tight text-primary tracking-widest"
                                base="3xl"
                                lg="40px"
                            >
                                {landImages[imageIndex] &&
                                    landImages[imageIndex]?.title}
                            </HeaderText>
                            <HeaderText
                                className="leading-none text-info font-saira-condensed font-semibold"
                                base="xl"
                                lg="27px"
                            >
                                {landImages[imageIndex] &&
                                    landImages[imageIndex]?.percent}
                            </HeaderText>
                        </div>
                    </div>
                </div>
                <div
                    className="bg-blue-5 bg-earth bg-no-repeat bg-cover pt-12 pb-4 lg:pt-48 lg:pb-48 relative"
                    style={{
                        backgroundPosition: '0% 100%',
                    }}
                >
                    <Token />
                    <RoadMap />
                </div>
                <div className="bg-blue-5 pt-10 pb-20 lg:pb-44 lg:pt-20">
                    <div className="max-w-1400px mx-auto px-6 md:px-10 lg:px-14 ">
                        <div className="flex flex-col relative bg-blue-6 bg-opacity-40 py-5 lg:py-10">
                            <div
                                className="absolute left-0 right-0"
                                style={{ top: '-8px' }}
                            >
                                <FrameFAQTopSVG width="100%" />
                            </div>
                            <div
                                className="absolute left-0 right-0"
                                style={{ bottom: 0 }}
                            >
                                <FrameFAQBottomSVG width="100%" />
                            </div>
                            <div className="flex flex-row justify-center items-center ">
                                <div
                                    className="flex cursor-pointer select-none"
                                    onClick={handleCollapseFaq}
                                >
                                    <HeaderText
                                        base="4xl"
                                        lg="89px"
                                        className="text-primary leading-none tracking-widest mr-2"
                                    >
                                        FAQ
                                    </HeaderText>
                                </div>
                                <div
                                    className="flex w-12 lg:w-16 cursor-pointer"
                                    onClick={handleCollapseFaq}
                                >
                                    <DownArrowSVG width={'100%'} />
                                </div>
                            </div>
                            <Faq visible={!collapseFaq} />
                        </div>
                    </div>
                </div>
                <MeetTeam />
                <Element name="community" className="bg-blue-5 pb-20 lg:pb-48">
                    <div className="max-w-1400px mx-auto px-6 md:px-10 lg:px-14 ">
                        <Row className="mb-12 lg:mb-16">
                            <Col
                                xs={24}
                                lg={7}
                                className="text-center lg:text-left"
                            >
                                <HeaderText
                                    base="4xl"
                                    lg="89px"
                                    className="text-primary leading-none tracking-widest"
                                >
                                    Join
                                </HeaderText>
                                <HeaderText
                                    base="2xl"
                                    lg="53px"
                                    className="text-info font-semibold leading-none font-saira-condensed lg:relative lg:-right-32"
                                >
                                    The community
                                </HeaderText>
                            </Col>
                            <Col xs={24} lg={17} className="pt-4 lg:pt-12">
                                <LineWrapper
                                    side="right"
                                    decorationBottom="0.7rem"
                                >
                                    <Paragraph
                                        base="lg"
                                        lg="23px"
                                        className="text-blue-4 lg:pl-44 text-justify"
                                    >
                                        Become a part of the most important NFT
                                        project. Big things happen community is
                                        involved in all phases. Join us to get
                                        the news as soon as they come out and
                                        follow us for our latest announcements.
                                    </Paragraph>
                                </LineWrapper>
                            </Col>
                        </Row>
                        <div className="flex flex-row justify-center space-x-8 lg:space-x-10">
                            <Button
                                type="link"
                                className="h-16 w-16 lg:h-24 lg:w-24 p-0"
                                onClick={() =>
                                    windowOpen(
                                        'https://twitter.com/NomadzlandNFT'
                                    )
                                }
                            >
                                <OctagonTwitterSVG width="100%" height="100%" />
                            </Button>
                            <Button
                                type="link"
                                className="h-16 w-16 lg:h-24 lg:w-24 p-0"
                                onClick={() =>
                                    windowOpen(
                                        'https://www.instagram.com/nomadzlandnft'
                                    )
                                }
                            >
                                <OctagonInstagramSVG
                                    width="100%"
                                    height="100%"
                                />
                            </Button>
                            <Button
                                type="link"
                                className="h-16 w-16 lg:h-24 lg:w-24 p-0"
                                onClick={() =>
                                    windowOpen('https://discord.gg/JPx5v9Xv9g')
                                }
                            >
                                <OctagonDiscordSVG width="100%" height="100%" />
                            </Button>
                        </div>
                    </div>
                </Element>
            </Content>
            <footer className="bg-blue-5 py-12 border-blue-4 border-solid border-t hidden lg:block">
                <div className="max-w-1400px mx-auto px-6 md:px-10 lg:px-14">
                    <div className="flex flex-row justify-between w-full ">
                        <div className=" max-h-full ">
                            <div className="flex flex-row items-center ">
                                <div className="flex mb-3 px-8 w-64">
                                    <Logo1SVG width="100%" />
                                </div>
                                <HeaderText
                                    base="2xl"
                                    className="text-blue-4 font-semibold font-saira-condensed"
                                >
                                    4,420 Unique Nomadz
                                </HeaderText>
                            </div>
                        </div>
                        <div className="max-h-full  items-center">
                            <div className="flex flex-col">
                                <h5 className="text-capitalize text-xl text-blue-4 tracking-wide font-bold mb-2">
                                    Home
                                </h5>
                                {/* <ul className="list-none font-saira-condensed font-semibold">
                                    <li className="mb-2">
                                        <a
                                            className="text-blue-4 hover:text-gray-400"
                                            href="#"
                                        >
                                            Terms of service
                                        </a>
                                    </li>
                                    <li className=" mb-2">
                                        <a
                                            className="text-blue-4 hover:text-gray-400"
                                            href="#"
                                        >
                                            Smart Contract
                                        </a>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Layout>
    )
}

export default LandingPage
