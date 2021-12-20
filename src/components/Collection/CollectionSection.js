import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CollectionContainer from './CollectionCardsContainer'
import CollectionCard from './CollectionCard'
import useResponsive from './../../hooks/useResponsive'
import utilitiesImages from '../../assets/images/utilities'

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
        <div className="css-generic flex-col w-full lg:w-750px xl:w-1000px space-y-2 xl:space-y-4 space ">
            <div
                ref={refCol1}
                style={{ height: heightContainerCollection }}
                className="css-generic w-full max-w-full"
            >
                <AnimatePresence>
                    {showCol1 && (
                        <motion.div
                            initial={{ opacity: 0, x: 250 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{
                                opacity: 0,
                                x: 250,
                            }}
                            transition={transitionConfig}
                        >
                            <CollectionContainer>
                                <CollectionCard
                                    size={heightContainerCollection}
                                    src={utilitiesImages.nft}
                                />
                                <CollectionCard
                                    size={heightContainerCollection}
                                    src={utilitiesImages.nft9}
                                />
                                <CollectionCard
                                    size={heightContainerCollection}
                                    src={utilitiesImages.nft5}
                                />
                            </CollectionContainer>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div
                ref={refCol2}
                style={{ height: heightContainerCollection }}
                className="css-generic w-full max-w-full"
            >
                <AnimatePresence>
                    {showCol2 && (
                        <motion.div
                            initial={{ opacity: 0, x: -250 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{
                                opacity: 0,
                                x: -250,
                            }}
                            transition={transitionConfig}
                        >
                            <CollectionContainer>
                                <CollectionCard
                                    size={heightContainerCollection}
                                    src={utilitiesImages.nft7}
                                />
                                <CollectionCard
                                    size={heightContainerCollection}
                                    src={utilitiesImages.nft3}
                                />
                                <CollectionCard
                                    size={heightContainerCollection}
                                    src={utilitiesImages.nft8}
                                />
                                <CollectionCard
                                    size={heightContainerCollection}
                                    src={utilitiesImages.nft2}
                                />
                            </CollectionContainer>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div
                ref={refCol3}
                style={{ height: heightContainerCollection }}
                className="css-generic w-full max-w-full "
            >
                <AnimatePresence>
                    {showCol3 && (
                        <motion.div
                            initial={{ opacity: 0, x: 250 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{
                                opacity: 0,
                                x: 250,
                            }}
                            transition={transitionConfig}
                        >
                            <CollectionContainer>
                                <CollectionCard
                                    size={heightContainerCollection}
                                    src={utilitiesImages.nft6}
                                />
                                <CollectionCard
                                    size={heightContainerCollection}
                                    src={utilitiesImages.nft1}
                                />
                                <CollectionCard
                                    size={heightContainerCollection}
                                    src={utilitiesImages.nft4}
                                />
                            </CollectionContainer>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default CollectionSection
