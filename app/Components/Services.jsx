'use client'

import { serviceData, assets } from '../../assets/assets'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion } from "motion/react"

const Services = ({ isDarkMode }) => {
  const router = useRouter();
  return (
    <motion.div 
      id='services' 
      className='w-full px-5 sm:px-8 lg:px-[12%] py-10 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
         <motion.h4 
           initial={{ y: -20, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.5, delay: 0.3 }}
           className='text-center mb-2 text-lg font-Ovo' 
           style={{ color: isDarkMode ? '#d1d5db' : '#374151' }}
         >
                What I Do
         </motion.h4>
         <motion.h2 
           initial={{ y: -20, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.5, delay: 0.5 }}
           className='text-center text-5xl font-Ovo' 
           style={{ color: isDarkMode ? 'white' : 'black' }}
         >
                My Services
         </motion.h2>
         <motion.p 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.7 }}
           className='text-center text-base sm:text-lg lg:text-xl mt-6 mb-8 max-w-2xl mx-auto font-Outfit leading-relaxed' 
           style={{ color: isDarkMode ? '#d1d5db' : '#374151' }}
         > 
                I am a passionate frontend web developer with expertise in HTML, CSS, JavaScript, and React. I create visually appealing and user-friendly websites that deliver exceptional user experiences. Let's collaborate to bring your ideas to life!
         </motion.p>
            
         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
                {serviceData.map(({ icon, title, description, link, slug }, index) => (
                    <motion.a
                      href={link}
                      key={slug || index} 
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                      whileHover={{ 
                        y: -10, 
                        scale: 1.02,
                        boxShadow: isDarkMode 
                          ? '0 10px 30px rgba(255, 255, 255, 0.1)' 
                          : '0 10px 30px rgba(0, 0, 0, 0.1)' 
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = link;
                      }}
                      className='border border-gray-400 dark:border-gray-600 p-6 rounded-xl cursor-pointer transition-all service-card block no-underline' 
                      style={{ backgroundColor: isDarkMode ? 'transparent' : 'white' }}
                    >
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.6, delay: 1 + index * 0.2, type: "spring" }}
                        >
                          <Image src={icon} alt={title} className='w-10' style={{ filter: isDarkMode ? 'invert(1) brightness(2)' : 'none' }} />
                        </motion.div>
                        <motion.h3 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 1.1 + index * 0.2 }}
                          className='text-lg my-4 font-Ovo mb-2' 
                          style={{ color: isDarkMode ? 'white' : 'black' }}
                        >
                          {title}
                        </motion.h3>
                        <motion.p 
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                          className='text-sm leading-5 font-Outfit mb-5' 
                          style={{ color: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : '#4b5563' }}
                        >
                          {description}
                        </motion.p>
                        
                    </motion.a>
                ))} 
         </div>
    </motion.div>
  )
}

export default Services