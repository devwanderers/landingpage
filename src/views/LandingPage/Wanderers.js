import React from 'react'
import { Element } from 'react-scroll'
import HeaderText from './../../components/DisplayText/Header'
import SectionTitle from './../../components/Sections/SectionTitle'
import CollectionSection from './../../components/Collection/CollectionSection'
import { RadioGraphySVG } from '../../assets/svg/sections'

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
                <div className="css-generic flex-grow pb-8">
                    {/* Collection */}
                    <CollectionSection />
                </div>
            </div>
            <div className=" max-w-1000px mx-auto mt-20 px-8 lg:px-0">
                <div className="text-center mb-2">
                    <HeaderText
                        base="4xl"
                        className=" text-primary mb-5 md:mb-10 leading-tight tracking-widest mx-auto"
                    >
                        Radiography
                    </HeaderText>
                </div>
                <div className="w-full">
                    <RadioGraphySVG width={'100%'} height="100%" />
                </div>
            </div>
        </Element>
    )
}

export default Wanderers
