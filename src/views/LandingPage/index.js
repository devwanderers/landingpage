/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Layout, Row, Col, Button, BackTop } from 'antd'
import SliderIslands from './../../components/LandingComponent/SliderIslands'
// import {} from 'react-icons/fa'
import Slider from 'react-slick'
import ReactPlayer from 'react-player/file'
import { Element, scroller } from 'react-scroll'
import { BiUpArrowAlt } from 'react-icons/bi'
// import brandImages from '../assets/images/brand'

// import logo from '../assets/images/brand/logo.png'
// import { DiscordIcon } from '../components/CustomIcons'
// import { SiDiscord } from 'react-icons/si'
import MintSection from './../../components/Mint/MintSection'
import GenericCountDown from '../../components/CountDowns/GenericCountDown'
import Article from '../../components/DisplayText/Article'
import SectionTitle from '../../components/Sections/SectionTitle'
import utilitiesImages from '../../assets/images/utilities'
import { LineWrapper } from '../../components/Wrappers/LineWrapper'
import HeaderText from '../../components/DisplayText/Header'
import Paragraph from '../../components/DisplayText/Paragraph'
import DefaultNavbar from '../../components/Navbar/DefaultNavbar'
import islandVideo from '../../assets/images/backgrounds/FLOAT-ISLAND.mp4'
import {
    FrameCounterTopSVG,
    FrameCounterBottomSVG,
    FrameFAQTopSVG,
    FrameFAQBottomSVG,
    FrameCharacterSVG,
} from '../../assets/svg/frames'
import FrameCounterHeaderCustom from '../../assets/svg/frames/FrameCounterHeaderCustom'
import {
    DownArrowSVG,
    OctagonDiscordSVG,
    OctagonTelegramSVG,
    OctagonTwitterSVG,
} from '../../assets/svg/icons'
import useWindowDimensions from '../../customHooks/useWindowDimensions'
import { returnValueByScreenWidth } from '../../services/stylesServices'
import { RenderMarcoSVG } from '../../assets/svg/sections/index'
import { BrandLogoSVG, Logo1SVG } from '../../assets/svg/brand'
import AnimDisplayFromTop from '../../components/Animations/AnimDisplayFromTop'
import windowOpen from '../../services/windowOpen'
import CollectionSection from '../../components/Collection/CollectionSection'
import { RoadMapMobSVG } from '../../assets/svg/utilities'
import Benefits from './Benefits'
import Faq from './Faq'
import MeetTeam from './MeetTeam'
import AnimateTransition from '../../components/Animations/AnimateTransition'
import { useInView } from 'react-intersection-observer'
import Mint from './Mint'
import Wanderers from './Wanderers'
import RoadMapSvg from '../../assets/svg/utilities/RoadMapSVG'

const { Content } = Layout
const deadline = new Date('February 15, 2022 11:00:00')

