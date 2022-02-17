import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Row, Col } from 'antd'
import { Element } from 'react-scroll'
import utilitiesImages from '../../assets/images/utilities'
import HeaderText from '../../components/DisplayText/Header'
import Paragraph from '../../components/DisplayText/Paragraph'
import Article from './../../components/DisplayText/Article'
import AnimateTransition from './../../components/Animations/AnimateTransition'

const teams = [
    {
        image: utilitiesImages.angel,
        name: 'Luis S.',
        subtitle: 'Team Lead',
        description:
            "Developer and blockchain engineer who is passionate about constant learning, new technologies, best practices, and also knowledge transfer. He's fully compromised with the project and the team.",
    },
    {
        image: utilitiesImages.tina,
        name: 'Tina',
        subtitle: 'Project Manager',
        description:
            'Creative social media strategist with a passion for building communities and uplifting people to their fullest potential. She has over 10 years of experience in the financial services sector and is part one of a two woman team overseeing Nomadzland NFT.',
    },
    {
        image: utilitiesImages.kizzy,
        name: 'Kizzy',
        subtitle: 'Project Manager',
        description:
            'Full Time investor in Crypto, DeFi and NFTs with 10+ years in financial services and social media marketing. My goal is and always will be to build communities with the intent for everyone to succeed in all they strive to accomplish. Honored to be one of two women driving the boat to bring NomadzLand NFT to its full potential.',
    },
    {
        image: utilitiesImages.skullman,
        name: 'Brandon S.',
        subtitle: 'Dev',
        description:
            '8+ years in system engineering , lifelong gamer, methodical and creative, he is a commited person that doesnt hesitate on learning more about and going above and beyond. Extraordinary skills in software development.',
    },
    {
        image: utilitiesImages.kame,
        name: 'Kame',
        subtitle: 'Principal Designer',
        description:
            'Fearless designer with a great sense of humor. 6+ years of experience endorse her talent and dedication. She is characterized for being a very creative and daring person when it comes to design. Not to mention her love for cats',
    },

    {
        image: utilitiesImages.amelie,
        name: 'Riot Mei',
        subtitle: 'Head Mod',
        description:
            'Passionate in creating and building communities, creative in all kinds of circumstances and with an optimistic social vision.',
    },
    // {
    //     image: utilitiesImages.surtek,
    //     name: 'Surtek TK',
    //     subtitle: 'Mod',
    //     description:
    //         'Always looking for the good side, she is committed to her work, always attentive to the needs of the community and actively participates in the conversations.,',
    // },
]

const TeamProfile = ({ image, name, subtitle, description }) => {
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
                        {subtitle}
                    </div>
                </div>
            </div>
            <div className="w-full  pt-2">
                <p className="text-blue-4 text-justify text-lg">
                    {description}
                </p>
            </div>
        </div>
    )
}

const Teams = () => {
    const collectionConfig = {
        threshold: 1,
        triggerOnce: true,
    }
    const [refTeam, teamInView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    })

    const [titleRef, titleInView] = useInView(collectionConfig)
    const [subTitleRef, subTitleInView] = useInView(collectionConfig)

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
            <div className="max-w-1400px mx-auto pb-6 px-5 md:px-10 lg:px-14">
                <Row className="mb-12 lg:mb-16 xs:mb-2">
                    <Col xs={24} lg={7} className="text-center lg:text-left">
                        <div ref={titleRef} className="overflow-hidden">
                            <AnimateTransition visible={titleInView}>
                                <HeaderText
                                    base="4xl"
                                    lg="89px"
                                    className="text-primary leading-none tracking-widest"
                                >
                                    Meet
                                </HeaderText>
                            </AnimateTransition>
                        </div>
                        <div ref={subTitleRef} className="overflow-hidden">
                            <AnimateTransition
                                visible={subTitleInView}
                                transitionFrom="right"
                            >
                                <HeaderText
                                    base="2xl"
                                    lg="53px"
                                    className="text-info font-semibold leading-none font-saira-condensed lg:relative lg:-right-32"
                                >
                                    The team
                                </HeaderText>
                            </AnimateTransition>
                        </div>
                    </Col>
                    <Col xs={24} lg={17} className="pt-4 lg:pt-12">
                        <Paragraph
                            base="lg"
                            lg="23px"
                            className="text-blue-4 lg:pl-44 text-justify"
                        ></Paragraph>
                    </Col>
                </Row>
                <div className="md:w-full mx-auto ">
                    <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-10 pb-16 md:pb-12">
                        <div className="flex-1 flex flex-col items-center ">
                            <div className="h-24 w-24 md:h-32 md:w-32 mb-2">
                                <img
                                    className="w-full h-auto"
                                    src={utilitiesImages.xavier}
                                    alt={utilitiesImages.xavier}
                                />
                            </div>
                            <Article
                                header={'Xavier G.'}
                                subHeader="Founder"
                                headerProps={{
                                    className:
                                        'leading-tight text-info text-center mb-1',
                                }}
                                subHeaderProps={{
                                    className: 'text-blue-4 text-center mb-2',
                                    base: 'lg',
                                    lg: '23px',
                                }}
                                paragraphProps={{
                                    className: 'text-blue-4  text-justify',
                                    base: 'lg',
                                    lg: '23px',
                                }}
                            >
                                We are motivated to make this work because we
                                want to show the community that NFTS aren’t only
                                digital art with high values, we want to show
                                the power behind them and what better way to do
                                it than by adding real utility to our project
                                through our partners real life business which
                                gives people the opportunity to generate passive
                                income and lots of benefits.
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
                                header={'Alex S.'}
                                subHeader="Artist"
                                headerProps={{
                                    className:
                                        'leading-tight text-info text-center mb-1',
                                }}
                                subHeaderProps={{
                                    className: 'text-blue-4 text-center mb-2',
                                    base: 'lg',
                                    lg: '23px',
                                }}
                                paragraphProps={{
                                    className: 'text-blue-4  text-justify',
                                    base: 'lg',
                                    lg: '23px',
                                }}
                            >
                                One day Xavier contacted me while I was working
                                as a free lancer and he told me about the
                                project because he liked the art I’ve previously
                                created. I fell in love with the idea and the
                                concept of the characters as well as the
                                opportunity to show my art through this amazing
                                project
                            </Article>
                        </div>
                    </div>
                </div>
                <div className=" overflow-hidden">
                    <motion.div
                        ref={refTeam}
                        initial="hidden"
                        className="grid grid-cols-2 lg:grid-cols-3 gap-5"
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
                                    subtitle={t.subtitle}
                                    description={t.description}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </Element>
    )
}

export default Teams
