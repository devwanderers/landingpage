import React from 'react'
import { Element } from 'react-scroll'
import HeaderText from './../../components/DisplayText/Header'
import { Row, Col } from 'antd'
import { LineWrapper } from './../../components/Wrappers/LineWrapper'
import Paragraph from './../../components/DisplayText/Paragraph'
import utilitiesImages from '../../assets/images/utilities'
import AnimateTransition from './../../components/Animations/AnimateTransition'
import { useInView } from 'react-intersection-observer'
import { whitePaperLink } from './../../constants/linksContants'

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
            className="max-w-1400px mx-auto px-6 md:px-10 lg:px-14"
        >
            <div className="flex ">
                <div
                    ref={titleRef}
                    className="flex-1 flex justify-center overflow-hidden "
                >
                    <AnimateTransition visible={titleInView}>
                        <HeaderText
                            base="4xl"
                            lg="89px"
                            className="text-primary leading-none tracking-widest "
                        >
                            DDOT
                        </HeaderText>
                    </AnimateTransition>
                </div>
            </div>
            <div className="flex mb-10">
                <div className="flex-1 hidden lg:block"></div>
                <div className="flex-1 flex flex-row  max-h-full ">
                    <div
                        ref={subTitleRef}
                        className="flex-1  text-center lg:text-left lg:text-left lg:pl-8  overflow-hidden"
                    >
                        <AnimateTransition
                            visible={subTitleInView}
                            transitionFrom="right"
                            className="w-full"
                        >
                            <HeaderText
                                base="2xl"
                                lg="53px"
                                className="text-info leading-none font-saira-condensed font-semibold "
                            >
                                Our Partner Token
                            </HeaderText>
                        </AnimateTransition>
                    </div>
                </div>
            </div>
            <div className=" mb-8 lg:mb-20">
                <Row>
                    <Col xs={24} lg={12}>
                        <LineWrapper side="right" decorationBottom="0.7rem">
                            <div
                                ref={paragraphRef}
                                className=" overflow-hidden"
                            >
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
                                            'Thanks to the alliance with their partners, Nomadzland NFT offers a solution to all art and investment lovers in a single project. We want to share part of its revenues with all the members in the metaverse grantend as our partner token.'
                                        }
                                        <br />
                                        <br />
                                        The token rewards you will receive in
                                        the ecosystem has unique features you
                                        will love!! DDOT is the native currency
                                        of Nomadzland´s metaverse. The token is
                                        based on ERC-20 token protocols.{' '}
                                        <a
                                            href={whitePaperLink}
                                            className="underline"
                                        >
                                            <strong>
                                                Read the white paper for more
                                                info.
                                            </strong>
                                        </a>
                                    </Paragraph>
                                </AnimateTransition>
                            </div>
                        </LineWrapper>
                    </Col>
                    <Col
                        xs={24}
                        lg={12}
                        className="flex justify-center lg:pl-5  overflow-hidden"
                    >
                        <div
                            ref={tokenRef}
                            className="w-6/12 lg:w-10/12 xl:w-8/12"
                        >
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
