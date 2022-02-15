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
        threshold: 0.4,
        triggerOnce: true,
    }

    const [articleRef, articleInView] = useInView(collectionConfig)

    return (
        <div ref={articleRef} className={`flex flex-col ${className}`}>
            <AnimateTransition visible={articleInView} transitionFrom="left">
                <Header {...headerProps}>{header}</Header>
            </AnimateTransition>
            {subHeader && (
                <AnimateTransition
                    visible={articleInView}
                    transitionFrom="right"
                >
                    <Header {...subHeaderProps}>{subHeader}</Header>
                </AnimateTransition>
            )}
            <AnimateTransition
                visible={articleInView}
                transitionFrom="bottom"
                // duration={1}
            >
                <Paragraph {...paragraphProps}>{children}</Paragraph>
            </AnimateTransition>
        </div>
    )
}

export default Article
