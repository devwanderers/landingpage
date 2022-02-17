import React from 'react'
import HeaderText from './../../components/DisplayText/Header'
import Paragraph from './../../components/DisplayText/Paragraph'
import { useInView } from 'react-intersection-observer'
import AnimateTransition from './../../components/Animations/AnimateTransition'

const Benefits = () => {
    const collectionConfig = {
        threshold: 1,
        triggerOnce: true,
    }

    const [benefit1Ref, benefit1Inview] = useInView(collectionConfig)
    const [benefit2Ref, benefit2Inview] = useInView(collectionConfig)
    const [benefit3Ref, benefit3Inview] = useInView(collectionConfig)

    return (
        <div className="">
            <div>
                <HeaderText
                    base="4xl"
                    className="block text-primary mb-2 leading-tight tracking-widest mx-auto"
                >
                    Benefits
                </HeaderText>
            </div>
            <div className="">
                <div className="flex">
                    <div className="pr-1" ref={benefit1Ref}>
                        <HeaderText
                            base="5xl"
                            md="4xl"
                            lg="5xl"
                            className="block text-info leading-tight tracking-widest mx-auto font-saira-condensed font-bold"
                        >
                            1.
                        </HeaderText>
                    </div>
                    <div className="flex-1 overflow-hidden  flex items-center">
                        <AnimateTransition
                            visible={benefit1Inview}
                            transitionFrom="left"
                        >
                            <Paragraph className="text-blue-4  text-justify text-base md:text-lg lg:text-xl">
                                Access to Prime & Ambassador NFTs Marketplace
                            </Paragraph>
                        </AnimateTransition>
                    </div>
                </div>
                <div className="flex ">
                    <div className="pr-1" ref={benefit2Ref}>
                        <HeaderText
                            base="5xl"
                            md="4xl"
                            lg="5xl"
                            className="block text-info leading-tight tracking-widest mx-auto font-saira-condensed font-bold"
                        >
                            2.
                        </HeaderText>
                    </div>
                    <div className="flex-1 overflow-hidden flex items-center">
                        <AnimateTransition
                            visible={benefit2Inview}
                            transitionFrom="left"
                        >
                            <Paragraph className="text-blue-4  text-justify  text-base md:text-lg lg:text-xl">
                                Get great discounts our partner travel platform.
                            </Paragraph>
                        </AnimateTransition>
                    </div>
                </div>
                <div className="flex">
                    <div className="pr-1" ref={benefit3Ref}>
                        <HeaderText
                            base="5xl"
                            md="4xl"
                            lg="5xl"
                            className="block text-info leading-tight tracking-widest mx-auto font-saira-condensed font-bold"
                        >
                            3.
                        </HeaderText>
                    </div>
                    <div className="flex-1 overflow-hidden flex items-center">
                        <AnimateTransition
                            visible={benefit3Inview}
                            transitionFrom="left"
                        >
                            <Paragraph className="text-blue-4  text-justify  text-base md:text-lg lg:text-xl">
                                Receive 1% of the subsequent resales of this NFT
                                in tokens.
                            </Paragraph>
                        </AnimateTransition>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits
