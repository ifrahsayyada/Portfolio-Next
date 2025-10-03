import React from 'react'
import { assets } from '../../assets/assets'
import Image from 'next/image'

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 pt-20 pb-10'>
            <div className='mb-4'>
                <Image src={assets.profile_img} alt="Profile" className='rounded-full w-32 h-32 object-cover mx-auto' />
            </div>
            <h3 className='flex items-center justify-center gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
                Hi! I'm Sayyada Ifrah <Image src={assets.hand_icon} alt="Hand" className='w-6 object-cover' />
            </h3>
            <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo leading-tight'>
                frontend web developer based in India.
            </h1>
            <p className='text-base sm:text-lg lg:text-xl mt-6 mb-8 max-w-2xl font-Outfit leading-relaxed'>
                I am a passionate frontend web developer with expertise in HTML, CSS, JavaScript, and React. I create visually appealing and user-friendly websites that deliver exceptional user experiences. Let's collaborate to bring your ideas to life!
            </p>
            <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-4'>
                <a href='#contact'
                className='px-10 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center gap-2 hover:bg-darkHover dark:hover:bg-gray-200 duration-500 font-Ovo'>
                    contact me <Image src={assets.right_arrow_white} alt="Right Arrow" className='w-4' />
                </a>
                <a href='/resume.pdf' download className='px-10 py-3 border rounded-full border-gray-500 dark:border-gray-400 text-black dark:text-white flex items-center gap-2 hover:bg-lightHover dark:hover:bg-darkHover duration-500 font-Ovo'>
                    my resume <Image src={assets.download_icon} alt="Download" className='w-4' />
                </a>
            </div>
        </div>
    )
}

export default Header
