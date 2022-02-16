import React from 'react'
import { Element } from 'react-scroll'
import HeaderText from './../../components/DisplayText/Header'
import { Row, Col } from 'antd'
import { LineWrapper } from './../../components/Wrappers/LineWrapper'
import Paragraph from './../../components/DisplayText/Paragraph'
import utilitiesImages from '../../assets/images/utilities'
import AnimateTransition from './../../components/Animations/AnimateTransition'
import { useInView } from 'react-intersection-observer'

const Token = () => {
    const collectionConfig = {
        threshold: 0.7,
        triggerOnce: true,
    }
    const [titleRef, titleInView] = useInView(collectionConfig)
    const [subTitleRef, subTitleInView] = useInView(collectionConfig)
    const [paragraphRef, paragraphInView] = useInView(collectionConfig)
    const [tokenRef, tokenInView] = useInView(collectionConfig)

    return (
        <Element
            name="token"
            className="max-w-1100px mx-auto px-6 md:px-10 lg:px-14"
        >
            <div className="css-generic flex-grow ">
                <div ref={titleRef} className="css-generic items-center">
                    <AnimateTransition visible={titleInView}>
                        <HeaderText
                            base="4xl"
                            lg="89px"
                            className="text-primary leading-none tracking-widest"
                        >
                            NLD
                        </HeaderText>
                    </AnimateTransition>
                </div>
                <div className="css-generic"></div>
                <div className="css-generic flex-row flex-grow max-h-full ">
                    <div className="css-generic hidden lg:flex flex-1"></div>
                    <div
                        ref={subTitleRef}
                        className="css-generic flex-1  text-center lg:text-left lg:pl-8"
                    >
                        <AnimateTransition
                            visible={subTitleInView}
                            transitionFrom="right"
                        >
                            <HeaderText
                                base="2xl"
                                lg="53px"
                                className="text-info leading-none font-saira-condensed font-semibold"
                            >
                                Token
                            </HeaderText>
                        </AnimateTransition>
                    </div>
                </div>
            </div>
            <div className="css-generic mb-8 lg:mb-20">
                <Row>
                    <Col xs={24} lg={12}>
                        <LineWrapper side="right" decorationBottom="0.7rem">
                            <div ref={paragraphRef}>
                                <AnimateTransition
                                    visible={paragraphInView}
                                    transitionFrom="bottom"
                                >
                                    <Paragraph
                                        className=" text-blue-4 text-justify"
                                        base="lg"
                                        lg="23px"
                                    >
                                        {
                                            'We are creating an ecosystem where your NFTs are more than Art. We believe in our community and was to give you a piece back for the trust you put into this project.'
                                        }
                                        <br />
                                        <br />
                                        The token rewards you will receive in
                                        the ecosystem has unique features you
                                        will love!! The Nomadz Travel Token is
                                        the native currency in the ecosystem, it
                                        is based on ERC-20 making it highly
                                        diverse and easy to use. Token listening
                                        is coming soon!
                                    </Paragraph>
                                </AnimateTransition>
                            </div>
                        </LineWrapper>
                    </Col>
                    <Col
                        xs={24}
                        lg={12}
                        className="flex justify-center lg:pl-5"
                    >
                        <div ref={tokenRef} className="w-6/12 lg:w-full">
                            <AnimateTransition
                                visible={tokenInView}
                                transitionFrom="right"
                            >
                                <img
                                    className="w-full h-auto"
                                    src={utilitiesImages.wttCoin}
                                    alt={utilitiesImages.wttCoin}
                                />
                            </AnimateTransition>
                        </div>
                    </Col>
                </Row>
            </div>
        </Element>
    )
}

export default Token