const landImages = [
    {
        id: 1,
        img: utilitiesImages.isla,
        title: '25%',
        percent: 'Country',
    },
    {
        id: 2,
        img: utilitiesImages.isla,
        title: '10%',
        percent: 'City',
    },
    {
        id: 3,
        img: utilitiesImages.isla,
        title: '6%',
        percent: 'Destiny',
    },
    {
        id: 4,
        img: utilitiesImages.isla,
        title: '20%',
        percent: 'Country ambassadors',
    },
    {
        id: 5,
        img: utilitiesImages.isla,
        title: '15%',
        percent: 'City ambassadors',
    },
    {
        id: 6,
        img: utilitiesImages.isla,
        title: '9%',
        percent: 'Destiny ambassadors',
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
    const { innerWidth } = useWindowDimensions()
    const [selectedMenu, setMenuIndex] = useState(0)
    const [collapseFaq, setCollapseFAQ] = useState(true)
    // const [roadKey, setSelectedKey] = useState(1)
    // const [videoReady, playVideo] = useState(false)

    const handleCollapseFaq = () => {
        setCollapseFAQ(!collapseFaq)
    }

    return (
        <Layout
            className="flex flex-col min-h-screen"
            style={{ minWidth: '425px' }}
        >
            <BackTop>
                <div className="h-12 w-12 lg:h-16 lg:w-16 rounded-full flex justify-center items-center bg-primary text-white">
                    <BiUpArrowAlt className="text-2xl" />
                </div>
            </BackTop>
            <DefaultNavbar />
            <Content>
                <div className="-mt-24 pb-1 xl:pb-32 lg:pb-40 relative">
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
                    <div className="section mx-auto pt-64px mb-20 h-screen">
                        <div className="css-generic h-full flex-col justify-between py-4 md:py-6 lg:px-28 xl:px-36 lg:py-10">
                            <div className="pt-10 w-80 lg:w-96 mx-auto  pb-6">
                                <Logo1SVG width="100%" />
                            </div>{' '}
                            <MintSection />
                             {/* <div className="mb-10 z-20">
                               <div className="count-down bg-black-1 bg-opacity-40 mx-auto lg:px-4 pt-5 pb-4 relative z-10">
                                    <GenericCountDown date={deadline} />
                                    <div className="flex text-white text-lg md:text-2xl lg:text-4xl mt-5">
                                        <div className="flex-1">DAYS</div>
                                        <div className="flex-1">HOURS</div>
                                        <div className="flex-1">MINUTES</div>
                                        <div className="flex-1">SECONDS</div>
                                    </div> 
                                    <div className="flex flex-col text-white text-lg md:text-2xl lg:text-4xl mt-5 text-center">
                                        <div className="xl:text-6xl text-xl font-saira-condensed leading-none tracking-wide">
                                            PRE-SALE EVENT ALMOST
                                        </div>
                                        <div
                                            className="xl:text-6xl text-lg font-russo-one leading-none pt-4 relative -mr-5"
                                            style={{ letterSpacing: '0.8rem' }}
                                        >
                                            LAUNCHING SOON!
                                        </div>
                                    </div>
                                    <div
                                        className="absolute right-0 left-0 -mx-3"
                                        style={{
                                            top: returnValueByScreenWidth(
                                                innerWidth,
                                                {
                                                    base: '-10px',
                                                    sm: '-16px',
                                                    md: '-18px',
                                                    xl: '-18px',
                                                }
                                            ),
                                        }}
                                    >
                                        <FrameCounterTopSVG width="100%" />
                                    </div>
                                    <div
                                        className="absolute right-0 left-0 -mx-3"
                                        style={{
                                            bottom: returnValueByScreenWidth(
                                                innerWidth,
                                                {
                                                    base: '-10px',
                                                    sm: '-16px',
                                                    md: '-18px',
                                                    xl: '-18px',
                                                }
                                            ),
                                        }}
                                    >
                                        <FrameCounterBottomSVG
                                            width="100%"
                                            height="100%"
                                        />
                                    </div>
                                </div>
                                <div className="css-generic">
                                    <div className="css-generic px-12 md:px-16 xl:px-20 text-center mx-auto relative">
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
                                            MINT STARTS
                                        </HeaderText>
                                    </div>
                                </div>
                            </div> */}
                            <div className="text-center z-20">
                                <a
                                    className="bg-dark bg-opacity-50 h-auto text-primary text-xl md:text-2xl lg:text-3xl xl:text-4xl py-2 px-8"
                                    type="primary"
                                    target="blank"
                                    onClick={() => scrollTo('community')}
                                    // href="https://discord.gg/thewanderers"
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
                    className="bg-blue-5 pt-10 pb-3 lg:pb-20 border-0"
                >
                    <div className="section">
                        <Row className=" flex-wrap-reverse lg:flex-wrap">
                            <Col
                                xs={24}
                                lg={12}
                                className="hidden lg:flex justify-center "
                            >
                                <div className="w-6/12 md:w-5/12 lg:w-10/12 xl:w-8/12 mx-auto">
                                    <img
                                        className="w-full"
                                        src={utilitiesImages.island}
                                        alt={utilitiesImages.island}
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
                                        NFT
                                    </HeaderText>
                                </div>

                                <LineWrapper
                                    borderHeight="60%"
                                    borderWidth="80%"
                                    decorationBottom="0.7rem"
                                >
                                    <Article
                                        header="Lands"
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
                                        this land, it means that every single
                                        booking completed to the equivalent
                                        place in our partnet travel platform
                                        will pay you a commission!
                                    </Article>
                                    <Article
                                        header="Role in Land"
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
                                        As the role in land NFT you and 9 others
                                        will guard the land, by doing so, you
                                        will also be rewarded with a commission
                                        when a booking has been completed, but
                                        in a smaller percentage. In other words,
                                        you’re working for the land owner but
                                        whom will share revenue with you.
                                    </Article>
                                </LineWrapper>
                            </Col>
                        </Row>
                    </div>
                </Element>
                <div className="bg-blue-5 pb-16 relative border-0">
                    <div className="section">
                        <SliderIslands landImages={landImages} />
                    </div>
                </div>
                <div
                    className="bg-blue-5 bg-earth bg-no-repeat bg-cover pt-12 pb-4 lg:pt-48 lg:pb-48 relative"
                    style={{
                        backgroundPosition: '0% 100%',
                    }}
                >
                    <div className="section">
                        <Element
                            name="token"
                            className="css-generic flex-grow "
                        >
                            <div className="css-generic items-center">
                                <HeaderText
                                    base="4xl"
                                    lg="89px"
                                    className="text-primary leading-none tracking-widest"
                                >
                                    WTT
                                </HeaderText>
                            </div>
                            <div className="css-generic"></div>
                            <div className="css-generic flex-row flex-grow max-h-full ">
                                <div className="css-generic hidden lg:flex flex-1"></div>
                                <div className="css-generic flex-1  text-center lg:text-left lg:pl-8">
                                    <HeaderText
                                        base="2xl"
                                        lg="53px"
                                        className="text-info leading-none font-saira-condensed font-semibold"
                                    >
                                        Token
                                    </HeaderText>
                                </div>
                            </div>
                        </Element>
                        <Element className="css-generic mb-8 lg:mb-20">
                            <Row>
                                <Col xs={24} lg={12}>
                                    <LineWrapper
                                        side="right"
                                        decorationBottom="0.7rem"
                                    >
                                        <Paragraph
                                            className=" text-blue-4 text-justify"
                                            base="lg"
                                            lg="23px"
                                        >
                                            {
                                                'We are creating an ecosystem where your NFTs are more than Art. We believe in our community and was to give you a piece back for the trust you put into this project. '
                                            }
                                            <br />
                                            The token rewards you will receive
                                            in the ecosystem has unique features
                                            you will love!! The Nomadz Travel
                                            Token is the native currency in the
                                            ecosystem, it is based on ERC-20
                                            making it highly diverse and easy to
                                            use. Token listening is coming soon!
                                        </Paragraph>
                                    </LineWrapper>
                                </Col>
                                <Col
                                    xs={24}
                                    lg={12}
                                    className="flex justify-center lg:pl-5"
                                >
                                    <div className="w-6/12 lg:w-full">
                                        <img
                                            className="w-full h-auto"
                                            src={utilitiesImages.wttCoin}
                                            alt={utilitiesImages.wttCoin}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Element>
                        <Element
                            name="roadMap"
                            className="css-generic text-center lg:text-left"
                        >
                            <HeaderText
                                base="4xl"
                                lg="89px"
                                className="text-primary leading-none tracking-widest mb-10 lg:mb-28"
                            >
                                Road Map
                            </HeaderText>
                            <div className="css-generic mx-auto w-full lg:w-8/12">
                                <Article
                                    header="Road Map"
                                    subHeader="February 2022"
                                    headerProps={{
                                        className:
                                            'leading-tight text-info text-center lg:text-left',
                                        base: '3xl',
                                        lg: '40px',
                                    }}
                                    subHeaderProps={{
                                        className:
                                            'leading-tight text-blue-4 font-saira-condensed font-semibold mb-4',
                                        base: 'xl',
                                        lg: '27px',
                                    }}
                                    paragraphProps={{
                                        className:
                                            'mb-8 text-blue-4  text-justify',
                                        base: 'lg',
                                        lg: '23px',
                                    }}
                                >
                                    Unlike many other projects, our project has
                                    been created to be in the market for the
                                    long run. That is why our roadmap is more
                                    complex and detailed than more projects. The
                                    team is working tirelessly to accomplish all
                                    the goals set forth in the roadmap. We’ll be
                                    keeping you updated through social media
                                    every step of the way.
                                </Article>
                            </div>

                            <div className="css-generic max-w-full flex justify-center">
                                <RoadMapSvg
                                    currentStep={3}
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                        </Element>
                    </div>
                </div>
                <div className="bg-blue-5 pt-10 pb-20 lg:pb-44 lg:pt-20">
                    <div className="section">
                        <div className="css-generic relative bg-blue-6 bg-opacity-40 py-10">
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
                            <div className="css-generic justify-center items-center flex-row">
                                <div
                                    className="css-generic cursor-pointer select-none"
                                    onClick={handleCollapseFaq}
                                >
                                    <HeaderText
                                        lg="89px"
                                        className="text-primary leading-none tracking-widest mr-2"
                                    >
                                        FAQ
                                    </HeaderText>
                                </div>
                                <div
                                    className="css-generic w-10 cursor-pointer"
                                    onClick={handleCollapseFaq}
                                >
                                    <DownArrowSVG />
                                </div>
                            </div>
                            <Faq visible={!collapseFaq} />
                        </div>
                    </div>
                </div>
                <MeetTeam />
                <Element name="community" className="bg-blue-5 pb-20 lg:pb-48">
                    <div className="section">
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
                        <div className="css-generic flex-row justify-center space-x-8 lg:space-x-10">
                            <Button
                                type="link"
                                className="h-16 w-16 lg:h-24 lg:w-24 p-0"
                                onClick={() =>
                                    windowOpen(
                                        'https://t.me/joinchat/tXoYj6NupWRlNjEx'
                                    )
                                }
                            >
                                <OctagonTelegramSVG
                                    width="100%"
                                    height="100%"
                                />
                            </Button>
                            <Button
                                type="link"
                                className="h-16 w-16 lg:h-24 lg:w-24 p-0"
                                onClick={() =>
                                    windowOpen(
                                        'https://discord.gg/thewanderers'
                                    )
                                }
                            >
                                <OctagonDiscordSVG width="100%" height="100%" />
                            </Button>

                            <Button
                                type="link"
                                className="h-16 w-16 lg:h-24 lg:w-24 p-0"
                                onClick={() =>
                                    windowOpen(
                                        'https://twitter.com/TheWanderersNFT'
                                    )
                                }
                            >
                                <OctagonTwitterSVG width="100%" height="100%" />
                            </Button>
                        </div>
                    </div>
                </Element>
            </Content>
            <footer className="bg-blue-5 py-12 border-blue-4 border-solid border-t hidden lg:block">
                <div className="section">
                    <div className="css-generic flex-row justify-between">
                        <div className="css-generic flex-grow max-h-full w-6/12 ">
                            <div className="css-generic items-center w-64">
                                <div className="css-generic w-full mb-3 px-8">
                                    <Logo1SVG width="100%" />
                                </div>
                                <HeaderText
                                    base="2xl"
                                    className="text-blue-4 font-semibold font-saira-condensed"
                                >
                                    9,000 Unique Nomadz
                                </HeaderText>
                            </div>
                        </div>
                        <div className="css-generic flex-grow max-h-full w-6/12  items-center">
                            <div className="css-generic">
                                <h5 className="text-capitalize text-xl text-blue-4 tracking-wide font-bold mb-2">
                                    Home
                                </h5>
                                <ul className="list-none font-saira-condensed font-semibold">
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
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Layout>
    )
}

export default LandingPage
