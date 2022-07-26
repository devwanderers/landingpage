import React from 'react'
import { Element } from 'react-scroll'
import HeaderText from './../../components/DisplayText/Header'
import Article from './../../components/DisplayText/Article'
import AnimateTransition from './../../components/Animations/AnimateTransition'
import { useInView } from 'react-intersection-observer'
import RoadMapSeason2SVG from './../../assets/svg/utilities/RoadMapSeason2SVG'

const RoadMap = (props) => {
    const collectionConfig = {
        threshold: 0.4,
        triggerOnce: true,
    }
    const [titleRef, titleInView] = useInView(collectionConfig)

    return (
        <Element
            name="roadMap"
            className="max-w-1400px mx-auto px-6 md:px-10 lg:px-14"
        >
            <div className=" text-center lg:text-left">
                <div ref={titleRef}>
                    <AnimateTransition visible={titleInView}>
                        <HeaderText
                            base="4xl"
                            lg="89px"
                            className="text-primary leading-none tracking-widest mb-10 lg:mb-20"
                        >
                            Road Map
                        </HeaderText>
                    </AnimateTransition>
                </div>
                <div className=" mx-auto w-full lg:w-8/12">
                    <Article
                        // header="Road Map"
                        subHeader="February 2022"
                        headerProps={{
                            className:
                                'leading-tight text-info text-center lg:text-left',
                            base: '3xl',
                            lg: '40px',
                        }}
                        subHeaderProps={{
                            className:
                                'leading-tight text-blue-4 font-saira-condensed font-semibold mb-4',
                            base: 'xl',
                            lg: '27px',
                        }}
                        paragraphProps={{
                            className: 'mb-8 text-blue-4  text-justify',
                            base: 'lg',
                            lg: '23px',
                        }}
                    >
                        Unlike many other projects, our project has been created
                        to be in the market for the long run. That is why our
                        roadmap is more complex and detailed than more projects.
                        The team is working tirelessly to accomplish all the
                        goals set forth in the roadmap. We’ll be keeping you
                        updated through social media every step of the way.
                    </Article>
                </div>

                <div className="max-w-full flex justify-center">
                    <RoadMapSeason2SVG width="100%" height="100%" />
                </div>
            </div>
        </Element>
    )
}

export default RoadMap
