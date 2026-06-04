import React from 'react'
import AppBar from './app_bar'
import { motion } from 'framer-motion'
import Animations from './utils/item'

const Presentation = () => {
    return (
        <section id='' className="flex justify-center bg-gradient-to-br from-green-50/70 via-white to-green-50/20">
            <div className='relative w-full flex justify-center overflow-hidden'>

                {/* Décoration */}
                <img src="/utils/deco-2.png" alt="" className='absolute -top-16 z-30 rotate-180 h-96 opacity-10 pointer-events-none' />

                <div className='w-full flex flex-col items-center'>
                    <AppBar />

                    <div className='max w-full md:flex items-center justify-between py-10 md:py-16'>

                        {/* Colonne gauche */}
                        <div className='w-full md:w-1/2 flex flex-col gap-7 px-6'>

                            {/* Badge agrément */}
                            <motion.div
                                variants={Animations.bottomToTop({ duration: 0.3 })}
                                initial="hidden"
                                whileInView="show"
                                className='self-start border-2 border-dashed border-green-600 rounded-xl px-5 py-3 flex flex-col items-center gap-0.5'
                            >
                                <span className='text-green-700 text-xs font-bold uppercase tracking-widest'>Agréé · 2015</span>
                                <span className='text-green-600 text-xs font-medium'>Ministère de la Santé</span>
                            </motion.div>

                            {/* Titre */}
                            <div className='space-y-3'>
                                <motion.p className='uppercase tracking-widest text-green-600 text-sm font-semibold flex items-center gap-2'>
                                    <span className='w-6 h-px bg-green-400 inline-block'></span>
                                    Bienvenu chez CEMENA-TOGO
                                </motion.p>
                                <motion.h1
                                    variants={Animations.bottomToTop({ duration: 0.5 })}
                                    initial="hidden"
                                    whileInView="show"
                                    className="text-4xl md:text-5xl font-extralight font-marcellus leading-tight"
                                >
                                    Des solutions <span className='text-green-700'>naturelles</span> pour votre Santé
                                </motion.h1>
                            </div>

                            {/* Description */}
                            <motion.p
                                variants={Animations.bottomToTop({ duration: 0.8 })}
                                initial="hidden"
                                whileInView="show"
                                className='text-gray-600 leading-relaxed max-w-md'
                            >
                                Prenez soin de votre bien-être grâce à nos solutions naturelles, alliant tradition et innovation pour une santé durable.
                            </motion.p>

                            {/* CTAs */}
                            <motion.div
                                variants={Animations.bottomToTop({ duration: 1.0 })}
                                initial="hidden"
                                whileInView="show"
                                className='flex flex-wrap gap-3'
                            >
                                <a href='#contact' className="font-poppins text-white px-8 py-3.5 bg-green-700 hover:bg-green-900 rounded-full font-medium">
                                    Contactez-nous
                                </a>
                                <a href='#produits' className="font-poppins text-green-700 hover:text-green-900 px-8 py-3.5 border-2 border-green-600 hover:border-green-900 hover:bg-green-50 rounded-full font-medium">
                                    Nos produits
                                </a>
                            </motion.div>

                            {/* Séparateur */}
                            <div className='h-px bg-gray-100 w-full'></div>

                            {/* Stats */}
                            <motion.div
                                variants={Animations.bottomToTop({ duration: 1.2 })}
                                initial="hidden"
                                whileInView="show"
                                className='flex items-center gap-6 flex-wrap'
                            >
                                <div className='flex items-center gap-3'>
                                    <img src="/utils/satisfieds.png" alt="" className='h-10' />
                                    <div>
                                        <p className='text-2xl font-bold font-bricolage text-green-800'>1300+</p>
                                        <p className='text-xs text-gray-500 font-marcellus'>Clients satisfaits</p>
                                    </div>
                                </div>
                                <div className='w-px h-10 bg-gray-200'></div>
                                <div>
                                    <p className='text-2xl font-bold font-bricolage text-green-800'>27+</p>
                                    <p className='text-xs text-gray-500 font-marcellus'>Maladies traitées</p>
                                </div>
                                <div className='w-px h-10 bg-gray-200'></div>
                                <div>
                                    <p className='text-2xl font-bold font-bricolage text-green-800'>10+</p>
                                    <p className='text-xs text-gray-500 font-marcellus'>Services proposés</p>
                                </div>
                            </motion.div>

                        </div>

                        {/* Colonne droite — images flush à droite du max */}
                        <div className='w-full md:w-1/2 flex justify-end mt-10 md:mt-0'>
                            <div className='flex gap-2'>
                                <div className='space-y-2 mt-10'>
                                    <motion.img
                                        src="/presentation/m-1.jpeg" alt=""
                                        variants={Animations.bottomToTop({ duration: 0.5, inverse: true })}
                                        initial="hidden"
                                        whileInView="show"
                                        className='rounded-2xl rounded-bl-[60px] w-52 h-52 object-cover shadow-lg'
                                    />
                                    <motion.img
                                        src="/presentation/m-2.jpeg" alt=""
                                        variants={Animations.bottomToTop({ duration: 0.5 })}
                                        initial="hidden"
                                        whileInView="show"
                                        className='rounded-2xl rounded-tl-[60px] w-52 h-64 object-cover shadow-lg'
                                    />
                                </div>
                                <div className='space-y-2'>
                                    <motion.img
                                        src="/presentation/m-3.jpeg" alt=""
                                        variants={Animations.leftToRight({ duration: 0.5, inverse: true })}
                                        initial="hidden"
                                        whileInView="show"
                                        className='rounded-2xl rounded-tr-[60px] w-52 h-64 object-cover shadow-lg'
                                    />
                                    <motion.img
                                        src="/presentation/m-4.jpeg" alt=""
                                        variants={Animations.scale({ duration: 0.5 })}
                                        initial="hidden"
                                        whileInView="show"
                                        className='rounded-2xl rounded-br-[60px] w-52 h-52 object-cover shadow-lg'
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Presentation
