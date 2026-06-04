import React from 'react'

const APropos = () => {
    return (
        <section id="a-propos" className='flex justify-center py-16 px-6'>
            <div className='max flex flex-col items-center'>
                <p className='font-medium text-green-600'>A PROPOS DE CEMENA-TOGO</p>
                <div className='my-4 space-y-3'>
                    <p className='font-marcellus text-3xl text-center'>
                        Bienvenue chez <span className='font-bold text-green-700'>CEMENA-TOGO</span>, votre Centre d'Etude en Médecine Naturelle dédié à votre bien-être.
                    </p>
                    <p>
                        Fondé avec la passion de promouvoir des approches <strong>holistiques</strong> et respectueuses de la santé, nous vous aidons dans votre bien être par la <strong>santé verte</strong>. Depuis notre agrément par le ministère de la Santé et de l'Hygiène le <strong>15 juillet 2015</strong>, sous le numéro <strong>0450/MATDCL-SGDDCA</strong>, nous nous engageons à fournir des <strong>soins de qualité</strong>, basés sur des pratiques naturelles et éprouvées. Notre équipe de <strong>professionnels qualifiés</strong> met tout en œuvre pour vous accompagner sur le chemin de la santé et de la vitalité.
                    </p>
                    <p>
                        Nous vous invitons à explorer notre site pour découvrir nos <strong>services</strong>, nos <strong>valeurs</strong>, les <strong>maladies que nous traitons</strong> et nos <strong>produits</strong>.
                    </p>
                    <p className='font-marcellus text-green-700 text-2xl text-center'>Ensemble, cultivons votre bien-être !</p>
                </div>
            </div>
        </section>
    )
}

export default APropos
