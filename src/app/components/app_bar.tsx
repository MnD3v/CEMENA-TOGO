"use client"
import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { useGlobalState } from '../contexts/GlobalStateContext';
import { usePathname } from 'next/navigation';

const AppBar = () => {
    const { menuIsOpen, setMenuIsOpen } = useGlobalState();

    const menuRef = useRef<HTMLDivElement>(null)

    const pathName = usePathname()
    const [inNotHome, setInNotHome] = useState(false)



    useEffect(() => {
        if (!(pathName === '/')) {
            setInNotHome(true)
        }
        const handleScroll = () => {

            setMenuIsOpen(false)
        }



        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuIsOpen(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll)
        }


    }, [])



    return (
        <div className='w-full font-bricolage'>


            <div className={` fixed ${menuIsOpen ? "block" : "hidden"} h-full w-full bg-black/30`}>

            </div>
            <MobileAppBar inNotHome={inNotHome} menuIsOpen={menuIsOpen} menuRef={menuRef}></MobileAppBar>
            <div className='w-full flex justify-center'>
                <div className='max w-full p-6 flex flex-col items-center '>
                    <div className="max w-full  justify-between hidden lg:flex">





                    </div>
                    <div className='w-full hidden lg:flex items-center justify-between '>
                        <div className='flex items-end'>
                            <a href={inNotHome ? "/" : "#"}> <img src="/logo.png" alt="" className="h-12 md:h-16" />
                            </a>
                            <div className='flex items-end'>
                                <div className='h-10 md:h-12 w-1 bg-red-500 mx-1 rounded-l-lg'></div>
                                <div className='font-bold text-xl md:text-2xl text-green-800 relative -bottom-2'>
                                    <p >Cabinet d'Etude en</p>
                                    <p>Médecine Naturelle</p>
                                </div>
                            </div>
                        </div>


                        <ul className="max flex uppercase text-sm">
                            <li className="pl-9 py-3"><a href={inNotHome ? "/" : "#"} className="font-semibold relative group text-gray-800 hover:text-green-700">Accueil<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full rounded-full"></span></a></li>
                            <li className="pl-9 py-3"><a href={inNotHome ? "/" : "#formations"} className="font-semibold relative group text-gray-800 hover:text-green-700">Services<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full rounded-full"></span></a></li>
                            <li className="pl-9 py-3"><a href={inNotHome ? "/" : "#produits"} className="font-semibold relative group text-gray-800 hover:text-green-700">Nos produits<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full rounded-full"></span></a></li>
                            <li className="pl-9 py-3"><a href={inNotHome ? "/" : "#a-propos"} className="font-semibold relative group text-gray-800 hover:text-green-700">A Propos<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full rounded-full"></span></a></li>
                            <li className="pl-9 py-3"><a href={inNotHome ? "/" : "#contact"} className="font-semibold text-white bg-green-600 hover:bg-green-800 px-5 py-2 rounded-full">Contact</a></li>
                        </ul>
                    </div>
                    <div className='flex w-full justify-between lg:hidden items-center'>
                        <div className='flex items-end'>
                            <a href={inNotHome ? "/" : "#"}> <img src="/logo.png" alt="" className="h-12 md:h-16" />
                            </a>
                            <div className='flex items-end'>
                                <div className='h-10 md:h-12 w-1 bg-red-500 mx-1 rounded-l-lg'></div>
                                <div className='font-bold text-xl md:text-2xl text-green-800 relative -bottom-2'>
                                    <p >Cabinet d'Etude en</p>
                                    <p>Médecine Naturelle</p>
                                </div>
                            </div>

                        </div>
                        <button
                            onClick={() => {

                                setMenuIsOpen((!menuIsOpen))
                                console.log(menuIsOpen)
                            }} >
                            <img src={menuIsOpen ? "/icons/close.png" : "/icons/black-menu.png"} alt="" className='h-5 ' />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AppBar


const MobileAppBar = ({ menuRef, menuIsOpen, inNotHome }: { menuRef: React.RefObject<HTMLDivElement>, menuIsOpen: boolean, inNotHome: boolean }) => (
    <motion.div ref={menuRef}
        initial={{ x: "-300px" }}
        animate={{ x: menuIsOpen ? "0" : "-300px", transition: { duration: 0.25 } }}
        className='fixed flex flex-col justify-between bg-green-900 w-[300px] h-full p-6 text-white z-50'>
        <img src="/utils/deco-1.png" alt="" className='-left-8 -top-4 absolute h-64 
         pointer-events-none
        ' />
        <ul className={`flex flex-col items-center justify-center  uppercase`}>
            <li className="hover:text-green-600 font-semibold px-6 py-3"><a href={inNotHome ? "/" : "#"}>Accueil</a></li>
            <li className="hover:text-green-600 font-semibold px-6 py-3"><a href={inNotHome ? "/" : "#formations"}>SERVICES</a></li>
            <li className="hover:text-green-600 font-semibold px-6 py-3"><a href={inNotHome ? "/" : "#produits"}>Nos produits</a></li>
            <li className="hover:text-green-600 font-semibold px-6 py-3"><a href={inNotHome ? "/" : "#a-propos"}>A Propos</a></li>
            <li className="hover:text-green-600 font-semibold px-6 py-3"><a href={inNotHome ? "/" : "#contact"}>Contact</a></li>
        </ul>
        <div className="flex flex-wrap gap-4">


            <img src="/logo.png" alt="" className="h-14" />


            <div className=" font-bricolage gap-6 items-center space-y-3">
                <div className='flex'>
                    <img src="/icons/clock.png" alt="" className='h-4 m-1' />
                    <div>
                        <p className="">Lundi - Vendredi <span className='font-bold'>08:00 - 19:00</span></p>
                        <p>Samedi - Dimanche  <span className='font-bold'>FERMÉ</span></p>
                    </div>
                </div>

                <div className='flex'>
                    <img src="/icons/phone.png" alt="" className='h-4 m-1' />

                    <div>
                        <p className="font-semibold">+228 93 45 21 72</p>

                    </div>
                </div>

            </div>

        </div>

    </motion.div>
)