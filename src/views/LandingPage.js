import React, { useState } from 'react'
import { Layout, Row, Col, Button } from 'antd'
import { FaDiscord, FaTwitter, FaTelegramPlane } from 'react-icons/fa'
import Slider from 'react-slick'
import ReactPlayer from 'react-player/file'
// import brandImages from '../assets/images/brand'

// import logo from '../assets/images/brand/logo.png'
// import { DiscordIcon } from '../components/CustomIcons'
// import { SiDiscord } from 'react-icons/si'
// import GenericCountDown from './../components/CountDowns/GenericCountDown'
import Article from '../components/DisplayText/Article'
import SectionTitle from '../components/Sections/SectionTitle'
import utilitiesImages from '../assets/images/utilities'
import { LineWrapper } from './../components/Wrappers/LineWrapper'
import HeaderText from './../components/DisplayText/Header'
import NextArrowControl from '../components/CustomSliderControls/NextArrowControl'
import PrevArrowControl from '../components/CustomSliderControls/PrevArrowControl'
import Paragraph from './../components/DisplayText/Paragraph'
// import { IslandSVG } from '../assets/svg/utilities'
import islandVideo from '../assets/images/backgrounds/FLOAT-ISLAND.mp4'
import {
    FrameCounterTopSVG,
    FrameCounterBottomSVG,
    FrameFAQTopSVG,
    FrameFAQBottomSVG,
    FrameCharacterSVG,
    // FrameCounterHeaderSVG,
} from '../assets/svg/frames'
// import FrameCounterHeaderCustom from '../assets/svg/frames/FrameCounterHeaderCustom'
import {
    DownArrowSVG,
    OctagonDiscordSVG,
    OctagonTelegramSVG,
    OctagonTwitterSVG,
} from '../assets/svg/icons'
// import { BackgroundSectionSVG } from '../assets/svg/background'
import RoadMapSVG from './../assets/svg/utilities/RoadMapSVG'
import useWindowDimensions from './../customHooks/useWindowDimensions'
import { returnValueByScreenWidth } from '../services/stylesServices'
// import { sectionsImages } from '../assets/images/sections'
import { RenderMarcoSVG } from './../assets/svg/sections/index'
import { Logo1SVG } from '../assets/svg/brand'
import AnimDisplayFromTop from './../components/Animations/AnimDisplayFromTop'
import windowOpen from '../services/windowOpen'
import CollectionSection from '../components/Collection/CollectionSection'

const { Header, Content } = Layout
// const { Countdown } = Statistic

// const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30 // Moment is also OK

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

