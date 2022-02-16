/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './Header'
import Paragraph from './Paragraph'
import { useInView } from 'react-intersection-observer'
import AnimateTransition from './../Animations/AnimateTransition'

const Article = ({
    className,
    header,
    subHeader,
    children,
    paragraphProps,
    headerProps,
    subHeaderProps,
}) => {
    const collectionConfig = {
        threshold: 0.5,
        triggerOnce: true,
    }

    const [titleRef, titleInView] = useInView(collectionConfig)
    const [subTitleRef, subTitleView] = useInView(collectionConfig)
    const [paragraphRef, paragraphInView] = useInView(collectionConfig)

    return (
        <div className={`flex flex-col ${className}`}>
            <div ref={titleRef} className=" overflow-hidden">
                <AnimateTransition
                    className="w-full overflow-hidden"
                    visible={titleInView}
                    transitionFrom="left"
                >
                    <Header {...headerProps}>{header}</Header>
                </AnimateTransition>
            </div>
            {subHeader && (
                <div ref={subTitleRef} className=" overflow-hidden">
                    <AnimateTransition
                        visible={subTitleView}
                        transitionFrom="right"
                    >
                        <Header {...subHeaderProps}>{subHeader}</Header>
                    </AnimateTransition>
                </div>
            )}

            <div ref={paragraphRef} className=" overflow-hidden">
                <AnimateTransition
                    visible={paragraphInView}
                    transitionFrom="bottom"
                    // duration={1}
                >
                    <Paragraph {...paragraphProps}>{children}</Paragraph>
                </AnimateTransition>
            </div>
        </div>
    )
}

export default Article
