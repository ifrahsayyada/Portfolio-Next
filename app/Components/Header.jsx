import React from 'react'
import { assets } from '../../assets/assets'
import Image from 'next/image'

import { motion } from "motion/react"

const Header = ({ isDarkMode }) => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 pt-20 pb-10'>
            <motion.div 
                initial={{ scale: 0}}
                whileInView={{ scale: 1}}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.8, type : 'spring', stiffness: 100 }}
            
            className='mb-4'>
                <Image src={assets.profile_img} alt="Profile" className='rounded-full w-32 h-32 object-cover mx-auto' />
            </motion.div>
            <motion.h3 
                initial={{ y:-20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}  
            className='flex items-center justify-center gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
                Hi! I'm Sayyada Ifrah <Image src={assets.hand_icon} alt="Hand" className='w-6 object-cover' />
            </motion.h3>
            <motion.h1 
                initial={{ y:-20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}  
            className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo leading-tight'>
                frontend web developer based in India.
            </motion.h1>
            <motion.ap
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}  
            className='text-base sm:text-lg lg:text-xl mt-6 mb-8 max-w-2xl font-Outfit leading-relaxed'>
                I am a passionate frontend web developer with expertise in HTML, CSS, JavaScript, and React. I create visually appealing and user-friendly websites that deliver exceptional user experiences. Let's collaborate to bring your ideas to life!
            </motion.ap>
            <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-4'>
                <motion.a
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                href='#contact'
                style={{ 
                    backgroundColor: isDarkMode ? 'white' : 'black', 
                    color: isDarkMode ? 'black' : 'white' 
                }}
                className='px-10 py-3 rounded-full flex items-center gap-2 hover:opacity-90 duration-500 font-Ovo'>
                    contact me <Image src={isDarkMode ? assets.arrow_icon : assets.right_arrow_white} alt="Arrow" className='w-4' />
                </motion.a>
                <motion.a 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                href='/Sayyada_ifrah_resume.pdf' download 
                style={{ 
                    backgroundColor: 'transparent', 
                    color: isDarkMode ? 'white' : 'black',
                    borderColor: isDarkMode ? '#9ca3af' : '#6b7280'
                }}
                className='px-10 py-3 border rounded-full flex items-center gap-2 hover:bg-lightHover dark:hover:bg-darkHover duration-500 font-Ovo'>
                    my resume <Image src={assets.download_icon} alt="Download" className='w-4' style={{ filter: isDarkMode ? 'invert(1)' : 'none' }} />
                </motion.a>
            </div>
        </div>
    )
}

export default Header
