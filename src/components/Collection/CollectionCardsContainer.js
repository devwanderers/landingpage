import React from 'react'

const CollectionContainer = ({ children }) => (
    <div className="css-generic w-full flex-row justify-center flex-grow space-x-2 xl:space-x-6">
        {children}
    </div>
)

export default CollectionContainer
