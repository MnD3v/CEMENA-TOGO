"use client"
import { motion } from 'framer-motion'
import React from 'react'
import Animations from './utils/item'

const Contact = () => {
    return (
        <section id="contact" className='relative flex justify-center py-20 bg-green-950 overflow-hidden'>

            {/* Décoration fond */}
            <div className='absolute bottom-0 right-0 opacity-10 pointer-events-none'>
                <img src="/utils/feuille-footer.png" alt="" className='h-80 md:h-[480px]' />
            </div>
            <div className='absolute top-0 left-0 opacity-10 pointer-events-none rotate-180'>
                <img src="/utils/feuille-footer.png" alt="" className='h-60 md:h-80' />
            </div>

            <div className='relative z-10 max w-full px-4'>

                {/* En-tête */}
                <div className='flex flex-col items-center gap-2 mb-14'>
                    <p className='uppercase tracking-widest text-green-400 font-semibold text-sm flex items-center gap-2'>
                        <span className='w-6 h-px bg-green-500 inline-block'></span>
                        Contactez-nous
                        <span className='w-6 h-px bg-green-500 inline-block'></span>
                    </p>
                    <h2 className='font-marcellus text-3xl md:text-4xl text-center text-white'>Nous sommes à votre écoute</h2>
                    <p className='text-green-300 text-center max-w-md text-sm mt-1'>
                        Vous avez des questions sur nos produits ou services ? Contactez-nous directement.
                    </p>
                    <div className='w-12 h-1 rounded-full bg-green-500 mt-2'></div>
                </div>

                {/* Cartes */}
                <div className='flex flex-wrap justify-center gap-5'>

                    {/* WhatsApp */}
                    <motion.a
                        href="https://wa.me/22893452172"
                        target='_blank'
                        variants={Animations.bottomToTop({ duration: 0.3 })}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className='group w-full sm:w-72 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-green-500/60 rounded-2xl p-7 flex flex-col items-center gap-5 backdrop-blur-sm cursor-pointer'
                    >
                        <div className='h-16 w-16 rounded-2xl bg-green-500/20 border border-green-500/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-green-500/30'>
                            <img src="/icons/whatsapp.png" alt="" className='h-9' />
                        </div>
                        <div className='text-center'>
                            <h3 className='text-white text-lg font-semibold font-bricolage'>WhatsApp</h3>
                            <p className='text-green-400 text-sm mt-1'>Écrivez-nous à tout moment</p>
                            <p className='text-white font-bold text-xl mt-3'>+228 93 45 21 72</p>
                        </div>
                        <div className='w-full py-3 bg-green-600 group-hover:bg-green-500 text-white text-center rounded-xl font-semibold text-sm'>
                            Envoyer un message
                        </div>
                    </motion.a>

                    {/* Téléphone */}
                    <motion.a
                        href="tel:+22893452172"
                        variants={Animations.bottomToTop({ duration: 0.6 })}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className='group w-full sm:w-72 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-green-500/60 rounded-2xl p-7 flex flex-col items-center gap-5 backdrop-blur-sm cursor-pointer'
                    >
                        <div className='h-16 w-16 rounded-2xl bg-green-500/20 border border-green-500/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-green-500/30'>
                            <img src="/icons/call.png" alt="" className='h-9' />
                        </div>
                        <div className='text-center'>
                            <h3 className='text-white text-lg font-semibold font-bricolage'>Téléphone</h3>
                            <p className='text-green-400 text-sm mt-1'>Appelez-nous directement</p>
                            <p className='text-white font-bold text-xl mt-3'>+228 93 45 21 72</p>
                        </div>
                        <div className='w-full py-3 bg-green-600 group-hover:bg-green-500 text-white text-center rounded-xl font-semibold text-sm'>
                            Appeler maintenant
                        </div>
                    </motion.a>

                    {/* Adresse & Horaires */}
                    <motion.div
                        variants={Animations.bottomToTop({ duration: 0.9 })}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className='w-full sm:w-72 bg-white/5 border border-white/10 rounded-2xl p-7 flex flex-col gap-5 backdrop-blur-sm'
                    >
                        <div className='h-16 w-16 rounded-2xl bg-green-500/20 border border-green-500/30 flex items-center justify-center'>
                            <img src="/icons/map.png" alt="" className='h-9' style={{filter: 'invert(48%) sepia(79%) saturate(476%) hue-rotate(86deg) brightness(118%) contrast(119%)'}} />
                        </div>
                        <div>
                            <h3 className='text-white text-lg font-semibold font-bricolage'>Notre adresse</h3>
                            <p className='text-green-200 text-sm mt-2 leading-relaxed'>
                                Quartier SOS, derrière l'église AD Sinaï, sur la route de Ketao, avant le pont.
                            </p>
                        </div>
                        <div className='border-t border-white/10 pt-4 space-y-2'>
                            <p className='text-green-400 text-xs font-semibold uppercase tracking-widest mb-3'>Horaires d'ouverture</p>
                            <div className='flex justify-between text-sm'>
                                <span className='text-green-300'>Lun – Ven</span>
                                <span className='text-white font-semibold'>08:00 – 19:00</span>
                            </div>
                            <div className='flex justify-between text-sm'>
                                <span className='text-green-300'>Sam – Dim</span>
                                <span className='text-red-400 font-semibold'>Fermé</span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default Contact
