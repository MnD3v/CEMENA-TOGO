import { motion } from 'framer-motion'
import React from 'react'
import Animations from './utils/item'

const APropos = () => {
    return (
        <section id="a-propos" className='flex  justify-center p-3'>
            <div className='max flex flex-col items-center'>
                <p className='font-medium text-green-600'>A PROPOS DE CEMENA-TOGO</p>
                <div className='my-4 space-y-3 text-center'>
                    <p className='font-marcellus text-3xl '>
                        Bienvenue chez CEMENA-TOGO, votre Centre d'Etude en Médecine Naturelle dédié à votre bien-être.

                    </p>

                    <p>
                        Fondé avec la passion de promouvoir des approches holistiques et respectueuses de la santé, nous vous aidons dans votre bien être par la santé verte.

                        Depuis notre agrément par le ministère de la Santé et de l'Hygiène le 15 juillet 2015, sous le numéro 0450/MATDCL-SGDDCA, nous nous engageons à fournir des soins de qualité, basés sur des pratiques naturelles et éprouvées. Notre équipe de professionnels qualifiés met tout en œuvre pour vous accompagner sur le chemin de la santé et de la vitalité.
                    </p>
                    <p className=''>
                        Nous vous invitons à explorer notre site pour découvrir nos services, nos valeurs, les maladies que nous traitons et nos produits.
                    </p>
                    <p className='font-marcellus text-green-700 text-2xl'>Ensemble, cultivons votre bien-être !</p>
                </div>
            </div>
        </section>
    )
}

export default APropos