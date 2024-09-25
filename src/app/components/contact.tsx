import { motion } from 'framer-motion'
import React from 'react'
import Animations from './utils/item'

const Contact = () => {

    const contacts = [{ icon: "whatsapp.png", title: "Ecrivez nous un message", description: "+228 93 45 21 72", buttonText: "Envoyer un message", link: "https://wa.me/22893452172" }, { icon: "call.png", title: "Appelez nous", description: "+228 93 45 21 72", buttonText: "Appeler", link: "tel:+22893452172" },]
    return (
        <section id="contact">


            <div className='flex flex-wrap justify-center gap-3 m-3'>
                {contacts.map((element) => (
                    <motion.div

                        variants={Animations.bottomToTop({ duration: 0.4 * contacts.indexOf(element) + 0.4, })}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        key={element.icon} className='w-full sm:w-96 bg-green-50 rounded-xl flex flex-col items-center p-4 gap-3'>
                        <div className='h-20 w-20 md:h-24 md:w-24 rounded-full bg-green-100 flex flex-col items-center justify-center'>
                            <img src={`/icons/${element.icon}`} alt="" className='h-10 md:h-14 ' />
                        </div>
                        <h3 className='text-green-900'>{element.title}</h3>
                        <p className='font-poppins text-lg text-center'>{element.description} </p>
                        <a href={element.link} target='_blank' className='text-white font-bricolage px-6 py-4 bg-green-700 rounded-lg'>{element.buttonText}</a>
                    </motion.div>
                ))}
            </div>
        </section>

    )
}

export default Contact