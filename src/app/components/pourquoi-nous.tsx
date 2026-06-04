"use client"
import { motion } from 'framer-motion'
import React from 'react'
import Animations from './utils/item'

const PourquoiNous = () => {

    const raisons = [
        {
            number: "01",
            title: "Professionnalisme et expertise certifiée",
            description: "Nos praticiens sont des experts qualifiés, avec une solide formation en médecine alternative. Grâce à une approche rigoureuse et à jour des dernières recherches scientifiques, nous vous assurons des traitements fiables et efficaces, toujours adaptés à vos besoins spécifiques."
        },
        {
            number: "02",
            title: "Respect absolu de la confidentialité",
            description: "Nous plaçons un point d'honneur sur la protection des données et le respect de la vie privée de nos patients. Votre parcours de soin reste strictement confidentiel, et chaque information partagée est traitée avec le plus grand respect et discrétion."
        },
        {
            number: "03",
            title: "Soutien personnalisé et continu",
            description: "Nous vous accompagnons tout au long de votre processus de guérison, en assurant un suivi personnalisé et un soutien constant. Notre objectif est de vous donner les clés pour atteindre un état de santé optimal et durable, tout en prenant soin de vous à chaque étape."
        },
        {
            number: "04",
            title: "Résultats efficaces sans effets secondaires indésirables",
            description: "Nos traitements naturels offrent des résultats durables sans provoquer d'effets secondaires. Ils permettent une amélioration de votre santé en douceur, sans compromettre votre bien-être à long terme."
        },
    ]

    return (
        <section className="relative flex justify-center py-6 md:py-12 px-2 md:px-6">
            <div className='max w-full relative overflow-hidden rounded-3xl'>

                {/* Image de fond + overlay dégradé */}
                <div className='absolute inset-0 bg-[url("/utils/why_us.jpg")] bg-cover bg-center' />
                <div className='absolute inset-0 bg-gradient-to-br from-green-950/92 via-black/75 to-green-900/85' />

                {/* Contenu */}
                <div className='relative z-10 px-6 md:px-16 pt-14 pb-4'>

                    {/* En-tête */}
                    <div className='flex flex-col items-start gap-3 mb-12'>
                        <p className='uppercase tracking-widest text-green-400 font-semibold text-sm flex items-center gap-2'>
                            <span className='w-6 h-px bg-green-500 inline-block'></span>
                            Pourquoi nous choisir
                        </p>
                        <h2 className='font-poppins font-extralight text-2xl md:text-4xl text-white max-w-2xl leading-snug'>
                            Évitez les maladies et optimisez votre santé grâce à des{' '}
                            <span className='text-green-300'>solutions naturelles</span> d'exception.
                        </h2>
                        <div className='w-12 h-1 rounded-full bg-green-500 mt-1'></div>
                    </div>

                    {/* Grille des raisons */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {raisons.map((element, index) => (
                            <motion.div
                                key={element.title}
                                variants={Animations.bottomToTop({ duration: 0.3 + index * 0.15 })}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className='group bg-black/40 hover:bg-black/55 border border-black/30 hover:border-green-500/50 rounded-2xl p-6 backdrop-blur-sm flex flex-col gap-3'
                            >
                                <div className='flex items-start gap-4'>
                                    <span className='text-4xl font-bold font-bricolage text-green-500/40 group-hover:text-green-400/70 leading-none shrink-0'>
                                        {element.number}
                                    </span>
                                    <h3 className='text-white font-semibold font-bricolage text-base md:text-lg leading-snug pt-2'>
                                        {element.title}
                                    </h3>
                                </div>
                                <p className='text-white/65 text-sm md:text-base leading-relaxed pl-14'>
                                    {element.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Image décorative */}
                    <div className='flex justify-center mt-8'>
                        <motion.img
                            src="/utils/pot.png"
                            alt=""
                            variants={Animations.scale({ duration: 0.5 })}
                            initial="hidden"
                            whileInView="show"
                            className='h-52 drop-shadow-2xl'
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default PourquoiNous
