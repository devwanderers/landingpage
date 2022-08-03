import React from 'react'
import { useInView } from 'react-intersection-observer'
import CollectionContainer from './CollectionCardsContainer'
import CollectionCard from './CollectionCard'
import useResponsive from './../../hooks/useResponsive'
import utilitiesImages from '../../assets/images/utilities'
import AnimateTransition from './../Animations/AnimateTransition'

const CollectionSection = () => {
    const collectionConfig = {
        threshold: 0.4,
        triggerOnce: true,
    }
    // Height Container Collection
    const [heightContainerCollection] = useResponsive({
        base: '80px',
        md: '160px',
        xl: '210px',
    })
    const [refCol1, showCol1] = useInView(collectionConfig)
    const [refCol2, showCol2] = useInView(collectionConfig)
    const [refCol3, showCol3] = useInView(collectionConfig)

    const transitionConfig = {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.4,
    }
    return (
        <div className="flex flex-col space-y-2 xl:space-y-4  w-full">
            <div
                ref={refCol1}
                style={{ height: heightContainerCollection }}
                className=" w-full max-w-full overflow-hidden"
            >
                <AnimateTransition
                    visible={showCol1}
                    transitionConfig={transitionConfig}
                >
                    <CollectionContainer>
                        <CollectionCard
                            size={heightContainerCollection}
                            src={utilitiesImages.nft5}
                        />
                        <CollectionCard
                            size={heightContainerCollection}
                            src={utilitiesImages.nft9}
                        />
                    </CollectionContainer>
                </AnimateTransition>
            </div>
            <div
                ref={refCol2}
                style={{ height: heightContainerCollection }}
                className=" w-full max-w-full overflow-hidden"
            >
                <AnimateTransition
                    visible={showCol2}
                    transitionConfig={transitionConfig}
                    transitionFrom="right"
                >
                    <CollectionContainer>
                        <CollectionCard
                            size={heightContainerCollection}
                            src={utilitiesImages.nft8}
                        />
                        <CollectionCard
                            size={heightContainerCollection}
                            src={utilitiesImages.nft3}
                        />
                    </CollectionContainer>
                </AnimateTransition>
            </div>

            <div
                ref={refCol3}
                style={{ height: heightContainerCollection }}
                className=" w-full max-w-full overflow-hidden"
            >
                <AnimateTransition
                    visible={showCol3}
                    transitionConfig={transitionConfig}
                >
                    <CollectionContainer>
                        <CollectionCard
                            size={heightContainerCollection}
                            src={utilitiesImages.nft10}
                        />
                        <CollectionCard
                            size={heightContainerCollection}
                            src={utilitiesImages.nft1}
                        />
                    </CollectionContainer>
                </AnimateTransition>
            </div>
        </div>
    )
}

export default CollectionSection
