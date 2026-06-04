"use client"
import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import Animations from './utils/item'
const Produits = () => {
    const popupRef = useRef<HTMLDivElement>(null)

    const produits = [
        {
            "image": "produit-1.png",
            "name": "SINUS",
            "description": "Remède contre les *sinusites*",
            "full_description": "Sinus est un remède naturel conçu pour soulager les symptômes des *sinusites*. En réduisant l'inflammation et en facilitant la respiration, il aide à éliminer les douleurs liées aux *sinusites chroniques* ou aiguës. L'efficacité est notable dès les premières utilisations, avec une amélioration significative après deux semaines de traitement."
        },
        {
            "image": "produit-2.png",
            "name": "SPERMO",
            "description": "Remède contre *l'infertilité masculine*",
            "full_description": "SPERMO est un traitement naturel visant à améliorer la *fertilité masculine*. Il stimule la production de *spermatozoïdes* et améliore leur motilité, augmentant ainsi les chances de conception. Un traitement de 30 jours est recommandé pour obtenir des résultats optimaux."
        },
        {
            "image": "produit-3.png",
            "name": "INFECTICIDE",
            "description": "Lutte contre les *infections de tout genre : Brûlures vaginales, Syphilis, Gonorrhée, Plaies intestinales*",
            "full_description": "INFECTICIDE est un puissant antibactérien naturel qui combat les *infections vaginales*, *intestinales*, et d'autres origines. Il aide à soulager les symptômes douloureux tout en stimulant les défenses naturelles de l'organisme pour prévenir les récidives. Un traitement d'un mois est recommandé pour une guérison complète."
        },
        {
            "image": "produit-4.png",
            "name": "GRAND PURIFICATEUR",
            "description": "Purifie l'organisme, efficace contre les *hémorroïdes internes et externes*",
            "full_description": "Le GRAND PURIFICATEUR est un remède naturel destiné à purifier l'organisme en agissant sur les *hémorroïdes internes* et *externes*. Il aide à réduire l'inflammation, soulage la douleur, favorise la guérison des tissus endommagés et *le retour normal du cycle menstruel chez les femmes*. Un soulagement notable se fait sentir après quelques jours d'utilisation."
        },
        {
            "image": "produit-5.png",
            "name": "STÉFINISH",
            "description": "Remède efficace contre *l'infertilité féminine*",
            "full_description": "STÉFINISH est un remède naturel conçu pour lutter contre *l'infertilité féminine* en régulant le cycle menstruel et en stimulant la *fertilité*. Il améliore la santé reproductive générale, avec des résultats visibles après un mois de traitement."
        },
        {
            "image": "produit-6.png",
            "name": "FER DE LANCE",
            "description": "Lutte contre *la faiblesse sexuelle et l'éjaculation précoce*",
            "full_description": "FER DE LANCE est un stimulant naturel pour les hommes, aidant à combattre la *faiblesse sexuelle* et *l'éjaculation précoce*. Il améliore les performances sexuelles et la confiance en soi, avec des effets visibles dès les premières prises."
        },
        {
            "image": "produit-7.png",
            "name": "HÉPATO BILIAIRE",
            "description": "Remède contre *l'hépatite A, B & C, les problèmes biliaires, et le paludisme*",
            "full_description": "HÉPATO BILIAIRE est un remède naturel puissant qui aide à soigner les affections du *foie* et assure la bonne sécretion de la *vésicule biliaire*, y compris *l'hépatite* et le *paludisme*. Il purifie le sang et allège les fatigues quotidiennes, avec des résultats notables après un mois de traitement."
        },
        {
            "image": "produit-8.png",
            "name": "MERCI TONTON",
            "description": "Solution contre *l'érection molle chez les hommes*",
            "full_description": "MERCI TONTON est une solution naturelle conçue pour aider les hommes à retrouver des *érections fermes* et durables. Ce remède améliore la circulation sanguine dans la région génitale et renforce les muscles du plancher pelvien, avec des résultats visibles dès la première semaine d'utilisation."
        },
        {
            "image": "produit-9.png",
            "name": "FRIGIDOS",
            "description": "Intervient dans les cas de *manque de sensation lors des rapports sexuels chez les femmes*",
            "full_description": "FRIGIDOS est un remède naturel qui stimule les *sensations* et la *libido* chez les femmes. Il améliore la réponse sexuelle en augmentant le flux sanguin vers les organes génitaux, aidant ainsi à retrouver une vie sexuelle épanouie. Les premiers résultats apparaissent dès le debut d'utilisation."
        },
        {
            "image": "produit-10.png",
            "name": "HEROS",
            "description": "Soigne *les infections intestinales*",
            "full_description": "HEROS est un remède efficace contre les *infections intestinales*, aidant à réduire les inflammations et à réguler le transit intestinal. Il favorise la guérison des parois intestinales et améliore la santé digestive générale. Un traitement de 15 jours est recommandé pour une guérison complète."
        },
        {
            "image": "produit-11.png",
            "name": "ULCERURE",
            "description": "Solution contre *les ulcères sous toutes leurs formes*",
            "full_description": "ULCERURE est un traitement naturel qui agit rapidement pour soulager et guérir les *ulcères gastriques* et *duodénaux*. Il apaise les parois de l'estomac, réduit l'acidité et favorise la cicatrisation. Les premiers signes de guérison apparaissent après une semaine d'utilisation."
        }
        ,
        {
            "image": "produit-13.png",
            "name": "NEURO FORCE",
            "description": "Solution idéale pour *les crampes musculaires*",
            "full_description": "NEURO FORCE est un traitement naturel conçu pour eviter et soulager les *crampes musculaires*. Il aide à détendre les muscles, réduire la fréquence et l'intensité des crampes, et favoriser une récupération rapide. Ce produit offre un soulagement efficace dès les premières utilisations, améliorant le confort musculaire et la mobilité."
        },
        {
            "image": "produit-12.png",
            "name": "HERNICIDE",
            "description": "Remède très efficace contre *l'hernie*",
            "full_description": "HERNICIDE est une solution naturelle hautement efficace contre *les hernies*. Il agit en réduisant *l'inflammation et en renforçant les muscles abdominaux*. Ce produit permet de soulager rapidement la douleur et de prévenir les complications liées aux hernies, offrant un traitement durable et sans effets secondaires."
        },
        {
            "image": "produit-14.png",
            "name": "HEMOFINE",
            "description": "Remède très efficace pour la perte du *ventre* et du *poids*",
            "full_description": "Ce remède naturel est conçu pour aider efficacement à la *perte de poids*, en ciblant particulièrement *la graisse abdominale*. Il agit en accélérant le métabolisme, en réduisant l'accumulation de graisses autour du ventre et en facilitant l'élimination des toxines. Grâce à ses propriétés coupe-faim et brûle-graisses, il favorise un amincissement progressif et durable. Idéal pour retrouver un ventre plat, ce produit soutient également la digestion et l’équilibre du corps sans provoquer d'effets secondaires."
        },
          {
        "image": "Déchargeur.png",
        "name": "DÉCHARGEUR",
        "description": "Remède naturel pour le *foie*",
        "full_description": "Déchargeur est une formule naturelle conçue pour purifier le foie et favoriser l’élimination des toxines. Recommandé en cas de fatigue hépatique, de pieds lourds, d’œdèmes des jambes ou de consommation régulière d’alcool, il aide à soutenir le bon fonctionnement du foie et améliore le bien-être général."
    },
    {
        "image": "Collyre CEMENA.png",
        "name": "COLLYRE CEMENA",
        "description": "Soin naturel pour les *yeux*",
        "full_description": "Collyre CEMENA est une formule naturelle conçue pour soulager, protéger et améliorer la santé des yeux. Recommandé en cas de vision floue, fatigue oculaire, sécheresse, glaucome ou début de cataracte, il aide à préserver le confort visuel et à maintenir une bonne santé oculaire au quotidien."
    },
    {
        "image": "Fibrocure.png",
        "name": "FIBROCURE",
        "description": "Solution naturelle contre les *fibromes*",
        "full_description": "Fibrocure est un produit naturel spécialement conçu pour les femmes souffrant de fibromes et d’endométriose. Grâce à sa composition à base de plantes africaines, il aide à soulager les douleurs, réduire les inconforts et améliorer le bien-être féminin."
    },

    {
        "image": "Régulateur Liquide.png",
        "name": "RÉGULATEUR LIQUIDE",
        "description": "Solution naturelle pour la *tension artérielle*",
        "full_description": "Régulateur Liquide est une solution naturelle à base d’ail et de citronnelle, conçue pour aider à réguler la tension artérielle. Il contribue à apaiser les troubles liés à l’hypotension et à l’hypertension, tout en favorisant le bien-être général et une meilleure circulation sanguine."
    },
    {
        "image": "Régulateur Poudre.png",
        "name": "RÉGULATEUR POUDRE",
        "description": "Remède naturel pour une *tension stable*",
        "full_description": "Régulateur Poudre est un remède naturel formulé à base d’ail et d’anone. Il aide à maintenir une tension stable, réduit les malaises liés aux variations de tension et soutient l’équilibre cardiovasculaire au quotidien."
    },
    {
        "image": "Merci Tonton.png",
        "name": "MERCI TONTON",
        "description": "Solution naturelle pour la *vigueur masculine*",
        "full_description": "Merci Tonton est un complément naturel conçu pour accompagner les hommes confrontés à l’éjaculation précoce et aux troubles de l’érection. Sa formule aide à améliorer les performances masculines, renforcer l’endurance, soutenir une érection plus ferme et favoriser une meilleure confiance lors des rapports."
    },
    {
        "image": "Puissance 3.png",
        "name": "PUISSANCE 3",
        "description": "Complément naturel pour les *performances masculines*",
        "full_description": "Puissance 3 est un complément naturel conçu pour améliorer les performances masculines. Il aide à lutter contre l’éjaculation précoce, favorise l’endurance et contribue à une meilleure satisfaction lors des rapports sexuels."
    },
    {
        "image": "Coeur.png",
        "name": "CŒUR",
        "description": "Soutien naturel pour le *bien-être cardiovasculaire*",
        "full_description": "Cœur est un produit fabriqué à base de Miel de Manuka, conçu pour soutenir le bien-être cardiovasculaire. Il contribue à apaiser les inconforts cardiaques, favorise une meilleure circulation et participe au maintien d’une bonne santé du système cardiovasculaire."
    }

    ]

    const [currentProduit, setCurrentProduit] = useState<{
        image: string;
        name: string;
        description: string;
        full_description: string;
    } | null>(null)


    const [isPopupVisible, setPopupVisible] = useState(false)

    useEffect(() => {
        // Fonction de gestion de l'événement clavier
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                console.log(isPopupVisible)
                console.log('Touche Échap pressée');
                setPopupVisible(false)
                console.log(isPopupVisible)
                document.body.style.overflow = 'auto';


            }

            if (event.key === 'Backspace') {
                console.log(isPopupVisible)

                console.log('Touche Retour pressée');
                setPopupVisible(false)
                console.log(isPopupVisible)
                document.body.style.overflow = 'auto';

            }
        };

        // Ajoute l'écouteur de l'événement "keydown"
        window.addEventListener('keydown', handleKeyDown);

        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                document.body.style.overflow = 'auto';

                setPopupVisible(false)
            }
        }


        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);

            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    useEffect(() => {
        console.log('isPopupVisible:', isPopupVisible);
    }, [isPopupVisible]);

    return (
        <section id='produits' className='relative flex  justify-center items-center py-10 my-10'>
            <div className={`fixed top-0 left-0 ${isPopupVisible ? "flex" : "hidden"} justify-center items-end md:items-center h-full w-full bg-black/60 backdrop-blur-sm z-50`}>
                <motion.div
                    ref={popupRef}
                    variants={Animations.bottomToTop({ duration: 0.25 })}
                    initial="hidden"
                    whileInView="show"
                    exit="hidden"
                    className='flex flex-col w-full md:w-[520px] max-h-[90vh] md:max-h-[85vh] bg-white md:rounded-2xl rounded-t-3xl overflow-hidden shadow-2xl'>

                    {currentProduit && (
                        <>
                            {/* Header avec image */}
                            <div className='relative bg-green-700 flex flex-col items-center pt-8 pb-16'>
                                {/* Bouton fermer */}
                                <button
                                    onClick={() => { document.body.style.overflow = 'auto'; setPopupVisible(false); }}
                                    className='absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30'
                                >
                                    <img src="/icons/close.png" alt="" className='h-4 brightness-0 invert' />
                                </button>

                                {/* Badge */}
                                <span className='text-green-200 text-xs uppercase tracking-widest font-semibold mb-3'>CEMENA-TOGO</span>

                                {/* Image produit */}
                                <img
                                    src={`/produits/${currentProduit.image}`}
                                    alt=""
                                    className='h-36 drop-shadow-2xl'
                                />
                            </div>

                            {/* Contenu scrollable */}
                            <div className='flex flex-col overflow-y-auto'>

                                {/* Nom du produit */}
                                <div className='px-6 pt-6 pb-4 border-b border-gray-100'>
                                    <h2 className='text-green-800 text-2xl font-bold font-bricolage'>{currentProduit.name}</h2>
                                    <p className='text-green-600 text-xs uppercase tracking-widest mt-1'>Remède naturel</p>
                                </div>

                                {/* Description */}
                                <div className='px-6 py-5'>
                                    <p className='text-gray-600 leading-relaxed text-sm'>
                                        {currentProduit.full_description.split("*").map((part, index) => (
                                            <span key={index} className={index % 2 === 1 ? "text-red-600 font-semibold" : ""}>
                                                {part}
                                            </span>
                                        ))}
                                    </p>
                                </div>

                                {/* Boutons */}
                                <div className='grid grid-cols-2 gap-3 px-6 pb-6'>
                                    <a
                                        href="tel:+22893452172"
                                        target='_blank'
                                        className='flex justify-center items-center gap-2 bg-green-700 hover:bg-green-900 text-white rounded-xl py-3.5 font-semibold font-bricolage text-sm'
                                    >
                                        <img src="/icons/white-phone.png" alt="" className='h-4' />
                                        Appeler
                                    </a>
                                    <a
                                        href={`https://wa.me/22893452172?text=Bonjour, j'ai besoin de ${currentProduit.name} pour mes soins. C'est disponible ?`}
                                        target='_blank'
                                        className='flex justify-center items-center gap-2 bg-white hover:bg-green-50 border-2 border-green-600 text-green-700 rounded-xl py-3.5 font-semibold font-bricolage text-sm'
                                    >
                                        <img src="/icons/whatsapp.png" alt="" className='h-5' />
                                        WhatsApp
                                    </a>
                                </div>

                            </div>
                        </>
                    )}
                </motion.div>
            </div>
            <div className='w-full flex flex-col items-center px-4'>
                <div className='flex flex-col items-center justify-center mb-10 gap-2'>
                    <div className='flex items-center gap-2'>
                        <img src="/utils/feuille.png" alt="" className='h-8' />
                        <p className='uppercase text-sm tracking-widest text-green-600 font-semibold'>Nos Produits</p>
                        <img src="/utils/feuille.png" alt="" className='h-8 scale-x-[-1]' />
                    </div>
                    <h2 className='font-marcellus text-3xl text-center text-green-900'>Des remèdes naturels pour votre santé</h2>
                    <div className='w-16 h-1 rounded-full bg-green-500 mt-1'></div>
                </div>
                <div className='max w-full mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-20 pt-14'>
                    {
                        produits.map((element) => (
                            <button onClick={() => {
                                document.body.style.overflow = 'hidden';
                                setPopupVisible(!isPopupVisible)
                                setCurrentProduit(element)
                            }} key={element.name} className='relative group flex flex-col items-center rounded-2xl overflow-visible h-full'>

                                {/* Image flottante */}
                                <motion.img
                                    src={"/produits/" + element.image}
                                    alt=""
                                    variants={Animations.scale({ duration: 0.3 * produits.indexOf(element) })}
                                    initial="hidden"
                                    whileInView="show"
                                    className='absolute -top-10 h-24 z-10 group-hover:scale-110 drop-shadow-lg'
                                />

                                {/* Corps de la carte */}
                                <div className='w-full h-full flex flex-col items-center rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl border border-green-100 group-hover:border-green-300'>

                                    {/* Bandeau vert haut */}
                                    <div className='w-full bg-green-700 group-hover:bg-green-800 pt-14 pb-3 px-3 flex flex-col items-center gap-1'>
                                        <p className='text-white font-bricolage font-bold text-sm leading-tight text-center'>{element.name}</p>
                                    </div>

                                    {/* Description + bouton */}
                                    <div className='w-full bg-white flex-1 flex flex-col items-center justify-between gap-3 px-3 py-3'>
                                        <p className='text-sm text-gray-500 text-center leading-snug'>
                                            {element.description.split("*").map((element2, i) => (
                                                <span key={i} className={i % 2 === 1 ? "text-red-500 font-semibold" : ""}>{element2}</span>
                                            ))}
                                        </p>
                                        <span className='w-full py-2 text-xs font-semibold text-green-700 group-hover:text-green-900 border-2 border-green-600 group-hover:border-green-900 rounded-xl'>
                                            Voir détails
                                        </span>
                                    </div>

                                </div>
                            </button>
                        ))
                    }
                </div>

            </div>


        </section>
    )
}

export default Produits