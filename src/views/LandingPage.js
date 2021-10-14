import React, { useState, useEffect } from 'react'
import { Layout, Row, Col, Button } from 'antd'
import { FaDiscord, FaTwitter, FaTelegramPlane } from 'react-icons/fa'

import brandImages from '../assets/images/brand'

// import logo from '../assets/images/brand/logo.png'
// import { DiscordIcon } from '../components/CustomIcons'
// import { SiDiscord } from 'react-icons/si'
import GenericCountDown from './../components/CountDowns/GenericCountDown'
import Article from '../components/DisplayText/Article'
import SectionTitle from '../components/Sections/SectionTitle'
import utilitiesImages from '../assets/images/utilities'
import CollectionImage from '../components/DisplayImages/CollectionImage'
// import ReactVisibilitySensor from 'react-visibility-sensor'
import AnimInOutHorizontal from '../components/Animations/AnimInOutHorizontal'
// import { ReactSVG } from 'react-svg'
// import shapesImages from '../assets/images/shapes'

// import { CoinSVG } from './../assets/svg/utilities/index'
// import utilitiesImages from '../assets/images/utilities'
// import Paragraph from '../components/DisplayText/Paragraph'
import useScrollOffsetY from './../customHooks/useScrollOffsetY'
import useElementProperties from '../customHooks/useElementPropierties'

const { Header, Content } = Layout
// const { Countdown } = Statistic

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30 // Moment is also OK

// const section2Texts = {
//     paragraph1: 'What is The Wanderers?',
//     paragraph2:
//         'The wanderers is a private collection ...... Dar mencion de lo que es Wanderers, y mencion de la plataforma de ohana',
//     paragraph3:
//         ' The Wanderers es una colección única de NFTs con más de 100 personajes únicos ilustrados a mano, los cuales cada uno de ellos te proporcionaran beneficios espedificos dentro de la plataforma Ohana',
// }

// const section3Texts = {
//     paragraph1:
//         'Mencion de la moneda de the wanderers con los cuales se genera la compra de los personajes, cada personaje puedes darle mejoras como ser parte de the wanderers',
// }
// const section4Texts = {
//     paragraph1:
//         'Mencionar todos los beneficios que tiene cada rango porcentajes de ganancia de ohana',
// }

// const SegmentCirlce = ({
//     title,
//     paragraph,
//     className,
//     paragraphClassName,
//     circleClassName,
// }) => {
//     return (
//         <div className={`flex ${className} md:text-base lg:text-lg`}>
//             <div style={{ flex: '1 0 11rem', maxWidth: '11rem' }}>
//                 <div
//                     className={`rounded-full h-44 w-44 bg-blue-1 flex items-center justify-center header text-aqua-1 text-center  ${circleClassName} `}
//                 >
//                     {title}
//                 </div>
//             </div>
//             <div
//                 className={`pl-10 flex-1 text-blue-2 flex items-center xl:text-xl${paragraphClassName}`}
//             >
//                 {paragraph}
//             </div>
//         </div>
//     )
// }

