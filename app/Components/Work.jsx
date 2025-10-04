import { workData, assets } from '../../assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"

const Work = ({ isDarkMode }) => {
    return (
        <motion.div 
            id='work' 
            className='w-full px-[12%] py-10 scroll-mt-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h4 
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo' 
                style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}
            >
                My portfolio
            </motion.h4>
            <motion.h2 
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo' 
                style={{ color: isDarkMode ? 'white' : 'black' }}
            >
                My Latest Projects
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className='text-center text-base sm:text-lg lg:text-xl mt-6 mb-8 max-w-2xl mx-auto font-Outfit leading-relaxed' 
                style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}
            >
                Here are some of my recent works. I have worked on a variety of projects, ranging from small business websites to large e-commerce platforms. I am always looking for new challenges and opportunities to grow my skills.
            </motion.p>

            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10 gap-5'
            >
                {workData.map((project, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                        duration: 0.6, 
                        delay: 1 + index * 0.15,
                        ease: "easeOut"
                    }}
                    whileHover={{ 
                        scale: 1.05,
                        y: -10,
                        transition: { duration: 0.3 }
                    }}
                    className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group bg-gray-200'
                    style={{ 
                        backgroundImage: `url(${project.bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 + index * 0.15 }}
                        className='bg-white dark:bg-gray-800 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'
                    >
                        <div>
                            <motion.h2 
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 1.3 + index * 0.15 }}
                                className='text-xl font-semibold text-black dark:text-white'
                            >
                                {project.title}
                            </motion.h2>
                            <motion.p 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.4, delay: 1.4 + index * 0.15 }}
                                className='text-sm text-gray-700 dark:text-gray-300'
                            >
                                {project.description}
                            </motion.p>
                        </div>
                        <motion.div 
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{ 
                                duration: 0.5, 
                                delay: 1.4 + index * 0.15,
                                type: "spring",
                                stiffness: 200
                            }}
                            whileHover={{ 
                                scale: 1.1, 
                                rotate: 12,
                                backgroundColor: '#bef264',
                                transition: { duration: 0.3 }
                            }}
                            className='border rounded-full border-black dark:border-white w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#fff] transition-all duration-300 cursor-pointer'
                        >
                            <Image src={assets.send_icon} alt='send icon' className='w-5 dark:invert' />
                        </motion.div>
                    </motion.div>
                </motion.div>
                ))}
            </motion.div>

            <motion.a 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                whileHover={{ 
                    scale: 1.05,
                    boxShadow: isDarkMode 
                        ? '0 10px 25px rgba(255, 255, 255, 0.15)' 
                        : '0 10px 25px rgba(0, 0, 0, 0.15)'
                }}
                whileTap={{ scale: 0.95 }}
                href="#work" 
                className='w-max flex items-center justify-center gap-2 border-[0.5px] rounded-full py-3 px-10 mx-auto my-20 transition-all duration-300 group'
                style={{
                    color: isDarkMode ? 'white' : '#374151',
                    borderColor: isDarkMode ? '#d1d5db' : '#374151',
                    backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = isDarkMode ? '#374151' : 'black';
                    e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = isDarkMode ? 'white' : '#374151';
                }}
            >
                Show More 
                <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                >
                    <Image 
                        src={assets.right_arrow_bold} 
                        alt='Right arrow' 
                        className='w-4'
                        style={{ filter: isDarkMode ? 'invert(1)' : 'none' }}
                    />
                </motion.div>
            </motion.a>
        </motion.div>
    )
}

export default Work