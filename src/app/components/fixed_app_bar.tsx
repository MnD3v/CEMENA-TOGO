"use client"
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useGlobalState } from '../contexts/GlobalStateContext'
import { usePathname } from 'next/navigation'

const FixedAppBar = ({ fixed }: { fixed?: boolean }) => {
    const { menuIsOpen, setMenuIsOpen } = useGlobalState();

    const [showAppBar, setShow] = useState(false)

    const pathName = usePathname()
    const [inNotHome, setInNotHome] = useState(false)
    if (pathName != '/') {
        setInNotHome(true)
    }


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 180) {
                setShow(true)
            } else {
                setShow(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <motion.div className={`font-bricolage fixed flex justify-center  text-black bg-white  w-full shadow z-50`}
            initial={{ y: -200 }}
            animate={{ y: fixed == true ? 0 : showAppBar ? 0 : -200, }}

        >
            <div className='max w-full flex justify-between
             items-center
             py-4 md:py-6 px-4
             '>

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
                    }} className={`p-2 lg:hidden ${menuIsOpen ? 'pointer-events-none' : 'pointer-events-auto'}`}>
                    <img src={"/icons/black-menu.png"} alt="" className='h-5 ' />
                </button>
                <ul className={`hidden lg:flex items-center justify-center uppercase`}>
                    <li className="hover:text-green-600 font-semibold border-l-[1px] border-white/30 pl-9 py-3"><a href={inNotHome ? "/" : "#"}>Accueil</a></li>
                    <li className="hover:text-green-600 font-semibold border-l-[1px] border-white/30 pl-9 py-3"><a href={inNotHome ? "/" : "#formations"}>Services</a></li>
                    <li className="hover:text-green-600 font-semibold border-l-[1px] border-white/30 pl-9 py-3"><a href={inNotHome ? "/" : "#produits"}>Nos produits</a></li>
                    <li className="hover:text-green-600 font-semibold border-l-[1px] border-white/30 pl-9 py-3"><a href={inNotHome ? "/" : "#a-propos"}>A Propos</a></li>
                    <li className="hover:text-green-600 font-semibold border-l-[1px] border-white/30 pl-9 py-3"><a href={inNotHome ? "/" : "#contact"}>Contact</a></li>
                </ul>
            </div>


        </motion.div>
    )
}

export default FixedAppBar