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
import { BookSVG } from './../assets/svg/utilities/index'

const { Header, Content } = Layout
// const { Countdown } = Statistic

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30 // Moment is also OK

const texts = {
    paragraph1:
        'Late in the year 2021 a group of scientists ......... causing the earth s gravitational force to collapse. Such malfunction have been prevented, but Dr. Milan Decided to try his own scientific methods. The accident sent most existing countries into orbit making them float above a dark cover of clouds covering what we know as earth.',
    paragraph2:
        "It's been one day since the accident my fellow group of scientists and I are all alive and well, currently floating on a piece of earth in the middle of the air, very close to space I would say based on my knowledge",
    paragraph3:
        'It has been 48 years since the accident. What was once agroup of 120 individuals is now 232 of us. We have created and established a civilization up here after spending years on years trying to reach communication anywhere in this galaxy and even attempted to go down to what we once called home, but constantly failed to do so. Thankfully we have managed to establish food and water resources as well as living structures up here.',
    paragraph4:
        'Generations came and went and after many years of trying to continue to accomplish what Dr Milan and his group of scientists were trying to do which was to either go down and explore or reach communication elsewhere hope was lost and people moved on with their life’s and eventually forgot all about it, not until 520 years later a group of boys found Dr Milan log hidden underneath an old structure that was being demolished.',
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
                        <div className="section text-center mx-auto pt-5 pb-40 relative">
                            <div className="header text-aqua-1 text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                                History
                            </div>
                            <div className="text-blue-1 md:text-base lg:text-lg xl:text-xl mt-2 lg:mt-6 xl:mt-7 px-3 xl:px-20 mb-10">
                                <p>{texts.paragraph1}</p>
                            </div>
                            <Row className=" mb-40">
                                <Col xs={12} className="pr-20">
                                    <BookSVG
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                        }}
                                    />
                                </Col>
                                <Col
                                    xs={12}
                                    className=" text-blue-1 text-lg mt-7 pr-28"
                                >
                                    <div className="header text-aqua-1 text-left mb-4">
                                        Log 1 <br /> Year 1 After Accident
                                        <br /> Dr. Millan
                                    </div>
                                    <p className="text-justify">
                                        {texts.paragraph2}
                                    </p>
                                </Col>
                            </Row>
                            <Row className=" mb-40">
                                <Col
                                    xs={12}
                                    className="text-blue-1  text-lg mt-7  pl-28"
                                >
                                    <div className="header text-aqua-1 text-left mb-4">
                                        Log 1 <br /> Year 1 After Accident
                                        <br /> Dr. Millan
                                    </div>
                                    <p className="text-justify">
                                        {texts.paragraph3}
                                    </p>
                                </Col>
                                <Col xs={12}></Col>
                            </Row>
                            <Row>
                                <Col xs={12}></Col>
                                <Col
                                    xs={12}
                                    className="text-blue-1  text-lg mt-7  pr-28"
                                >
                                    <div className="header text-aqua-1 text-left mb-4">
                                        Log 1 <br /> Year 1 After Accident
                                        <br /> Dr. Millan
                                    </div>
                                    <p className="text-justify">
                                        {texts.paragraph2}
                                    </p>
                                </Col>
                            </Row>
                            <div
                                // className="bg-yellow-500"
                                style={{
                                    right: 'calc(50% - 120px)',
                                    top: '280px',
                                    position: 'absolute',
                                    height: 'auto',
                                    width: '60%',
                                }}
                            >
                                <LineSVG />
                            </div>
                        </div>
                    </section>
                </Content>
            </Layout>
        )
    }
}
