import React from 'react'
import { assets } from '../../assets/assets'
import Image from 'next/image'

import { motion } from "motion/react"

const Header = ({ isDarkMode }) => {
    return (
        <div className='relative w-full min-h-screen overflow-hidden'>
            {/* Spider-Man style animated webs - continuously building */}
            <div className='absolute inset-0 w-full h-full pointer-events-none overflow-hidden' style={{ 
                opacity: isDarkMode ? 0.15 : 0.12,
                zIndex: 0 
            }}>
                <svg className='w-full h-full' viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Web Pattern 1 - Top Left Corner */}
                    <motion.g>
                        {/* Radial lines */}
                        <motion.line x1="2" y1="2" x2="12" y2="8" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.12" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1] }} />
                        <motion.line x1="2" y1="2" x2="10" y2="14" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.12" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 0.1 }} />
                        <motion.line x1="2" y1="2" x2="5" y2="16" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.12" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 0.2 }} />
                        <motion.line x1="2" y1="2" x2="16" y2="4" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.12" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 0.3 }} />
                        {/* Connecting curves - web strands */}
                        <motion.path d="M 5 16 Q 8 12 10 14" fill="none" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.1" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 0.4 }} />
                        <motion.path d="M 10 14 Q 11 10 12 8" fill="none" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.1" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 0.5 }} />
                        <motion.path d="M 12 8 Q 14 5 16 4" fill="none" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.1" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 0.6 }} />
                        {/* Inner web circle */}
                        <motion.circle cx="2" cy="2" r="1" fill="none" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.1" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 0.7 }} />
                    </motion.g>

                    {/* Web Pattern 2 - Top Right Corner */}
                    <motion.g>
                        <motion.line x1="98" y1="2" x2="88" y2="8" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.12" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 0.8 }} />
                        <motion.line x1="98" y1="2" x2="90" y2="14" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.12" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 0.9 }} />
                        <motion.line x1="98" y1="2" x2="95" y2="16" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.12" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 1 }} />
                        <motion.line x1="98" y1="2" x2="84" y2="4" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.12" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 1.1 }} />
                        <motion.path d="M 95 16 Q 92 12 90 14" fill="none" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.1" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 1.2 }} />
                        <motion.path d="M 90 14 Q 89 10 88 8" fill="none" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.1" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 1.3 }} />
                        <motion.path d="M 88 8 Q 86 5 84 4" fill="none" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.1" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 1.4 }} />
                        <motion.circle cx="98" cy="2" r="1" fill="none" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.1" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 1.5 }} />
                    </motion.g>

                    {/* Web Pattern 3 - Bottom Left Corner */}
                    <motion.g>
                        <motion.line x1="2" y1="98" x2="12" y2="92" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.12" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 1.6 }} />
                        <motion.line x1="2" y1="98" x2="10" y2="86" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.12" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 1.7 }} />
                        <motion.line x1="2" y1="98" x2="5" y2="84" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.12" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 1.8 }} />
                        <motion.line x1="2" y1="98" x2="16" y2="96" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.12" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 1.9 }} />
                        <motion.path d="M 5 84 Q 8 88 10 86" fill="none" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.1" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 2 }} />
                        <motion.path d="M 10 86 Q 11 90 12 92" fill="none" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.1" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 2.1 }} />
                        <motion.path d="M 12 92 Q 14 95 16 96" fill="none" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.1" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 2.2 }} />
                        <motion.circle cx="2" cy="98" r="1" fill="none" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.1" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 2.3 }} />
                    </motion.g>

                    {/* Web Pattern 4 - Bottom Right Corner */}
                    <motion.g>
                        <motion.line x1="98" y1="98" x2="88" y2="92" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.12" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 2.4 }} />
                        <motion.line x1="98" y1="98" x2="90" y2="86" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.12" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 2.5 }} />
                        <motion.line x1="98" y1="98" x2="95" y2="84" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.12" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 2.6 }} />
                        <motion.line x1="98" y1="98" x2="84" y2="96" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.12" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 2.7 }} />
                        <motion.path d="M 95 84 Q 92 88 90 86" fill="none" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.1" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 2.8 }} />
                        <motion.path d="M 90 86 Q 89 90 88 92" fill="none" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.1" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 2.9 }} />
                        <motion.path d="M 88 92 Q 86 95 84 96" fill="none" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.1" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 3 }} />
                        <motion.circle cx="98" cy="98" r="1" fill="none" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.1" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 3.1 }} />
                    </motion.g>

                    {/* Small web - Middle Left */}
                    <motion.g>
                        <motion.line x1="4" y1="50" x2="10" y2="48" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.1" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 3.2 }} />
                        <motion.line x1="4" y1="50" x2="9" y2="54" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.1" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 3.3 }} />
                        <motion.path d="M 10 48 Q 9.5 51 9 54" fill="none" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.08" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 3.4 }} />
                    </motion.g>

                    {/* Small web - Middle Right */}
                    <motion.g>
                        <motion.line x1="96" y1="50" x2="90" y2="48" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.1" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 3.5 }} />
                        <motion.line x1="96" y1="50" x2="91" y2="54" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.1" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 3.6 }} />
                        <motion.path d="M 90 48 Q 90.5 51 91 54" fill="none" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.08" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 3.7 }} />
                    </motion.g>

                    {/* Tiny web accent - Center top */}
                    <motion.g>
                        <motion.line x1="50" y1="8" x2="48" y2="12" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.08" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 3.8 }} />
                        <motion.line x1="50" y1="8" x2="52" y2="12" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.08" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 3.9 }} />
                        <motion.path d="M 48 12 Q 50 11.5 52 12" fill="none" stroke={isDarkMode ? "#ffffff" : "#000000"} strokeWidth="0.06" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1], delay: 4 }} />
                    </motion.g>
                </svg>
            </div>
            
            <div className='relative w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 pt-20 pb-10' style={{ zIndex: 1 }}>
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
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}  
            className='text-base sm:text-lg lg:text-xl mt-6 mb-8 max-w-2xl font-Outfit leading-relaxed'>
                I am a passionate frontend web developer with expertise in HTML, CSS, JavaScript, and React. I create visually appealing and user-friendly websites that deliver exceptional user experiences. Let's collaborate to bring your ideas to life!
            </motion.p>
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
        </div>
    )
}

export default Header
