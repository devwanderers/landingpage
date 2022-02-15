import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Row, Col } from 'antd'
import { Element } from 'react-scroll'
import utilitiesImages from '../../assets/images/utilities'
import HeaderText from '../../components/DisplayText/Header'
import Paragraph from '../../components/DisplayText/Paragraph'
import Article from './../../components/DisplayText/Article'

const teams = [
    { image: utilitiesImages.dr, name: 'Dr. Millan', description: 'COO' },
    { image: utilitiesImages.skullman, name: 'Brandon S.', description: 'CTO' },
    {
        image: utilitiesImages.amelie,
        name: 'Riot Mei',
        description: 'Social Media Manager',
    },
    {
        image: utilitiesImages.kame,
        name: 'Kame',
        description: 'Marketing Director',
    },
    {
        image: utilitiesImages.surtek,
        name: 'Surtek TK',
        description: 'Strategy',
    },
    {
        image: utilitiesImages.surtek,
        name: 'Tina',
        description: 'Project Manager',
    },
    // {
    //     image: utilitiesImages.surtek,
    //     name: 'Kizzys',
    //     description: 'Project Manager',
    // },
]

const TeamProfile = ({ image, name, description }) => {
    return (
        <div className="flex flex-col items-center overflow-hidden">
            <div className="h-16 w-16 md:h-24 md:w-24">
                <img className="w-full h-auto" src={image} alt={image} />
            </div>
            <div className="mt-3">
                <div className="flex flex-col">
                    <div className="leading-none text-primary text-xl lg:text-2xl text-center">
                        {name}
                    </div>
                    <div className="text-blue-4 text-center text-lg lg:text-23px">
                        {description}
                    </div>
                </div>
            </div>
            <div className="w-full px-2 ">
                <p className="text-blue-4 text-justify text-lg">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Minus voluptates nostrum quia!
                </p>
            </div>
        </div>
    )
}

const Teams = () => {
    const [refTeam, teamInView] = useInView({
        threshold: 1,
        triggerOnce: true,
    })
    const controls = useAnimation()

    const teamsVariant = {
        hidden: {
            opacity: 0,
            transition: {
                when: 'afterChildren',
            },
        },
        show: {
            opacity: 1,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1,
                delayChildren: 0,
                duration: 0.1,
            },
        },
    }

    const teamItem = {
        hidden: {
            opacity: 0,
            x: -100,
            y: -100,
        },
        show: { opacity: 1, y: 0, x: 0 },
    }

    useEffect(() => {
        if (teamInView) controls.start('show')
        else controls.start('hidden')
    }, [controls, teamInView])

    return (
        <Element
            name="team"
            className="bg-blue-5 bg-floor bg-no-repeat bg-cover pt-12 pb-24 lg:pt-10 lg:pb-64 relative"
            style={{
                backgroundPosition: '0% 100%',
            }}
        >
            <div className="section">
                <Row className="mb-12 lg:mb-16 xs:mb-2">
                    <Col xs={24} lg={7} className="text-center lg:text-left">
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
                <div className="w-10/12 md:w-full mx-auto ">
                    <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-10 pb-16 md:pb-12">
                        <div className="flex-1 flex flex-col items-center ">
                            <div className="h-24 w-24 md:h-32 md:w-32 mb-2">
                                <img
                                    className="w-full h-auto"
                                    src={utilitiesImages.alex}
                                    alt={utilitiesImages.alex}
                                />
                            </div>
                            <Article
                                header={'AlexArt'}
                                headerProps={{
                                    className:
                                        'leading-tight text-info text-center mb-2',
                                    base: '3xl',
                                    lg: '40px',
                                }}
                                paragraphProps={{
                                    className: 'text-blue-4  text-justify',
                                    base: 'lg',
                                    lg: '23px',
                                }}
                            >
                                {' '}
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Ipsa consequatur ducimus ullam
                                eius! Non quibusdam aliquid vero, asperiores
                                dicta illo?{' '}
                            </Article>
                        </div>
                        <div className="flex-1 flex flex-col items-center">
                            <div className="h-24 w-24 md:h-32 md:w-32 mb-2">
                                <img
                                    className="w-full h-auto"
                                    src={utilitiesImages.alex}
                                    alt={utilitiesImages.alex}
                                />
                            </div>
                            <Article
                                header={'AlexArt'}
                                headerProps={{
                                    className:
                                        'leading-tight text-info text-center mb-2',
                                    base: '3xl',
                                    lg: '40px',
                                }}
                                paragraphProps={{
                                    className: 'text-blue-4  text-justify',
                                    base: 'lg',
                                    lg: '23px',
                                }}
                            >
                                {' '}
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Ipsa consequatur ducimus ullam
                                eius! Non quibusdam aliquid vero, asperiores
                                dicta illo?{' '}
                            </Article>
                        </div>
                    </div>
                </div>
                <motion.div
                    ref={refTeam}
                    initial="hidden"
                    className="grid grid-cols-2 md:grid-cols-3 gap-5"
                    variants={teamsVariant}
                    animate={controls}
                >
                    {teams.map((t) => (
                        <motion.div
                            className=" justify-self-auto "
                            variants={teamItem}
                            key={`team-${t.name}`}
                        >
                            <TeamProfile
                                image={t.image}
                                name={t.name}
                                description={t.description}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </Element>
    )
}

export default Teams
