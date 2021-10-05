import React, { Component } from 'react'
import { Layout, Row, Col, Button } from 'antd'
import { FaDiscord, FaTwitter, FaTelegramPlane } from 'react-icons/fa'
import Countdown from 'react-countdown'
import brandImages from '../assets/images/brand'

// import logo from '../assets/images/brand/logo.png'
// import { DiscordIcon } from '../components/CustomIcons'
// import { SiDiscord } from 'react-icons/si'

const { Header, Content } = Layout
// const { Countdown } = Statistic

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30 // Moment is also OK

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    return (
        <div className="count-numbers flex text-white">
            <div className="flex-1">{days > 9 ? days : `0${days}`}</div>
            <div>:</div>
            <div className="flex-1">{hours > 9 ? hours : `0${hours}`}</div>
            <div>:</div>
            <div className="flex-1">
                {minutes > 9 ? minutes : `0${minutes}`}
            </div>
            <div>:</div>
            <div className="flex-1">
                {seconds > 9 ? seconds : `0${seconds}`}
            </div>
        </div>
    )
}

const texts = {
    paragraph1:
        'Late in the year 2021 a group of scientists ......... causing the earth s gravitational force to collapse. Such malfunction have been prevented, but Dr. Milan Decided to try his own scientific methods. The accident sent most existing countries into orbit making them float above a dark cover of clouds covering what we know as earth',
}

export default class LandingPage extends Component {
    render() {
        return (
            <Layout className="landing-page">
                <Header className="bg-transparent">
                    <Row className="h-full bg-gray-400">
                        <Col xs={20}></Col>
                        <Col xs={4} className="flex justify-end items-center">
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
                    <section className="bg-render bg-no-repeat bg-cover -mt-64px pt-64px h-screen">
                        <div className="section mx-auto ">
                            <div className="pl-56 pr-56 mb-20">
                                <img src={brandImages.logo} />
                            </div>
                            <div className="mb-48">
                                <div className="count-down bg-dark bg-opacity-50 mx-auto px-12 pt-5 pb-4">
                                    <Countdown
                                        date={deadline}
                                        renderer={renderer}
                                    />
                                    <div className="flex text-secondary text-4xl mt-5">
                                        <div className="flex-1">DAYS</div>
                                        <div className="flex-1">HOURS</div>
                                        <div className="flex-1">MINUTES</div>
                                        <div className="flex-1">SECONDS</div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <Button
                                    className="bg-dark bg-opacity-50 h-auto text-primary text-3xl py-2 px-8"
                                    type="primary"
                                >
                                    JOIN OUR DISCORD
                                </Button>
                            </div>
                        </div>
                    </section>
                    <section className="section-gradient -mt-20 pt-20">
                        <div className="section text-center mx-auto">
                            <div className="header text-#7CC4D1 text-4xl mt-5">
                                History
                            </div>
                            <div className="text-#334C8C text-2xl mt-5">
                                <p>{texts.paragraph1}</p>
                            </div>
                        </div>
                    </section>
                </Content>
            </Layout>
        )
    }
}
