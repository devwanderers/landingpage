import React from 'react'
import PropTypes from 'prop-types'
import Header from '../DisplayText/Header'

const SectionTitle = ({ children }) => {
    return (
        <div className="css-generic pb-5 lg:pb-10 items-end justify-end flex-grow relative">
            <div className="css-generic w-125px ">
                <div className="css-generic mr-8">
                    <Header
                        base="5xl"
                        sm="7xl"
                        className="text-primary transform rotate-180 leading-tight tracking-widest"
                        style={{
                            textOrientation: 'sideways-right',
                            writingMode: 'vertical-rl',
                        }}
                    >
                        {children}
                    </Header>
                </div>
            </div>
            <div className="section-title-line border-primary border-b border-r border-solid flex">
                <div className="relative flex-grow ">
                    <div className="absolute right-0 bottom-0 h-2/6 border-r-4 -mb-1px border-solid border-primary -mr-1"></div>
                </div>
            </div>
        </div>
    )
}

SectionTitle.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
}

export default SectionTitle
