import React, { Component } from 'react'
import { Layout, Row, Col, Button } from 'antd'
import { FaDiscord, FaTwitter, FaTelegramPlane } from 'react-icons/fa'
import brandImages from '../assets/images/brand'

// import logo from '../assets/images/brand/logo.png'
// import { DiscordIcon } from '../components/CustomIcons'
// import { SiDiscord } from 'react-icons/si'
import GenericCountDown from './../components/CountDowns/GenericCountDown'
// import { ReactSVG } from 'react-svg'
// import shapesImages from '../assets/images/shapes'
import { LineSVG } from '../assets/svg/shapes/index'
import {
    // BookSVG,
    ShadowPersonSVG,
    IslandSVG,
    BookSVG,
    CoinSVG,
} from './../assets/svg/utilities/index'
import utilitiesImages from '../assets/images/utilities'
import Paragraph from '../components/DisplayText/Paragraph'

const { Header, Content } = Layout
// const { Countdown } = Statistic

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30 // Moment is also OK

const section1Texts = {
    paragraph1:
        "Late in the year 2021 a group of scientists experimented with the hadron collider. causing the earth's gravitational force to collapse. The accident sent most existing countries into orbit making them float above a dark cover of clouds covering what we now know as earth.",
    paragraph2:
        "It's been one day since the accident my fellow group of scientists and I are all alive and well, currently floating on a piece of earth in the middle of the air, very close to space I would say based on my knowledge",
    paragraph3:
        'It has been 48 years since the accident. What was once agroup of 120 individuals is now 232 of us. We have created and established a civilization up here after spending years on years trying to reach communication anywhere in this galaxy and even attempted to go down to what we once called home, but constantly failed to do so. Thankfully we have managed to establish food and water resources as well as living structures up here.',
    paragraph4:
        'Generations came and went and after many years of trying to continue to accomplish what Dr Milan and his group of scientists were trying to do which was to either go down and explore or reach communication elsewhere hope was lost and people moved on with their life’s and eventually forgot all about it, not until 520 years later a group of boys found Dr Milan log hidden underneath an old structure that was being demolished.',
}

const section2Texts = {
    paragraph1: 'What is The Wanderers?',
    paragraph2:
        'The wanderers is a private collection ...... Dar mencion de lo que es Wanderers, y mencion de la plataforma de ohana',
    paragraph3:
        ' The Wanderers es una colección única de NFTs con más de 100 personajes únicos ilustrados a mano, los cuales cada uno de ellos te proporcionaran beneficios espedificos dentro de la plataforma Ohana',
}

const section3Texts = {
    paragraph1:
        'Mencion de la moneda de the wanderers con los cuales se genera la compra de los personajes, cada personaje puedes darle mejoras como ser parte de the wanderers',
}
const section4Texts = {
    paragraph1:
        'Mencionar todos los beneficios que tiene cada rango porcentajes de ganancia de ohana',
}

const SegmentCirlce = ({
    title,
    paragraph,
    className,
    paragraphClassName,
    circleClassName,
}) => {
    return (
        <div className={`flex ${className} md:text-base lg:text-lg`}>
            <div style={{ flex: '1 0 11rem', maxWidth: '11rem' }}>
                <div
                    className={`rounded-full h-44 w-44 bg-blue-1 flex items-center justify-center header text-aqua-1 text-center  ${circleClassName} `}
                >
                    {title}
                </div>
            </div>
            <div
                className={`pl-10 flex-1 text-blue-2 flex items-center xl:text-xl${paragraphClassName}`}
            >
                {paragraph}
            </div>
        </div>
    )
}

export default class LandingPage extends Component {
    render() {
        return (
            <Layout className="landing-page">
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
                    <section className="section-gradient -mt-10 pt-10">
                        <div className="section text-center mx-auto pt-5 pb-10 relative">
                            {/* <div className="header text-aqua-1 text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                                History
                            </div> */}
                            <div className="mt-2 lg:mt-6 xl:mt-7 lg:px-20 xl:px-40 mb-10">
                                <Paragraph
                                    content={section1Texts.paragraph1}
                                    md="base"
                                    lg="lg"
                                    xl="xl"
                                />
                            </div>
                            <Row className=" lg:mb-64 xl:mb-84">
                                <Col xs={12} className="pr-20 relative">
                                    <BookSVG
                                        className="absolute left-0 right-0"
                                        style={{
                                            top: -50,
                                            width: '90%',
                                            height: 'auto',
                                        }}
                                    />
                                </Col>
                                <Col xs={12} className="  mt-7 pr-28">
                                    <div className="header text-aqua-1 text-left mb-4  md:text-base lg:text-lg">
                                        Log 1 <br /> Year 1 After Accident
                                        <br /> Dr. Millan
                                    </div>
                                    <Paragraph
                                        content={section1Texts.paragraph2}
                                        className="text-justify"
                                        md="base"
                                        lg="lg"
                                    />
                                </Col>
                            </Row>
                            <Row className=" lg:mb-20 xl:mb-40">
                                <Col
                                    xs={12}
                                    className="text-blue-2 mt-7  pl-28"
                                >
                                    <div className="header text-aqua-1 text-left md:text-base lg:text-lg mb-4">
                                        Log 48
                                        <br /> Year 48 After Accident <br /> Dr.
                                        Milan
                                    </div>
                                    <Paragraph
                                        content={section1Texts.paragraph3}
                                        className="text-justify"
                                        md="base"
                                        lg="lg"
                                    />
                                </Col>
                                <Col xs={12} className="relative ">
                                    <IslandSVG
                                        className="absolute left-0 right-0"
                                        style={{
                                            top: -100,
                                            width: '100%',
                                            height: 'auto',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}></Col>
                                <Col xs={12} className="mt-20 pr-28">
                                    {/* <div className="header text-aqua-1 text-left mb-4">
                                        Log 1 <br /> Year 1 After Accident
                                        <br /> Dr. Millan
                                    </div> */}
                                    <Paragraph
                                        content={section1Texts.paragraph4}
                                        className="text-justify"
                                        md="base"
                                        lg="lg"
                                    />
                                </Col>
                            </Row>
                            <div className="lg:pl-20 lg:pr-20 xl:pl-20 xl:pr-20">
                                <ShadowPersonSVG />
                            </div>
                            <div className="line">
                                <LineSVG width="100%" height="auto" />
                            </div>
                        </div>
                    </section>
                    <section className="pt-10 bg-earth bg-no-repeat bg-cover bg-center">
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
                    </section>
                </Content>
            </Layout>
        )
    }
}
