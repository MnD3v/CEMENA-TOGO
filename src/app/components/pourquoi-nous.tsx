import { motion } from 'framer-motion'
import React from 'react'
import Animations from './utils/item'

const PourquoiNous = () => {

    const raisons = [
        {
            title: "Professionnalisme et expertise certifiée",
            description: "Nos praticiens sont des experts qualifiés, avec une solide formation en médecine alternative. Grâce à une approche rigoureuse et à jour des dernières recherches scientifiques, nous vous assurons des traitements fiables et efficaces, toujours adaptés à vos besoins spécifiques."
        }, {
            title: "Respect absolu de la confidentialité",
            description: "Nous plaçons un point d'honneur sur la protection des données et le respect de la vie privée de nos patients. Votre parcours de soin reste strictement confidentiel, et chaque information partagée est traitée avec le plus grand respect et discrétion."
        }, {
            title: "Soutien personnalisé et continu ",
            description: "Nous vous accompagnons tout au long de votre processus de guérison, en assurant un suivi personnalisé et un soutien constant. Notre objectif est de vous donner les clés pour atteindre un état de santé optimal et durable, tout en prenant soin de vous à chaque étape."
        }, {
            title: "Résultats efficaces sans effets secondaires indésirables",
            description: "Nos traitements naturels offrent des résultats durables sans provoquer d'effets secondaires. Ils permettent une amélioration de votre santé en douceur, sans compromettre votre bien-être à long terme."
        },

    ]
    return (
        <div className="py-6 md:py-12 flex justify-center m-1 md:m-6">

            <div className='max bg-[url("/utils/why_us.png")] bg-cover text-white'>
                <div className='flex flex-col bg-black/50 px-6 md:px-16 pt-14'>
                    <p className='text-green-300 text-lg'>POURQUOI NOUS CHOISIR</p>
                    <div className='h-9'></div>
                    <p className='font-poppins font-extralight text-2xl md:text-4xl'>Évitez les maladies et optimisez votre santé grâce à des solutions naturelles d'exception.</p>
                    <div className='h-14'></div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 font-marcellus text-lg'>
                        {
                            raisons.map((element) => (
                                <motion.div
                                    variants={Animations.bottomToTop({ duration: 0.3 })}
                                    initial="hidden"
                                    whileInView="show"
                                    key={element.title} className='space-y-3'>
                                    <h2 className='text-lg md:text-2xl text-green-300 font-semibold'>{element.title}</h2>
                                    <p className='text-sm md:text-base'>{element.description}</p>
                                    <div className='h-px w-full bg-zinc-500 my-4'></div>
                                </motion.div>
                            ))
                        }
                    </div>
                    <motion.img src="/utils/pot.png" alt=""
                        variants={Animations.scale({ duration: 0.5 })}
                        initial="hidden"
                        whileInView="show"
                        className='relative -bottom-10 h-56 self-center' />
                </div>



            </div>
        </div>
    )
}

export default PourquoiNous