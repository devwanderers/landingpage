/* eslint-disable no-unused-vars */
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { Element } from 'react-scroll'
import { Row, Col } from 'antd'
import Article from '../../components/DisplayText/Article'
import { FrameCharacterSVG } from '../../assets/svg/frames'
import AnimateTransition from '../../components/Animations/AnimateTransition'
import utilitiesImages from '../../assets/images/utilities'
import Benefits from './Benefits'
import useResponsive from './../../hooks/useResponsive'
import { whitePaperLink } from './../../constants/linksContants'

const Mint = (props) => {
    const [nftFrameRef, nftFrameInview] = useInView({
        threshold: 1,
        triggerOnce: true,
    })
    const nftBottom = useResponsive({
        base: '-4px',
        md: '-6px',
        lg: '-15px',
        xl: '',
    })
    return (
        <Element name="mint" className="bg-blue-5  pb-10 lg:pb-24">
            <div className="max-w-1400px mx-auto px-6 md:px-10 lg:px-14 ">
                <Row>
                    <Col xs={24} md={14} className="">
                        <div className="w-full">
                            <div className="w-full pt-10 xl:pr-16">
                                <Article
                                    header="9,000"
                                    subHeader="Unique Nomadz"
                                    headerProps={{
                                        className:
                                            'mb-1 leading-none text-primary text-center lg:text-left',
                                        base: '4xl',
                                        lg: '89px',
                                    }}
                                    subHeaderProps={{
                                        className:
                                            'mb-4 font-saira-condensed leading-none text-info font-semibold  text-center lg:text-left',
                                        base: '2xl',
                                        lg: '53px',
                                    }}
                                    paragraphProps={{
                                        className: 'text-blue-4  text-justify',
                                        base: 'lg',
                                        lg: '23px',
                                    }}
                                    className="max-w-full"
                                >
                                    <span>
                                        {
                                            'We’ve created a completely virtual metaverse in which all tourist destinations offered by our travel partner are represented as NFTs within our platform known as Lands or Roles. Such destinations can be owned by you, or a group of adventurers called Nomadz, who are also represented as unique handmade NFTs.'
                                        }
                                    </span>
                                    <br />
                                    <br />
                                    <span>
                                        There are 9,000 unique characters called
                                        Nomadz as an initial offering and an
                                        additional 250 special characters
                                        available in a presale event of 0.25
                                        ETH.
                                    </span>
                                    <br />
                                    <br />
                                    <span>
                                        {
                                            "Our partner grants month to month 50% of its earnings from various concepts established in the strategic union with The Nomadz, who will deliver them to be distributed in the NFT's ecosystem."
                                        }
                                    </span>
                                    <br />
                                    <br />
                                    <span>
                                        Owning a Nomadz gives you access to the
                                        metaverse as well as exclusive benefits
                                        to our travel partner. Once you mint a
                                        Nomad you start to receive big
                                        incentives granted in DDOT (our partner
                                        token), exclusive promotions in our
                                        partner travel platform and more. Read
                                        the white paper.{' '}
                                        <a
                                            href={whitePaperLink}
                                            className="underline"
                                        >
                                            <strong>
                                                Read the white paper.
                                            </strong>
                                        </a>
                                    </span>
                                </Article>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} md={10} className="pt-5 ">
                        <div
                            ref={nftFrameRef}
                            className="css-generic relative overflow-hidden w-10/12 mx-auto"
                        >
                            <FrameCharacterSVG width="100%" />

                            <div
                                className="absolute right-0 left-0 mx-auto"
                                style={{
                                    width: '70%',
                                    bottom: '9.5%',
                                }}
                            >
                                <div
                                    className="w-full h-full overflow-hidden relative "
                                    // style={{ bottom: nftBottom }}
                                >
                                    <AnimateTransition
                                        visible={nftFrameInview}
                                        transitionFrom="bottom"
                                        duration={1.1}
                                        className="w-full h-full relative"
                                    >
                                        <img
                                            className="w-full h-full object-contain mx-auto "
                                            src={utilitiesImages.nft1wb}
                                            alt={utilitiesImages.nft1wb}
                                        />
                                    </AnimateTransition>
                                </div>
                            </div>
                        </div>
                        <div className="w-10/12 mx-auto">
                            <Benefits />
                        </div>
                    </Col>
                </Row>
            </div>
        </Element>
    )
}

export default Mint
