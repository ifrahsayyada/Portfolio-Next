import React from 'react'
import { assets, infoList, toolsData } from '../../assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
    return (
        <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
        
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h4 
            
                initial={{ y:-20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            className='text-center mb-2 text-lg font-Ovo' style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}>
                Introduction
            </motion.h4>
            <motion.h2 
                initial={{ y:-20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            className='text-center text-5xl font-Ovo' style={{ color: isDarkMode ? 'white' : 'black' }}>
                About me
            </motion.h2>

            <motion.div 
                initial={{ opacity: 0 }}        
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <motion.div 
                    initial={{ opacity:0, scale:0.9 }}  
                    whileInView={{ opacity:1, scale:1 }}
                    transition={{ duration: 0.6 }}      
                className='max-w-max mx-auto relative'>
                    <Image src={assets.user_image} alt="User" className='w-64 sm:w-80 rounded-3xl max-w-none' />
                    <motion.div 
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
                    className='bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center'>
                        <Image src={assets.code_icon} alt="Code" className='w-1/4' />
                        <Image src={assets.edu_icon} alt="Education" className='w-1/4' />
                        <Image src={assets.project_icon} alt="Projects" className='w-1/4' />
                    </motion.div>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                className='flex-1'>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    className='mb-10 max-w-2xl font-Ovo' style={{ color: isDarkMode ? '#d1d5db' : '#374151' }}>
                        I'm a Frontend Developer passionate about creating clean and interactive web experiences. Even though I'm at the start of my career, I've worked on projects that helped me grow my skills and gain real-world experience, and I'm excited to keep building and learning.
                    </motion.p>

                    <motion.ul 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    
                    className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <motion.li
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className='border-2 border-gray-400 dark:border-gray-600 rounded-xl p-6 cursor-pointer info-card dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                                key={index} >
                                <Image src={ isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold' style={{ color: isDarkMode ? 'white' : 'black' }}>{title}</h3>
                                <p className='text-sm' style={{ color: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : '#374151' }}>{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.h4 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                    className='my-6 font-Ovo' style={{color: isDarkMode ? 'white' : 'black' }}>
                        Tools I use
                    </motion.h4>
                    
                    <motion.ul 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    className='flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index) => (
                            <motion.li 
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.1 }}
                                key={index} 
                                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 dark:border-gray-600 rounded-lg cursor-pointer hover:border-black dark:hover:border-white hover:border-2 hover:shadow-lg duration-500'>
                                <Image src={tool} alt="Tool" className='w-5 sm:w-7' />
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About