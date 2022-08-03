import React from 'react'
import HeaderText from './../../components/DisplayText/Header'
import { motion } from 'framer-motion'
import Paragraph from './../../components/DisplayText/Paragraph'

const faqs = [
    {
        id: '1',
        title: 'How to buy my NFT?',
        detail: (
            <React.Fragment>
                <span>
                    {
                        'Use either Google Chrome or Brave to visit this page. You will need to have Metamask installed and ETH on your wallet. Select as many Nomadz as you want, click the Mint button and approve the transaction. You can see an extended video tutorial '
                    }
                </span>
                {/* <a
                    href="https://www.youtube.com/watch?v=dbDxSyBWWYU&t=1s&ab_channel=TheWanderersMetaverse"
                    className="underline"
                >
                    <strong>here.</strong>
                </a> */}
            </React.Fragment>
        ),
    },
    {
        id: '2',
        title: 'Who are Nomadzlands NFT?',
        detail: (
            <span>
                The adventure began when a small group of adventurers called
                Nomadz decided to reinitiate an investigation about the earth’s
                gravitational catastrophe that happened hundreds of years ago.
                These Nomadz went off to investigate if there were any remaining
                civilizations or lands after the catastrophe.
            </span>
        ),
    },
    {
        id: '3',
        title: 'What is a price?',
        detail: (
            <React.Fragment>
                <span>
                    The price of the genesis collection is 0.0555 ETH. The price
                    of the next {"season's"} collections will be announced soon,
                    but {"don't"} worry we will keep it lower.
                </span>
                <br />
            </React.Fragment>
        ),
    },
    {
        id: '4',
        title: 'How to participate in the presale event?',
        detail: (
            <span>
                All the basis to participate in the pre-sale event will be
                announced in our social media, if you are a milestone follower
                you have more chances to participate.
            </span>
        ),
    },
]

const Faq = ({ visible }) => {
    const container = {
        hidden: {
            opacity: 0,
            height: 0,
            transition: {
                when: 'afterChildren',
            },
        },
        show: {
            opacity: 1,
            height: 'auto',
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.15,
                delayChildren: 0,
                duration: 0.1,
            },
        },
    }

    const faqItem = {
        hidden: {
            opacity: 0,
            x: -200,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                duration: 0.4,
            },
        },
    }
    return (
        <motion.div
            initial="hidden"
            animate={visible ? 'show' : 'hidden'}
            variants={container}
            className="overflow-hidden"
        >
            <div className=" px-10 lg:px-20 pt-10 overflow-hidden">
                {faqs.map((faq) => {
                    return (
                        <motion.div key={`faq-${faq.id}`} variants={faqItem}>
                            <div className="flex flex-col max-w-full">
                                <HeaderText
                                    className="mb-1 leading-none text-info"
                                    base="2xl"
                                    lg="3xl"
                                >
                                    {faq.title}
                                </HeaderText>
                                <Paragraph
                                    base="lg"
                                    lg="23px"
                                    className="text-blue-4 text-justify"
                                >
                                    {faq.detail}
                                </Paragraph>
                            </div>
                            <br />
                        </motion.div>
                    )
                })}
            </div>
        </motion.div>
    )
}

export default Faq
