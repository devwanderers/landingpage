import React from 'react'
import PropTypes from 'prop-types'
import Header from '../DisplayText/Header'

const StepTitle = ({ children, className = '', direction }) => {
    return direction === 'right' ? (
        <div
            className={` pb-5 lg:pb-10 items-end justify-end flex-grow relative ${className}`}
        >
            <div className="w-100px ">
                <div className="mr-8">
                    <Header
                        lg="89px"
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
            <div className="section-title-line border-blue-4 border-b border-r border-solid flex h-full">
                <div className="relative flex-grow">
                    <div className="absolute right-0 bottom-0 h-2/6 border-r-4 -mb-1px border-solid border-primary -mr-1"></div>
                </div>
            </div>
        </div>
    ) : (
        <div
            className={` pb-5 lg:pb-10 items-start justify-end flex-grow relative ${className}`}
        >
            <div className=" w-100px ">
                <div className=" mr-8">
                    <Header
                        lg="89px"
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
            <div className="section-title-line border-blue-4 border-t border-l border-solid flex h-full">
                <div className="relative flex-grow">
                    <div className="absolute left-0 bottom-0 h-2/6 border-l-4 -mb-1px border-solid border-primary -mr-1"></div>
                </div>
            </div>
        </div>
    )
}

StepTitle.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
}

export default StepTitle
