import React from 'react'

const TeamProfile = ({ image, name, description }) => {
    return (
        <div className="flex flex-row overflow-hidden">
            <div>
                <img className="w-full h-auto" src={image} alt={image} />
            </div>
            <div className="flex-1">
                <div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col"
                >
                    <div className="mt-8 pl-6 leading-none text-primary text-xl lg:text-2xl">
                        {name}
                    </div>
                    <div className="text-blue-4 pl-6  text-justify text-lg lg:text-23px">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamProfile
