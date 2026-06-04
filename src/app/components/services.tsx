import { motion } from 'framer-motion'
import React from 'react'
import Animations from './utils/item'

const Services = () => {
    const maladies = [
        "Les hépatites B et C",
        "Problème de foie",
        "Fibrome",
        "Kyste d'ovaires",
        "Règle douloureuse perte blanche",
        "Ménopause précoce",
        "Palu jaune ou ictère",
        "Oligospermie ou Azoospermie",
        "Hernie",
        "Gros cœur",
        "Drépanocytose ou Hémates",
        "Ulcères gastriques",
        "Asthme",
        "Maux de hanche ou genou",
        "Plaies inguérissables",
        "Diabète",
        "Prostate",
        "Hémorroïdes internes et externes",
        "Maux de tête chroniques",
        "Faiblesse sexuelle",
        "Hypertension ou hypotension",
        "Stérilité chez les femmes",
        "Infections",
        "Cancers",
        "Tous problèmes des yeux",
        "Éjaculation précoce",
        "Plaies intestinales"
    ]

    const services = [
        {
            "numero": "01",
            "titre": "Contrôle de la tension",
            "description": "Vérification régulière de la tension artérielle pour prévenir les risques d'hypertension."
        },
        {
            "numero": "02",
            "titre": "Contrôle de glycémie",
            "description": "Suivi de votre taux de sucre dans le sang pour prévenir le diabète."
        },
        {
            "numero": "03",
            "titre": "Contrôle de cholestérol",
            "description": "Mesure du cholestérol pour réduire les risques de maladies cardiovasculaires."
        },
        {
            "numero": "04",
            "titre": "Contrôle du poids",
            "description": "Suivi de votre poids pour maintenir une bonne santé physique et prévenir l'obésité."
        },
        {
            "numero": "05",
            "titre": "Contrôle de la prévention des AVC",
            "description": "Évaluation des facteurs de risque pour prévenir les accidents vasculaires cérébraux."
        },
        {
            "numero": "06",
            "titre": "Bilan d'hématite/ Ernie/ Obésité",
            "description": "Diagnostic complet de l'hématite, de l'hernie et de l'obésité pour une prise en charge rapide."
        },
        {
            "numero": "07",
            "titre": "Bilan d'hépatite",
            "description": "Dépistage et suivi des hépatites pour un traitement précoce."
        },
        {
            "numero": "08",
            "titre": "Bilan de prostate",
            "description": "Examen pour détecter les anomalies de la prostate et prévenir les cancers."
        },
        {
            "numero": "09",
            "titre": "Vente de produits naturels",
            "description": "Produits naturels pour améliorer votre santé et renforcer votre bien-être."
        },
        {
            "numero": "10",
            "titre": "Conseil sur votre bien-être",
            "description": "Accompagnement personnalisé pour optimiser votre santé et votre qualité de vie."
        }
    ]
    return (
        <section id="formations" className='py-16 flex flex-col items-center px-4'>

            {/* En-tête */}
            <div className='flex flex-col items-center gap-2 mb-12'>
                <p className='uppercase tracking-widest text-green-600 font-semibold text-sm flex items-center gap-2'>
                    <span className='w-6 h-px bg-green-400 inline-block'></span>
                    Nos Services
                    <span className='w-6 h-px bg-green-400 inline-block'></span>
                </p>
                <h2 className='font-marcellus text-3xl text-center text-green-900'>Nous intervenons dans ces différents cas</h2>
                <div className='w-12 h-1 rounded-full bg-green-500 mt-1'></div>
            </div>

            {/* Grille des services */}
            <div className='max w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {services.map((element, index) => (
                    <motion.div
                        key={element.numero}
                        variants={Animations.bottomToTop({ duration: 0.2 * index + 0.2 })}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className='relative bg-white border border-gray-100 hover:border-green-300 rounded-2xl p-6 shadow-sm hover:shadow-lg flex flex-col gap-3'
                    >
                        {/* Badge */}
                        <div className='w-10 h-10 rounded-xl bg-green-700 group-hover:bg-green-800 flex items-center justify-center shrink-0'>
                            <span className='text-white text-sm font-bold font-bricolage'>{element.numero}</span>
                        </div>

                        <h3 className='text-green-900 font-bold font-bricolage text-base leading-snug'>{element.titre}</h3>
                        <p className='text-gray-500 text-sm leading-relaxed'>{element.description}</p>
                    </motion.div>
                ))}
            </div>
            <div className='w-full bg-green-50 mt-16 py-16 flex flex-col items-center px-4'>
                <div className='max w-full flex flex-col items-center'>

                    {/* En-tête */}
                    <div className='flex flex-col items-center gap-3 mb-10'>
                        <motion.img
                            src="/icons/solution.png"
                            alt=""
                            variants={Animations.scale({ duration: 0.5 })}
                            initial="hidden"
                            whileInView="show"
                            className='h-14'
                        />
                        <p className='uppercase tracking-widest text-green-600 font-semibold text-sm flex items-center gap-2'>
                            <span className='w-6 h-px bg-green-400 inline-block'></span>
                            Maladies traitées
                            <span className='w-6 h-px bg-green-400 inline-block'></span>
                        </p>
                        <h2 className='font-marcellus text-3xl text-center text-green-900'>
                            Nous traitons totalement ces maladies
                        </h2>
                        <div className='w-12 h-1 rounded-full bg-green-500 mt-1'></div>
                    </div>

                    {/* Tags */}
                    <div className='flex flex-wrap justify-center gap-3'>
                        {maladies.map((element, index) => (
                            <motion.div
                                key={element}
                                variants={Animations.scale({ duration: 0.1 * index })}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className='group flex items-center gap-2.5 px-5 py-2.5 bg-white hover:bg-red-600 border border-red-200 hover:border-red-600 rounded-full shadow-sm hover:shadow-md cursor-default'
                            >
                                <div className='h-2 w-2 rounded-full bg-red-500 group-hover:bg-white shrink-0'></div>
                                <p className='text-red-700 group-hover:text-white text-sm font-medium'>{element}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Services