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
        <section id="formations" className='my-10 flex flex-col items-center'>
            <div className='my-6 text-center'>
                <div className='flex items-center justify-center'>
                    <img src="/utils/feuille.png" alt="" className='h-10' />
                    <p className=' uppercase text-lg text-green-600 font-medium'>Nos SERVICES</p></div>
                <p className='font-marcellus text-2xl'>Nous intervenons dans ces differents cas</p>
            </div>
            <div className=' max grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-2'>
                {
                    services.map((element) => (
                        <motion.a
                            variants={Animations.bottomToTop({ duration: 0.3 * services.indexOf(element) + 0.2 })}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            key={element.numero} className='p-2'> <div

                                className=' h-full
                                border hover:border-green-600 rounded-md
                                space-y-4 p-6 
                                transition-all duration-200'>

                                <h3 className='font-semibold font-bricolage text-green-600'>{element.numero}.</h3>

                                <p className='text-xl'>{element.titre}</p>
                                <p className='text-zinc-600'>{element.description}</p>

                            </div>
                        </motion.a>
                    ))
                }
            </div>
            <div className='max my-12 flex flex-col items-center'>
                <img src="/icons/solution.png" alt="" className='h-16' />
                <p className='text-center text-2xl font-marcellus  
                my-4'>Nous traitons totalement les maladies suivantes</p>
                <div className='h-px w-28 bg-zinc-300 mb-4'></div>
                <div className='  flex flex-wrap justify-center gap-2'>
                    {maladies.map((element) => (
                        <motion.div
                            key={element}
                            variants={Animations.scale({ duration: 0.1 * maladies.indexOf(element), })}
                            initial="hidden"
                            whileInView="show"
                            className='
                      flex
                        px-6 py-3 space-x-2
                        bg-red-100 border border-red-600 rounded-xl'>
                            <img src="/icons/maladie.png" alt="" className='h-6' />
                            <p>{element}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Services