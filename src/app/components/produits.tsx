import { motion } from 'framer-motion'
import React from 'react'
import Animations from './utils/item'

const Produits = () => {
    const produits = [
        {
            name: "Sinus",
            description: "Remede contre les *sinusites*",
            full_description: ""
        }, {
            name: "Hepatus",
            description: "Remede contre l'*hepatite B*",
            full_description: ""
        }, {
            name: "Menopus",
            description: "Previent la *menopose precoce*",
            full_description: ""
        }, {
            name: "Hernus",
            description: "Lutte contre le developpement de *l'herni*",
            full_description: ""
        }, {
            name: "Athmus",
            description: "Remede efficace contre *l'asthme*",
            full_description: ""
        }, {
            name: "Ulcerus",
            description: "Traite complètement les *ulcères*",
            full_description: ""
        }, {
            name: "Palus",
            description: "Previent et Guerit le *paludisme*",
            full_description: ""
        },
    ]

    return (
        <div className='flex  justify-center py-10 my-10 '>
            <div className='m-2'>
                <div className='flex items-center justify-center mb-5'>
                    <img src="/utils/feuille.png" alt="" className='h-10' />
                    <p className=' uppercase text-lg text-green-600 font-medium '>Nos PRODUITS</p></div>
                <div className='max grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1'>
                    {
                        produits.map((element) => (
                            <a key={element.name} href='' className='relative group
                           flex flex-col items-center justify-center
                            my-6
                             bg-white hover:bg-green-50 border-2 border-green-300 rounded-2xl  '>
                                <motion.img src="/produits/produit-1.png" alt=""

                                    variants={Animations.bottomToTop({ duration: 0.3 * produits.indexOf(element), })}
                                    initial="hidden"
                                    whileInView="show"
                                    className='absolute  -top-8  h-24 group-hover:scale-125' />
                                <div className='w-full  flex flex-col items-center p-2 mt-16 text-center'>

                                    <p className='text-xl text-green-800  font-bricolage font-semibold '>{element.name}</p>
                                    <p>{element.description.split("*").map((element2) => (<span className={`${element.description.split("*").indexOf(element2) % 2 === 1 ? "text-red-600 font-semibold" : "text-black"}`}>{element2} </span>))}</p>
                                    <button onClick={() => {

                                    }} className='text-white hover:text-white w-full py-3 bg-green-400 hover:bg-green-900 border border-white hover:ring ring-green-900 rounded-xl'>Voir</button>
                                </div>

                            </a>
                        ))
                    }
                </div>

            </div>

        </div>
    )
}

export default Produits