const LandingPage = () => {
    const { width } = useWindowDimensions()
    const [imageIndex, setImageIndex] = useState(0)
    const [collapseFaq, setCollapseFAQ] = useState(true)
    const [roadKey, setSelectedKey] = useState(1)
    // const [videoReady, playVideo] = useState(false)

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

    // const handlePlayVideo = () => {
    //     playVideo(!videoReady)
    // }

    return (
        <Layout className="landing-page min-w-minMobileWidth">
            <Header className="bg-transparent z-30">
                <Row className="h-full">
                    <Col xs={18}></Col>
                    <Col
                        xs={24}
                        md={6}
                        className="flex justify-center md:justify-end items-center"
                    >
                        <Button
                            onClick={() =>
                                windowOpen('https://discord.gg/thewanderers')
                            }
                            type="link"
                        >
                            <FaDiscord
                                className="social-icons"
                                color="#1BC09B"
                            />
                        </Button>
                        <Button
                            onClick={() =>
                                windowOpen(
                                    'https://t.me/joinchat/tXoYj6NupWRlNjEx'
                                )
                            }
                            type="link"
                        >
                            <FaTelegramPlane
                                className="social-icons"
                                color="#1BC09B"
                            />
                        </Button>
                        <Button
                            onClick={() =>
                                windowOpen(
                                    'https://twitter.com/TheWanderersNFT'
                                )
                            }
                            type="link"
                        >
                            <FaTwitter
                                className="social-icons"
                                color="#1BC09B"
                            />
                        </Button>
                        <div className="flex items-end relative -mb-2 pl-2">
                            <button
                                className="text-white text-2xl border border-white px-3 py-2 rounded-md leading-none"
                                onClick={() =>
                                    windowOpen(
                                        'https://thewanderers.sfo3.digitaloceanspaces.com/The%20wanderers%20whitepaper.pdf'
                                    )
                                }
                                // type="dasheds"
                            >
                                White Paper
                            </button>
                        </div>
                    </Col>
                </Row>
            </Header>
            <Content>
                <div className="-mt-64px pb-1 xl:pb-32 lg:pb-40 relative">
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
                    <div className="absolute top-0 left-0 bottom-0 right-0 overflow-hidden">
                        {/* <video width="100%" height="100%" controls autoPlay={true} src={islandVideo} type="video/mp4"/> */}
                    </div>
                    <div className="section mx-auto pt-64px mb-20 h-screen">
                        <div className="css-generic h-full flex-col justify-between py-4 md:py-6 lg:px-28 xl:px-36 lg:py-10">
                            <div className="pt-10 lg:pt-0 w-80 lg:w-96 mx-auto  pb-6">
                                <Logo1SVG width="100%" />
                            </div>
                            <div className="mb-10 z-20">
                                <div className="count-down bg-black-1 bg-opacity-40 mx-auto lg:px-4 pt-5 pb-4 relative z-10">
                                    {/* <GenericCountDown date={deadline} /> */}
                                    <div className="flex flex-col text-white text-lg md:text-2xl lg:text-4xl mt-5 text-center">
                                        <div className="xl:text-6xl text-xl font-saira-condensed leading-none tracking-wide">
                                            PRE-SALE EVENT ALMOST
                                        </div>
                                        <div
                                            className="xl:text-8xl text-lg font-russo-one leading-none pt-4 relative -mr-5"
                                            style={{ letterSpacing: '1.9rem' }}
                                        >
                                            READY!
                                        </div>
                                    </div>
                                    <div
                                        className="absolute right-0 left-0 -mx-3"
                                        style={{
                                            top: returnValueByScreenWidth(
                                                width,
                                                {
                                                    base: '-6px',
                                                    md: '-11px',
                                                    lg: '-10px',
                                                    xl: '-18px',
                                                }
                                            ),
                                        }}
                                    >
                                        <FrameCounterTopSVG width="100%" />
                                    </div>
                                    <div
                                        className="absolute right-0 left-0 -mx-3"
                                        style={{ bottom: '-18px' }}
                                    >
                                        <FrameCounterBottomSVG
                                            width="100%"
                                            height="100%"
                                        />
                                    </div>
                                </div>
                                {/* <div className="css-generic">
                                    <div className="css-generic px-12 md:px-16 xl:px-20 text-center mx-auto relative">
                                        <div className="absolute right-0 left-0 top-0">
                                            <FrameCounterHeaderCustom width="100%" />
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
                                </div> */}
                            </div>
                            <div className="text-center z-20">
                                <a
                                    className="bg-dark bg-opacity-50 h-auto text-primary text-xl md:text-2xl lg:text-3xl xl:text-4xl py-2 px-8"
                                    type="primary"
                                    target="blank"
                                    href="https://discord.gg/thewanderers"
                                >
                                    JOIN OUR DISCORD
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
                <div className=" bg-blue-5 pt-10 pb-10 lg:pb-24">
                    <div className="section">
                        <Row>
                            <Col xs={24} md={12} className="">
                                <div className="w-full">
                                    <div className="w-full xl:pr-16">
                                        <Article
                                            header="9,000"
                                            subHeader="Unique Wanderers"
                                            headerProps={{
                                                className:
                                                    'mb-1 leading-none text-primary text-center lg:text-left',
                                                base: '4xl',
                                                lg: '89px',
                                            }}
                                            subHeaderProps={{
                                                className:
                                                    'mb-4 font-saira-condensed leading-none text-info font-semibold  text-center lg:text-left',
                                                base: '2xl',
                                                lg: '53px',
                                            }}
                                            paragraphProps={{
                                                className:
                                                    'text-blue-4  text-justify',
                                                base: 'lg',
                                                lg: '23px',
                                            }}
                                            className="max-w-full"
                                        >
                                            <span>
                                                {
                                                    " We’ve created a completely virtual metaverse in which all the tourist destinations offered by our travel partner are represented as NFT's within our platform known as Lands or Roles. Such destinations can be owned by you, or a group of adventurers called Wanderers who are also represented as unique handmade NFT's."
                                                }
                                            </span>
                                            <br />
                                            <br />
                                            <span>
                                                There are 9,000 unique
                                                characters called wanderers as
                                                an initial offering and other
                                                250 special characters aviable
                                                in a pre-sale event by 110
                                                MATIC.
                                            </span>
                                            <br />
                                            <br />
                                            <span>
                                                Owning a wanderer gives you
                                                access to the metaverse as well
                                                as exclusive benefits to our
                                                travel partner. Once you mint a
                                                wanderer you start to receive
                                                big benefits such as Tokens,
                                                exclusive promotions in the
                                                travel platform and more.{' '}
                                                <a
                                                    href="#"
                                                    className="underline"
                                                >
                                                    <strong>
                                                        Read the white paper.
                                                    </strong>
                                                </a>
                                            </span>
                                        </Article>
                                    </div>
                                </div>
                            </Col>
                            <Col
                                xs={24}
                                md={12}
                                className="px-12 lg:px-10 xl:px-12 pt-5"
                            >
                                <div className="css-generic relative">
                                    <FrameCharacterSVG width="100%" />
                                    <div className=" absolute top-0 right-0 bottom-0 left-0 pt-16 pb-10 lg:pt-20 lg:pb-16">
                                        <img
                                            className="w-auto h-full object-contain overflow-hidden mx-auto relative"
                                            style={{ bottom: '-3px' }}
                                            src={utilitiesImages.nft1wb}
                                            alt={utilitiesImages.nft1wb}
                                        />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className=" bg-blue-5 lg:pb-32 css-generic lg:flex-row px-10px xl:px-0">
                    <HeaderText
                        base="4xl"
                        className="block lg:hidden text-primary mb-5 md:mb-10 leading-tight tracking-widest mx-auto"
                    >
                        COLLECTION
                    </HeaderText>
                    <SectionTitle className="hidden lg:flex">
                        COLLECTION
                    </SectionTitle>
                    <div className="css-generic flex-grow pb-5">
                        {/* Collection */}
                        <CollectionSection />
                    </div>
                </div>
                <div className="bg-blue-5 pt-10 pb-3 lg:pb-20 border-0">
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
                                    {/* <IslandSVG width="100%" /> */}
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
                </div>
                <div className="bg-blue-5 pb-16 relative border-0">
                    <div className="section">
                        <div className="css-generic">
                            <Slider className="px-12" {...sliderLandSettings}>
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
                        <div className="css-generic items-center mt-5">
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
                    <div className="section">
                        <div className="css-generic flex-grow ">
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
                        </div>
                        <div className="css-generic mb-8 lg:mb-20">
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
                                                "We are creating an ecosystem where your NFT's are more than Art, we think in our community and we want to give you a little piece back for the trust you put into this project."
                                            }
                                            <br />
                                            The token rewards you in the
                                            ecosystem and has unique features
                                            that you will love!! The Wanderers
                                            travel token, is the native currency
                                            in the ecosystem, it is based on
                                            ERC20 making it highly diverse and
                                            easy to use. Token listing coming
                                            soon!
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
                        </div>
                        <div className="css-generic text-center lg:text-left">
                            <HeaderText
                                base="4xl"
                                lg="89px"
                                className="text-primary leading-none tracking-widest mb-10 lg:mb-28"
                            >
                                Road Map
                            </HeaderText>
                            <div className="css-generic mx-auto w-full lg:w-8/12">
                                <Article
                                    header="1. Road Map"
                                    subHeader="December 12nd"
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
                                    Unlike many other projects our project has
                                    been created to be in the market for the
                                    long run. That is why our roadmap is more
                                    complex and detailed than most projects. The
                                    team is working tirelessly to accomplish all
                                    the goals set in the roadmap according to
                                    dates. We’ll keep you updated through our
                                    social media channels!
                                </Article>
                            </div>

                            <div className="css-generic max-w-full">
                                <RoadMapSVG
                                    selectedKey={roadKey}
                                    onSelectedKey={setSelectedKey}
                                />
                            </div>
                        </div>
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
                            <AnimDisplayFromTop
                                visible={!collapseFaq}
                                className="overflow-hidden css-generic"
                            >
                                <div className="css-generic px-10 lg:px-20 pt-10 ">
                                    <Article
                                        header="How to buy my NFT?"
                                        headerProps={{
                                            className:
                                                'mb-1 leading-none text-info',
                                            base: '2xl',
                                            lg: '3xl',
                                        }}
                                        paragraphProps={{
                                            className:
                                                'text-blue-4  text-justify',
                                            base: 'lg',
                                            lg: '23px',
                                        }}
                                        className="max-w-full"
                                    >
                                        <span>
                                            {
                                                'Use either Google Chrome or Brave to visit this page. You will need to have Metamask installed and MATIC on your wallet. Select as many Wanderers as you want, click the Mint button and approve the transaction. You can see an extended video tutorial '
                                            }
                                        </span>
                                        <a href="#" className="underline">
                                            <strong>here.</strong>
                                        </a>
                                    </Article>
                                    <br />
                                    <Article
                                        header="Who are The Wanderers?"
                                        headerProps={{
                                            className:
                                                'mb-1 leading-none text-info',
                                            base: '2xl',
                                            lg: '3xl',
                                        }}
                                        paragraphProps={{
                                            className:
                                                'text-blue-4  text-justify',
                                            base: 'lg',
                                            lg: '23px',
                                        }}
                                        className="max-w-full"
                                    >
                                        <span>
                                            The adventure began when a small
                                            group of adventurers called
                                            Wanderers decided to reinitiate an
                                            investigation about the earth’s
                                            gravitational catastrophe that
                                            happened hundreds of years ago.
                                            These Wanderers went off to
                                            investigate if there were any
                                            remaining civilizations or Lands
                                            after the catastrophe.
                                        </span>
                                    </Article>
                                    <br />
                                    <Article
                                        header="How to play and earn?"
                                        headerProps={{
                                            className:
                                                'mb-1 leading-none text-info',
                                            base: '2xl',
                                            lg: '3xl',
                                        }}
                                        paragraphProps={{
                                            className:
                                                'text-blue-4  text-justify',
                                            base: 'lg',
                                            lg: '23px',
                                        }}
                                        className="max-w-full"
                                    >
                                        <span>
                                            We are working tirelessly to launch
                                            the wanderers video game. The game
                                            is the place where you can use our
                                            token to play and get rewarded in
                                            several ways (PVE, PVP, Tournaments
                                            and more), once the token has been
                                            listed, you can enjoy your rewards
                                            in real life.
                                        </span>
                                        <br />
                                    </Article>
                                    <br />
                                    <Article
                                        header="How to participate in the presale event?"
                                        headerProps={{
                                            className:
                                                'mb-1 leading-none text-info',
                                            base: 'base',
                                            lg: '3xl',
                                        }}
                                        paragraphProps={{
                                            className:
                                                'text-blue-4  text-justify',
                                            base: 'lg',
                                            lg: '23px',
                                        }}
                                        className="max-w-full"
                                    >
                                        <span>
                                            All the basis to participate in the
                                            pre-sale event will be announced in
                                            our social media, if you are a
                                            milestone follower you have more
                                            chances to participate.
                                        </span>
                                    </Article>
                                    <br />
                                    {/* <Article
                                        header="Why Polygon?"
                                        headerProps={{
                                            className:
                                                'mb-1 leading-none text-info',
                                            base: 'base',
                                            lg: '3xl',
                                        }}
                                        paragraphProps={{
                                            className:
                                                'text-blue-4  text-justify',
                                            base: 'lg',
                                            lg: '23px',
                                        }}
                                        className="max-w-full"
                                    >
                                        <span>
                                            Lorem ipsum dolor sit amet,
                                            consectetuer adipiscing elit, sed
                                            diam nonummy nibh euismod tincidunt
                                            ut laoreet dolore magna aliquam erat
                                            volutpat. Ut wisi enim ad minim
                                            veniam, quis nostrud exerci tation
                                            ullamcorper suscipit lobortis nisl.
                                        </span>
                                    </Article> */}
                                </div>
                            </AnimDisplayFromTop>
                            {/* {!collapseFaq && <div className=""></div>} */}
                        </div>
                    </div>
                </div>
                <div
                    className="bg-blue-5 bg-floor bg-no-repeat bg-cover pt-12 pb-24 lg:pt-10 lg:pb-64 relative"
                    style={{
                        backgroundPosition: '0% 100%',
                    }}
                >
                    <div className="section">
                        <Row className="mb-12 lg:mb-16 xs:mb-2">
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
                                    Meet
                                </HeaderText>
                                <HeaderText
                                    base="2xl"
                                    lg="53px"
                                    className="text-info font-semibold leading-none font-saira-condensed lg:relative lg:-right-32"
                                >
                                    The team
                                </HeaderText>
                            </Col>
                            <Col xs={24} lg={17} className="pt-4 lg:pt-12">
                                <Paragraph
                                    base="lg"
                                    lg="23px"
                                    className="text-blue-4 lg:pl-44 text-justify"
                                ></Paragraph>
                            </Col>
                        </Row>
                        <Row className="lg:pt-12 xs:pt-2" gutter={[10, 50]}>
                            <Col md={8} sm={8} lg={8} xl={8}>
                                <div className="flex flex-row">
                                    <div>
                                        <img
                                            className="w-full h-auto"
                                            src={utilitiesImages.dr}
                                            alt={utilitiesImages.dr}
                                        />
                                    </div>
                                    <div>
                                        <Article
                                            header="Dr. Millan"
                                            headerProps={{
                                                className:
                                                    'mt-8 pl-6 leading-none text-primary',
                                                base: '1xl',
                                                lg: '2xl',
                                            }}
                                            paragraphProps={{
                                                className:
                                                    'text-blue-4 pl-6  text-justify',
                                                base: 'lg',
                                                lg: '23px',
                                            }}
                                            className="max-w-full"
                                        >
                                            COO
                                        </Article>
                                    </div>
                                </div>
                            </Col>
                            <Col md={8} sm={8} lg={8} xl={8}>
                                <div className="flex flex-row">
                                    <div>
                                        <img
                                            className="w-full h-auto"
                                            src={utilitiesImages.skullman}
                                            alt={utilitiesImages.skullman}
                                        />
                                    </div>
                                    <div>
                                        <Article
                                            header="Skullman"
                                            headerProps={{
                                                className:
                                                    'mt-8 pl-6 leading-none text-primary',
                                                base: '1xl',
                                                lg: '2xl',
                                            }}
                                            paragraphProps={{
                                                className:
                                                    'text-blue-4 pl-6 text-justify',
                                                base: 'lg',
                                                lg: '23px',
                                            }}
                                            className="max-w-full"
                                        >
                                            CTO
                                        </Article>
                                    </div>
                                </div>
                            </Col>
                            <Col md={8} sm={8} lg={8} xl={8}>
                                <div className="flex flex-row">
                                    <div>
                                        <img
                                            className="w-full h-auto"
                                            src={utilitiesImages.alex}
                                            alt={utilitiesImages.alex}
                                        />
                                    </div>
                                    <div>
                                        <Article
                                            header="AlexArt"
                                            headerProps={{
                                                className:
                                                    'mt-8 pl-6 leading-none text-primary',
                                                base: '1xl',
                                                lg: '2xl',
                                            }}
                                            paragraphProps={{
                                                className:
                                                    'text-blue-4 pl-6 text-justify',
                                                base: 'lg',
                                                lg: '23px',
                                            }}
                                            className="max-w-full"
                                        >
                                            Art Director
                                        </Article>
                                    </div>
                                </div>
                            </Col>
                            <Col md={8} sm={8} lg={8} xl={8}>
                                <div className="flex flex-row">
                                    <div>
                                        <img
                                            className="w-full h-auto"
                                            src={utilitiesImages.amelie}
                                            alt={utilitiesImages.amelie}
                                        />
                                    </div>
                                    <div>
                                        <Article
                                            header="Riot Mei"
                                            headerProps={{
                                                className:
                                                    'mt-8 pl-6 leading-none text-primary',
                                                base: '1xl',
                                                lg: '2xl',
                                            }}
                                            paragraphProps={{
                                                className: 'text-blue-4 pl-6 ',
                                                base: 'lg',
                                                lg: '23px',
                                            }}
                                            className="max-w-full"
                                        >
                                            Social Media Manager
                                        </Article>
                                    </div>
                                </div>
                            </Col>
                            <Col md={8} sm={8} lg={8} xl={8}>
                                <div className="flex flex-row">
                                    <div>
                                        <img
                                            className="w-full h-auto"
                                            src={utilitiesImages.kame}
                                            alt={utilitiesImages.kame}
                                        />
                                    </div>
                                    <div>
                                        <Article
                                            header="Kame"
                                            headerProps={{
                                                className:
                                                    'mt-8 pl-6 leading-none text-primary',
                                                base: '1xl',
                                                lg: '2xl',
                                            }}
                                            paragraphProps={{
                                                className:
                                                    'text-blue-4 pl-6 text-justify',
                                                base: 'lg',
                                                lg: '23px',
                                            }}
                                            className="max-w-full"
                                        >
                                            Marketing Director
                                        </Article>
                                    </div>
                                </div>
                            </Col>
                            <Col md={8} sm={8} lg={8} xl={8}>
                                <div className="flex flex-row">
                                    <div>
                                        <img
                                            className="w-full h-auto"
                                            src={utilitiesImages.surtek}
                                            alt={utilitiesImages.surtek}
                                        />
                                    </div>
                                    <div>
                                        <Article
                                            header="Surtek TK"
                                            headerProps={{
                                                className:
                                                    'mt-8 pl-6 leading-none text-primary',
                                                base: '1xl',
                                                lg: '2xl',
                                            }}
                                            paragraphProps={{
                                                className:
                                                    'text-blue-4 pl-6 text-justify',
                                                base: 'lg',
                                                lg: '23px',
                                            }}
                                            className="max-w-full"
                                        >
                                            Strategy
                                        </Article>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="bg-blue-5 pb-20 lg:pb-48">
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
                                        project. Big things happen when the
                                        community is involved in all phases.
                                        Join us to get the news as soon as they
                                        come out and follow us for our latest
                                        announcements.
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
                                        'https://twitter.com/TheWanderersNFT'
                                    )
                                }
                            >
                                <OctagonTwitterSVG width="100%" height="100%" />
                            </Button>
                        </div>
                    </div>
                </div>
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
                                    9,000 unique Wanderers
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
