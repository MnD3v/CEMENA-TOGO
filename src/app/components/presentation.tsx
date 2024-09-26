import React from 'react'
import AppBar from './app_bar'
import { motion } from 'framer-motion'
import Animations from './utils/item'

const Presentation = () => {
    return (
        <section id='' className="flex justify-center bg-cover">
            <div className='relative w-full flex justify-center overflow-hidden'>
                <div className='w-full flex flex-col items-center '>
                    {/* decoration */}
                    <img src="/utils/deco-2.png" alt="" className='absolute -top-16 z-30 rotate-180 h-96 opacity-10' />
                    {/* decoration */}

                    <AppBar></AppBar>
                    <div className=' max w-full md:flex justify-between '>
                        <div className='w-full md:w-1/2 space-y-5 p-6 md:space-y-10 '>
                            <div className="space-y-3 ">
                                <motion.p className='uppercase tracking-wider text-green-700'>Bienvenu chez CEMENA-TOGO</motion.p>
                                <motion.h1
                                    variants={Animations.bottomToTop({ duration: 0.5 })}
                                    initial="hidden"
                                    whileInView="show"
                                    className="text-3xl md:text-5xl font-extralight font-marcellus">Des solutions naturelles pour votre Santé</motion.h1>

                            </div>
                            <div className=" max flex flex-col">
                                <motion.p
                                    variants={Animations.bottomToTop({ duration: 2.2 })}
                                    initial="hidden"
                                    whileInView="show"
                                >
                                    Prenez soin de votre bien-être grâce à nos solutions naturelles, alliant tradition et innovation pour une santé durable.
                                </motion.p>
                                <motion.a href='#contact'
                                    variants={Animations.scale({ duration: 2.0 })}
                                    initial="hidden"
                                    whileInView="show"
                                    className="font-poppins text-white 
                                 px-10 py-3 my-3
                               bg-green-700 hover:bg-green-900 border border-white hover:ring ring-green-900 rounded-full
                                self-start
                                ">Contactez-nous</motion.a>

                            </div>
                            <div className='h-px bg-zinc-200 w-full'></div>
                            <div className='flex'>
                                <img src="/utils/satisfieds.png" alt="" className='h-12' />
                                <div className='mx-2'>
                                    <p className='text-2xl'>
                                        1300+

                                    </p>
                                    <p className='font-marcellus'>De clients satisfaits</p>
                                </div>

                            </div>


                        </div>
                        <div className=''>
                            <div className='flex justify-center'>
                                <div className='m-2 space-y-4'>
                                    <motion.img src={"/presentation/m-1.png"} alt=""
                                        variants={Animations.bottomToTop({ duration: 0.5, inverse: true })}
                                        initial="hidden"
                                        whileInView="show"
                                        className='rounded-xl rounded-bl-[80px] rounded-tr-[80px] w-44 max-w-[40vw] h-44 object-cover' />
                                    <motion.img src={"/presentation/m-2.png"} alt=""
                                        variants={Animations.bottomToTop({ duration: 0.5, })}
                                        initial="hidden"
                                        whileInView="show"
                                        className='rounded-xl rounded-tl-[80px] rounded-br-[80px] w-44 max-w-[40vw] h-60 object-cover' />
                                </div>
                                <div className='m-2 space-y-4'>
                                    <motion.img src={"/presentation/m-3.png"} alt=""
                                        variants={Animations.leftToRight({ duration: 0.5, inverse: true })}
                                        initial="hidden"
                                        whileInView="show"
                                        className='rounded-xl rounded-tl-[80px] rounded-br-[80px] w-44 max-w-[40vw] h-60 object-cover' />
                                    <motion.img
                                        variants={Animations.scale({ duration: 0.5, })}
                                        initial="hidden"
                                        whileInView="show"
                                        src={"/presentation/m-4.png"} alt="" className='rounded-xl rounded-bl-[80px] rounded-tr-[80px] w-44 max-w-[40vw] h-44 object-cover' />
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