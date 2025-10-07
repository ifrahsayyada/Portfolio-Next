import React from 'react'
import Image from 'next/image'
import { assets } from '../../assets/assets'
import { motion } from "motion/react"

const Footer = ({isDarkMode}) => {
    return (
        <div className='mt-20'>
            <div className='text-center relative'>
                {/* Decorative gradient background with animation */}
                <div className='absolute inset-0 -z-10 opacity-30 overflow-hidden'>
                    <motion.div 
                        animate={{ 
                            x: [0, 100, 0],
                            y: [0, 50, 0],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                            duration: 10, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                        }}
                        className='absolute top-0 left-1/4 w-64 h-64 bg-purple-300 dark:bg-purple-900 rounded-full blur-3xl'
                    ></motion.div>
                    <motion.div 
                        animate={{ 
                            x: [0, -100, 0],
                            y: [0, -50, 0],
                            scale: [1, 1.3, 1]
                        }}
                        transition={{ 
                            duration: 12, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                        }}
                        className='absolute top-0 right-1/4 w-64 h-64 bg-blue-300 dark:bg-blue-900 rounded-full blur-3xl'
                    ></motion.div>
                    <motion.div 
                        animate={{ 
                            x: [0, -50, 0],
                            y: [0, 100, 0],
                            scale: [1, 1.5, 1]
                        }}
                        transition={{ 
                            duration: 15, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                        }}
                        className='absolute bottom-0 left-1/2 w-64 h-64 bg-pink-300 dark:bg-pink-900 rounded-full blur-3xl'
                    ></motion.div>
                </div>

                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    viewport={{ once: true }}
                    whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -10, 10, -10, 0],
                        transition: { duration: 0.5, ease: "easeInOut" }
                    }}
                    className='cursor-pointer'
                >
                    <Image src={isDarkMode ? assets.logo : assets.logo} alt="Logo" className='w-36 mx-auto mb-2' />
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className='w-max mx-auto flex items-center gap-2 text-lg font-Outfit mb-6 group cursor-pointer'
                >
                    <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image src={isDarkMode ? assets.mail_icon :  assets.mail_icon} alt="Mail Icon" className='w-6' />
                    </motion.div>
                    <span className='group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300'>
                        ifrahsayyada2025@gmail.com
                    </span>
                </motion.div>
                
                <motion.hr 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className='border-gray-400 dark:border-gray-600 my-8 mx-[10%]' 
                />
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className='mb-8'
                >
                    <p className='text-gray-600 dark:text-gray-300 font-Outfit mb-6 text-lg'>
                        Let's connect and create something amazing together! ✨
                    </p>
                    <div className='flex justify-center gap-8'>
                        <motion.a 
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ 
                                scale: 1.1, 
                                y: -5,
                                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.5)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            target='_blank' 
                            href='https://www.linkedin.com/in/ifrah-sayyada-876a09255/' 
                            className='group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400 text-white rounded-full font-Outfit font-medium shadow-lg transition-all duration-300 overflow-hidden'
                        >
                            <motion.span 
                                className='relative z-10 flex items-center gap-2'
                                whileHover={{ x: 5 }}
                            >
                                <span>🔗</span> LinkedIn
                            </motion.span>
                            <motion.div 
                                className='absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 dark:from-blue-600 dark:to-blue-500'
                                initial={{ x: '-100%' }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            ></motion.div>
                        </motion.a>
                        <motion.a 
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ 
                                scale: 1.1, 
                                y: -5,
                                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            target='_blank' 
                            href='https://github.com/ifrahsayyada' 
                            className='group relative px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 dark:from-gray-700 dark:to-gray-600 text-white rounded-full font-Outfit font-medium shadow-lg transition-all duration-300 overflow-hidden'
                        >
                            <motion.span 
                                className='relative z-10 flex items-center gap-2'
                                whileHover={{ x: 5 }}
                            >
                                <span>💻</span> GitHub
                            </motion.span>
                            <motion.div 
                                className='absolute inset-0 bg-gradient-to-r from-black to-gray-900 dark:from-gray-900 dark:to-black'
                                initial={{ x: '-100%' }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            ></motion.div>
                        </motion.a>
                    </div>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                    className='border-t border-gray-400 dark:border-gray-600 mx-[10%] pt-6 pb-6 relative'
                >
                    {/* Floating particles */}
                    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                className='absolute w-2 h-2 bg-purple-400 dark:bg-purple-600 rounded-full'
                                style={{
                                    left: `${20 + i * 15}%`,
                                    bottom: 0
                                }}
                                animate={{
                                    y: [-10, -60, -10],
                                    opacity: [0, 1, 0],
                                    scale: [0.5, 1, 0.5]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: i * 0.4,
                                    ease: "easeInOut"
                                }}
                            />
                        ))}
                    </div>
                    
                    <motion.p 
                        className='text-center text-sm text-gray-500 dark:text-gray-400 font-Outfit'
                        whileHover={{ scale: 1.05 }}
                    >
                        © 2025 Sayyda Ifrah. All rights reserved.
                    </motion.p>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        viewport={{ once: true }}
                        className='text-center text-xs text-gray-400 dark:text-gray-500 font-Outfit mt-2'
                        whileHover={{ scale: 1.1 }}
                    >
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            💜
                        </motion.span>
                        {' '}Made with love and Next.js{' '}
                        <motion.span
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            style={{ display: 'inline-block' }}
                        >
                            ⚡
                        </motion.span>
                    </motion.p>
                </motion.div>
            </div>
        </div>

    )
}

export default Footer