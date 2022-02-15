import React from 'react'
import { Element } from 'react-scroll'
import HeaderText from './../../components/DisplayText/Header'
import SectionTitle from './../../components/Sections/SectionTitle'
import CollectionSection from './../../components/Collection/CollectionSection'

const Wanderers = () => {
    return (
        <Element
            name="nomadz"
            className=" bg-blue-5 lg:pb-32 css-generic lg:flex-row px-10px xl:px-0"
        >
            <HeaderText
                base="4xl"
                className="block lg:hidden text-primary mb-5 md:mb-10 leading-tight tracking-widest mx-auto"
            >
                COLLECTION
            </HeaderText>
            <SectionTitle className="hidden lg:flex">COLLECTION</SectionTitle>
            <div className="css-generic flex-grow pb-5">
                {/* Collection */}
                <CollectionSection />
            </div>
        </Element>
    )
}

export default Wanderers
