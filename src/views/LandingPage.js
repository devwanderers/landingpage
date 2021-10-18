import React, { useState } from 'react'
import { Layout, Row, Col, Button } from 'antd'
import { FaDiscord, FaTwitter, FaTelegramPlane } from 'react-icons/fa'
import Slider from 'react-slick'

import brandImages from '../assets/images/brand'

// import logo from '../assets/images/brand/logo.png'
// import { DiscordIcon } from '../components/CustomIcons'
// import { SiDiscord } from 'react-icons/si'
import GenericCountDown from './../components/CountDowns/GenericCountDown'
import Article from '../components/DisplayText/Article'
import SectionTitle from '../components/Sections/SectionTitle'
import utilitiesImages from '../assets/images/utilities'
import CollectionImage from '../components/DisplayImages/CollectionImage'
import AnimInOutHorizontal from '../components/Animations/AnimInOutHorizontal'
import { useInView } from 'react-intersection-observer'
import AnimateCover from '../components/Animations/AnimateCover'
import { LineWrapper } from './../components/Wrappers/LineWrapper'
import HeaderText from './../components/DisplayText/Header'
import NextArrowControl from '../components/CustomSliderControls/NextArrowControl'
import PrevArrowControl from '../components/CustomSliderControls/PrevArrowControl'
import { RenderMarcoSVG } from '../assets/svg/sections'
import Paragraph from './../components/DisplayText/Paragraph'
import { IslandSVG } from '../assets/svg/utilities'
// import { BackgroundSectionSVG } from '../assets/svg/background'

const { Header, Content } = Layout
// const { Countdown } = Statistic

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30 // Moment is also OK

const landImages = [
    { id: 1, img: utilitiesImages.isla },
    { id: 2, img: utilitiesImages.isla },
    { id: 3, img: utilitiesImages.isla },
    { id: 4, img: utilitiesImages.isla },
]

