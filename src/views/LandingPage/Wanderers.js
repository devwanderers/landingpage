import React from 'react'
import { Element } from 'react-scroll'
import HeaderText from './../../components/DisplayText/Header'
import SectionTitle from './../../components/Sections/SectionTitle'
import CollectionSection from './../../components/Collection/CollectionSection'
import { RadioGraphySVG } from '../../assets/svg/sections'
import Article from '../../components/DisplayText/Article'

const Wanderers = () => {
    return (
        <Element name="nomadz" className=" bg-blue-5 pb-16 lg:pb-32 ">
            {' '}
            <div className="flex flex-col lg:flex-row px-10px xl:px-0">
                <HeaderText
                    base="4xl"
                    className="block lg:hidden text-primary mb-5 md:mb-10 leading-tight tracking-widest mx-auto"
                >
                    COLLECTION
                </HeaderText>
                <SectionTitle className="hidden lg:flex">
                    COLLECTION
                </SectionTitle>
                <div className="flex flex-grow pb-8">
                    {/* Collection */}
                    <CollectionSection />
                </div>
            </div>
            <div className=" max-w-1400px mx-auto mt-20 px-6 md:px-10 lg:px-14">
                <div className="text-center mb-2 w-full lg:w-8/12 mx-auto">
                    <Article
                        header={'Radiography'}
                        headerProps={{
                            className:
                                'text-primary text-4xl lg:text-89px mb-5 md:mb-10 leading-tight tracking-widest mx-auto',
                        }}
                        paragraphProps={{
                            className:
                                'text-blue-4 text-justify text-lg lg:text-23px mb-6 lg:mb-16',
                        }}
                    >
                        Each Nomad can have up to 15 different characteristics
                        besides their race, in order for each one to be unique
                        we have over 500 hand drawn elements to create the
                        uniqueness of our Nomadz
                    </Article>
                </div>
                <div className="w-full px-0 lg:px-16">
                    <RadioGraphySVG width={'100%'} height="100%" />
                </div>
            </div>
        </Element>
    )
}

export default Wanderers
