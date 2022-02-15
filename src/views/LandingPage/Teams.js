import React, { useEffect } from 'react'
import TeamProfile from './TeamProfile'
import utilitiesImages from '../../assets/images/utilities'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const teams = [
    { image: utilitiesImages.dr, name: 'Dr. Millan', description: 'COO' },
    { image: utilitiesImages.skullman, name: 'Skullman', description: 'CTO' },
    {
        image: utilitiesImages.alex,
        name: 'AlexArt',
        description: 'Art Director',
    },
    {
        image: utilitiesImages.amelie,
        name: 'Riot Mei',
        description: 'Social Media Manager',
    },
    {
        image: utilitiesImages.kame,
        name: 'Kame',
        description: 'Marketing Director',
    },
    {
        image: utilitiesImages.surtek,
        name: 'Surtek TK',
        description: 'Strategy',
    },
]

const Teams = () => {
    const [refTeam, teamInView] = useInView({
        threshold: 1,
        triggerOnce: true,
    })
    const controls = useAnimation()

    const teamsVariant = {
        hidden: {
            opacity: 0,
            transition: {
                when: 'afterChildren',
            },
        },
        show: {
            opacity: 1,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1,
                delayChildren: 0,
                duration: 0.1,
            },
        },
    }

    const teamItem = {
        hidden: {
            opacity: 0,
            x: -100,
            y: -100,
        },
        show: { opacity: 1, y: 0, x: 0 },
    }

    useEffect(() => {
        if (teamInView) controls.start('show')
        else controls.start('hidden')
    }, [controls, teamInView])

    return (
        <motion.div
            ref={refTeam}
            initial="hidden"
            className="grid grid-cols-3 gap-4"
            variants={teamsVariant}
            animate={controls}
        >
            {teams.map((t) => (
                <motion.div variants={teamItem} key={`team-${t.name}`}>
                    <TeamProfile
                        image={t.image}
                        name={t.name}
                        description={t.description}
                    />
                </motion.div>
            ))}
        </motion.div>
    )
}

export default Teams