const CollectionContainer = ({ children }) => (
    <div className="css-generic w-full flex-row justify-center flex-grow space-x-6">
        {children}
    </div>
)
const LandingPage = () => {
    // const [showCollection, setShowCollection] = useState(false)
    const [imageIndex, setImageIndex] = useState(0)
    const collectionConfig = {
        threshold: 0.2,
    }
    const [refSection, showCover] = useInView({
        threshold: 0.1,
    })
    const [refCollection1, showCollection1] = useInView(collectionConfig)
    const [refCollection2, showCollection2] = useInView(collectionConfig)
    const [refCollection3, showCollection3] = useInView(collectionConfig)

    const sliderLandSettings = {
        dots: false,
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrowControl />,
        prevArrow: <PrevArrowControl />,
        beforeChange: (_, next) => setImageIndex(next),
    }

    return (
        <Layout className="landing-page" onScroll={(e) => console.log({ e })}>
            <Header className="bg-transparent z-30">
                <Row className="h-full">
                    <Col xs={20}></Col>
                    <Col
                        xs={24}
                        md={4}
                        className="flex justify-center md:justify-end items-center"
                    >
                        <Button type="link">
                            <FaDiscord
                                className="social-icons"
                                color="#487F8F"
                            />
                        </Button>
                        <Button type="link">
                            <FaTelegramPlane
                                className="social-icons"
                                color="#487F8F"
                            />
                        </Button>
                        <Button type="link">
                            <FaTwitter
                                className="social-icons"
                                color="#487F8F"
                            />
                        </Button>
                    </Col>
                </Row>
            </Header>
            <Content>
                <section className="bg-render bg-no-repeat bg-cover bg-center -mt-64px pb-40 relative">
                    {/* <div className="bottom-gradient"></div> */}
                    <div className="section mx-auto flex flex-col justify-between pt-64px pb-12 mb-20 h-screen">
                        <div className="pt-10 lg:pt-0 lg:pl-56 lg:pr-56">
                            <img
                                className=" w-full h-auto"
                                src={brandImages.logo}
                            />
                        </div>
                        <div className="mb-10 z-20">
                            <div className="count-down bg-dark bg-opacity-50 mx-auto lg:px-12 pt-5 pb-4">
                                <GenericCountDown date={deadline} />
                                <div className="flex text-info text-lg md:text-2xl lg:text-4xl mt-5">
                                    <div className="flex-1">DAYS</div>
                                    <div className="flex-1">HOURS</div>
                                    <div className="flex-1">MINUTES</div>
                                    <div className="flex-1">SECONDS</div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center z-20">
                            <Button
                                className="bg-dark bg-opacity-50 h-auto text-primary text-xl md:text-2xl lg:text-3xl xl:text-4xl py-2 px-8"
                                type="primary"
                            >
                                JOIN OUR DISCORD
                            </Button>
                        </div>
                    </div>
                    <AnimateCover visible={showCover} />
                    <div
                        className="absolute bottom-0 right-0 left-0"
                        // style={{ height: '100px' }}
                    >
                        <RenderMarcoSVG className="" />
                    </div>
                </section>
                <section ref={refSection} className=" bg-blue-5 pt-10 pb-32">
                    <div className="section">
                        <Row>
                            <Col xs={12} className="">
                                <div className="w-full">
                                    <div className="w-full pr-24 ">
                                        <Article
                                            header="8,728"
                                            subHeader="unique Wanderers"
                                            headerProps={{
                                                className:
                                                    'mb-1 leading-none text-primary',
                                                sm: '7xl',
                                            }}
                                            subHeaderProps={{
                                                className:
                                                    'mb-4 font-saira-condensed leading-none text-info font-semibold ',
                                                sm: '5xl',
                                            }}
                                            paragraphProps={{
                                                className:
                                                    'text-blue-4  text-justify',
                                                sm: '2xl',
                                            }}
                                            className="max-w-full"
                                        >
                                            <span>
                                                Lorem ipsum dolor sit amet,
                                                consectetuer adipiscing elit,
                                                sed diam nonummy nibh euismod
                                                tincidunt ut laoreet dolore
                                                magna aliquam erat volutpat. Ut
                                                wisi enim ad minim veniam, quis
                                                nostrud exerci tation
                                                ullamcorper suscipit lobortis
                                                nisl.
                                            </span>
                                            <br />
                                            <br />
                                            <span>
                                                Duis autem vel eum iriure dolor
                                                in hendrerit in vulputate velit
                                                esse molestie consequat, vel
                                                illum dolore eu feugiat nulla
                                                facilisis at vero eros et
                                                accumsan et iusto odio dignissim
                                                qui blandit praesent luptatum
                                                ril delenit augue duis dolore te
                                                feugait nulla facilisi.
                                            </span>
                                        </Article>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} className="bg-red-100">
                                <div className=""></div>
                            </Col>
                        </Row>
                    </div>
                </section>
                <section className=" bg-blue-5 pt-10 pb-32 css-generic flex-row">
                    <SectionTitle>COLLECTION</SectionTitle>
                    <div className="css-generic flex-grow pb-5">
                        <div className="css-generic flex-col w-1025px space-y-4 space ">
                            <div
                                ref={refCollection1}
                                style={{ height: '210px' }}
                                className="css-generic w-full max-w-full"
                            >
                                <AnimInOutHorizontal visible={showCollection1}>
                                    <CollectionContainer>
                                        <CollectionImage
                                            src={utilitiesImages.nft}
                                        />
                                        <CollectionImage
                                            src={utilitiesImages.nft}
                                        />
                                        <CollectionImage
                                            src={utilitiesImages.nft}
                                        />
                                    </CollectionContainer>
                                </AnimInOutHorizontal>
                            </div>
                            <div
                                ref={refCollection2}
                                style={{ height: '210px' }}
                                className="css-generic w-full max-w-full"
                            >
                                <AnimInOutHorizontal
                                    visible={showCollection2}
                                    side="right"
                                >
                                    <CollectionContainer>
                                        <CollectionImage
                                            src={utilitiesImages.nft}
                                        />
                                        <CollectionImage
                                            src={utilitiesImages.nft}
                                        />
                                        <CollectionImage
                                            src={utilitiesImages.nft}
                                        />
                                        <CollectionImage
                                            src={utilitiesImages.nft}
                                        />
                                    </CollectionContainer>
                                </AnimInOutHorizontal>
                            </div>
                            <div
                                ref={refCollection3}
                                style={{ height: '210px' }}
                                className="css-generic w-full max-w-full "
                            >
                                <AnimInOutHorizontal visible={showCollection3}>
                                    <CollectionContainer>
                                        <CollectionImage
                                            src={utilitiesImages.nft}
                                        />
                                        <CollectionImage
                                            src={utilitiesImages.nft}
                                        />
                                        <CollectionImage
                                            src={utilitiesImages.nft}
                                        />
                                    </CollectionContainer>
                                </AnimInOutHorizontal>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-blue-5 pt-10 pb-20">
                    <div className="section">
                        <Row>
                            <Col sm={12} className="flex justify-center ">
                                <div className="css-generic w-8/12 ">
                                    <IslandSVG />
                                </div>
                            </Col>
                            <Col sm={12}>
                                <div className="pl-5">
                                    <HeaderText
                                        base="5xl"
                                        sm="8xl"
                                        className="text-primary leading-tight tracking-widest"
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
                                                'mb-4 font-saira-condensed leading-none text-info font-semibold',
                                            sm: '2-75rem',
                                        }}
                                        paragraphProps={{
                                            className:
                                                'mb-8 text-blue-4 text-justify',
                                            sm: 'xl',
                                        }}
                                    >
                                        Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit, sed diam nonummy nibh
                                        euismod tincidunt ut laoreet dolore
                                        magna aliquam erat volutpat. Ut wisi
                                        enim ad minim veniam, quis nostrud
                                        exerci tation ullamcorper suscipit
                                        lobortis nisl.
                                    </Article>
                                    <Article
                                        header="Level up"
                                        headerProps={{
                                            className:
                                                'mb-4 font-saira-condensed leading-none text-info font-semibold',
                                            sm: '2-75rem',
                                        }}
                                        paragraphProps={{
                                            className:
                                                'mb-10 text-blue-4 text-justify',
                                            sm: 'xl',
                                        }}
                                    >
                                        Duis autem vel eum iriure dolor in
                                        hendrerit in vulputate velit esse
                                        molestie consequat, vel illum dolore eu
                                        feugiat nulla facilisis at vero eros et
                                        accumsan et iusto odio dignissim qui
                                        blandit praesent luptatum ril delenit
                                        augue duis dolore te feugait nulla
                                        facilisi.
                                    </Article>
                                </LineWrapper>
                            </Col>
                        </Row>
                    </div>
                </section>
                <section className="bg-blue-5 pt-10 pb-44 relative">
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
                                base="4xl"
                            >
                                LAND
                            </HeaderText>
                            <HeaderText
                                className="leading-none text-info font-saira-condensed font-semibold"
                                base="3xl"
                            >
                                35% Hotels
                            </HeaderText>
                        </div>
                    </div>
                </section>
                <section className="bg-blue-5 pt-10 pb-64 relative">
                    {/* <div className="absolute bottom-0 left-0 right-0 top-0">
                        <BackgroundSectionSVG className="object-cover" />
                    </div> */}
                    <div className="section">
                        <div className="css-generic flex-grow ">
                            <div className="css-generic items-center">
                                <HeaderText
                                    base="5xl"
                                    sm="8xl"
                                    className="text-primary leading-none tracking-widest"
                                >
                                    WTT
                                </HeaderText>
                            </div>
                            <div className="css-generic"></div>
                            <div className="css-generic flex-row flex-grow max-h-full ">
                                <div className="css-generic w-6/12"></div>
                                <div className="css-generic   w-6/12 pl-8">
                                    <HeaderText
                                        base="5xl"
                                        className="text-info leading-none font-saira-condensed font-semibold"
                                    >
                                        Token
                                    </HeaderText>
                                </div>
                            </div>
                        </div>
                        <div className="css-generic mb-20">
                            <Row>
                                <Col sm={12}>
                                    <LineWrapper
                                        side="right"
                                        decorationBottom="0.7rem"
                                    >
                                        <Paragraph
                                            className=" text-blue-4 text-justify"
                                            sm="xl"
                                        >
                                            Lorem ipsum dolor sit amet,
                                            consectetuer adipiscing elit, sed
                                            diam nonummy nibh euismod tincidunt
                                            ut laoreet dolore magna aliquam erat
                                            volutpat. Ut wisi enim ad minim
                                            veniam, quis nostrud exerci tation
                                            ullamcorper suscipit lobortis nisl.
                                        </Paragraph>
                                    </LineWrapper>
                                </Col>
                                <Col sm={12} className="flex pl-5">
                                    <div
                                        className="bg-yellow-100 flex-1"
                                        style={{ height: '50vh' }}
                                    ></div>
                                </Col>
                            </Row>
                        </div>
                        <div className="css-generic">
                            <HeaderText
                                base="5xl"
                                sm="8xl"
                                className="text-primary leading-none tracking-widest mb-28"
                            >
                                Road Map
                            </HeaderText>
                            <div className="css-generic mx-auto w-8/12">
                                <Article
                                    header="1. Road Map"
                                    subHeader="December 12nd"
                                    headerProps={{
                                        className: 'leading-tight text-info',
                                        base: '5xl',
                                    }}
                                    subHeaderProps={{
                                        className:
                                            'leading-tight text-info font-saira-condensed font-semibold mb-4',
                                        base: '3xl',
                                    }}
                                    paragraphProps={{
                                        className:
                                            'mb-8 text-blue-4  text-justify',
                                        sm: 'xl',
                                    }}
                                >
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut laoreet dolore magna
                                    aliquam erat volutpat. Ut wisi enim ad minim
                                    veniam, quis nostrud exerci tation
                                    ullamcorper suscipit lobortis nisl. Lorem
                                    ipsum dolor sit amet, consectetuer
                                    adipiscing elit, sed diam nonummy nibh
                                    euismod tincidunt ut laoreet dolore magna
                                    aliquam erat volutpat. Ut wisi enim ad minim
                                    veniam, quis nostrud exerci tation
                                    ullamcorper suscipit lobortis nisl.
                                </Article>
                            </div>

                            <div
                                className="css-generic max-w-full bg-red-50"
                                style={{ height: '25vh' }}
                            ></div>
                        </div>
                    </div>
                </section>
            </Content>
        </Layout>
    )
}

export default LandingPage
