import { motion } from 'framer-motion'
import React from 'react'
import Animations from './utils/item'

const PourquoiNous = () => {

    const raisons = [
        {
            title: "Approche holistique et personnalisée",
            description: "Nous traitons chaque patient dans sa globalité, en tenant compte de tous les aspects de sa santé physique et mentale. Nos praticiens élaborent des plans de soins sur mesure, adaptés à vos besoins et objectifs de santé uniques."
        }, {
            title: "Thérapies naturelles éprouvées",
            description: "Nos traitements s'appuient sur des remèdes naturels et des techniques ancestrales dont l'efficacité a été démontrée au fil des siècles. Nous combinons la sagesse traditionnelle avec les dernières avancées scientifiques en médecine naturelle."
        }, {
            title: "Expertise et accompagnement bienveillant",
            description: "Notre équipe de professionnels certifiés possède une solide formation et une grande expérience en médecines alternatives. Nous vous guidons avec empathie tout au long de votre parcours de soin, en vous donnant les clés pour prendre en main votre santé."
        }, {
            title: "Résultats durables sans effets secondaires",
            description: "Nos méthodes visent à traiter les causes profondes de vos problèmes de santé, pas seulement les symptômes. Vous obtenez ainsi des résultats à long terme, tout en évitant les effets indésirables fréquents des traitements conventionnels."
        },

    ]
    return (
        <div className="py-6 md:py-12 flex justify-center m-1 md:m-6">

            <div className='max bg-[url("/utils/why_us.png")] bg-cover text-white'>
                <div className='flex flex-col bg-black/50 px-6 md:px-16 pt-14'>
                    <p className='text-green-300 text-lg'>POURQUOI NOUS CHOISIR</p>
                    <div className='h-9'></div>
                    <p className='font-marcellus text-2xl md:text-4xl'>Evitez et soignez les maladies de manière naturelle</p>
                    <div className='h-14'></div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 font-marcellus text-lg'>
                        {
                            raisons.map((element) => (
                                <div key={element.title} className='space-y-3'>
                                    <h2 className='text-lg md:text-2xl'>{element.title}</h2>
                                    <p className='text-sm md:text-base'>{element.description}</p>
                                    <div className='h-px w-full bg-zinc-500 my-4'></div>
                                </div>
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