const CollectionContainer = ({ children }) => (
    <div className="css-generic w-full flex-row justify-center flex-grow space-x-6">
        {children}
    </div>
)
const LandingPage = () => {
    const [showCollection, setShowCollection] = useState(false)
    const { offsetY } = useScrollOffsetY()
    const collectionProperties = useElementProperties('collection')
    const handleShowCollection = () => {
        setShowCollection(true)
    }
    useEffect(() => {
        handleShowCollection()
        return () => {}
    }, [showCollection])

    console.log({ collectionProperties })
    console.log(
        collectionProperties
            ? collectionProperties?.top + document.body.scrollTop
            : null
    )
    console.log({ offsetY })

    return (
        <Layout className="landing-page" onScroll={(e) => console.log({ e })}>
            <Header className="bg-transparent">
                <Row className="h-full bg-gray-400">
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
                <section className="bg-render bg-no-repeat bg-cover bg-center -mt-64px pt-64px h-screen">
                    {/* <div className="bottom-gradient"></div> */}
                    <div className="section mx-auto flex flex-col justify-between h-full pb-8">
                        <div className="pt-10 lg:pt-0 lg:pl-56 lg:pr-56">
                            <img
                                className=" w-full h-auto"
                                src={brandImages.logo}
                            />
                        </div>
                        <div className="mb-10">
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
                        <div className="text-center">
                            <Button
                                className="bg-dark bg-opacity-50 h-auto text-primary text-xl md:text-2xl lg:text-3xl xl:text-4xl py-2 px-8"
                                type="primary"
                            >
                                JOIN OUR DISCORD
                            </Button>
                        </div>
                    </div>
                </section>
                <section className=" bg-blue-3 pt-10 pb-64">
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
                                                    'mb-4 font-saira-condensed leading-none text-info font-semibold',
                                                sm: '5xl',
                                            }}
                                            paragraphProps={{
                                                // className: '',
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
                                asdasddsa
                            </Col>
                        </Row>
                    </div>
                </section>
                <section className=" bg-blue-3 pt-10 pb-64 css-generic flex-row">
                    <SectionTitle>COLLECTION</SectionTitle>
                    <div className="css-generic flex-grow pb-5">
                        <div
                            id="collection"
                            className="css-generic flex-col w-1025px space-y-4 space "
                        >
                            <div
                                style={{ height: '210px' }}
                                className="css-generic w-full max-w-full"
                            >
                                <AnimInOutHorizontal visible={showCollection}>
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
                                style={{ height: '210px' }}
                                className="css-generic w-full max-w-full"
                            >
                                <AnimInOutHorizontal
                                    visible={showCollection}
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
                                style={{ height: '210px' }}
                                className="css-generic w-full max-w-full"
                            >
                                <AnimInOutHorizontal visible={showCollection}>
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
                <section className="h-screen bg-red-100">as</section>
                {/* <section className="pt-10 bg-earth bg-no-repeat bg-cover bg-center">
                        <div className="section mx-auto text-center pb-40 lg:pb-64 xl:pb-72">
                            <div className="header text-aqua-1 text-2xl md:text-3xl lg:text-2xl xl:text-2rem mx-auto mb-10">
                                Welcome to <br /> The wanders
                            </div>
                            <Paragraph
                                content={section2Texts.paragraph1}
                                className="mb-5"
                                lg="xl"
                                xl="2xl"
                            />
                            <Paragraph
                                content={section2Texts.paragraph2}
                                className="mb-5"
                                lg="xl"
                                xl="2xl"
                            />
                            <Paragraph
                                content={section2Texts.paragraph3}
                                lg="xl"
                                xl="2xl"
                            />
                        </div>
                    </section>
                    <section className="section-gradient2 pt-10 pb-20">
                        <div className="section mx-auto mt-10">
                            <Row className="mb-20">
                                <Col xs={12}>
                                    <div className="header text-aqua-1 xl:text-2xl mb-2">
                                        How it works
                                    </div>
                                    <p className="text-blue-2 xl:text-xl pl-8 pr-24">
                                        {section3Texts.paragraph1}
                                    </p>
                                </Col>
                                <Col xs={12}>
                                    <CoinSVG
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <div className="lg:pl-20 lg:pr-20 mb-52">
                                <img
                                    src={utilitiesImages.card}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                />
                            </div>
                            <Row className="lg:pl-20 lg:pr-20">
                                <Col xs={12}>
                                    <SegmentCirlce
                                        className="mb-10"
                                        title="Marcos Rango"
                                        paragraph="Rango"
                                    />
                                    <SegmentCirlce
                                        className="mb-10 xl:ml-16"
                                        title="Marcos Rango"
                                        paragraph="Rango"
                                    />
                                    <SegmentCirlce
                                        className="mb-10 xl:ml-32"
                                        title="Marcos Rango"
                                        paragraph="Rango"
                                    />
                                    <SegmentCirlce
                                        className="xl:ml-48"
                                        title="Marcos Rango"
                                        paragraph="Rango"
                                    />
                                </Col>
                                <Col xs={12} className="text-right">
                                    <div className="header text-aqua-1 xl:text-2xl mb-2">
                                        Benefits
                                    </div>

                                    <Paragraph
                                        className="pl-20"
                                        content={section4Texts.paragraph1}
                                        lg="xl"
                                    />
                                </Col>
                            </Row>
                        </div>
                    </section> */}
            </Content>
        </Layout>
    )
}

export default LandingPage
