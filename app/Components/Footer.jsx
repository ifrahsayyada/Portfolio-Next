import React from 'react'
import Image from 'next/image'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <Image src={assets.logo} alt="Logo" className='w-36 mx-auto mb-2' />
                
                <div className='w-max mx-auto flex items-center gap-2 text-lg font-Outfit mb-6'>
                    <Image src={assets.mail_icon} alt="Mail Icon" className='w-6' />
                    <span>ifrahsayyada2025@gmail.com</span>
                </div>
                
                <hr className='border-gray-400 my-8 mx-[10%]' />
                
                <div className='mb-8'>
                    <p className='text-gray-600 dark:text-gray-300 font-Outfit mb-4'>
                        Let's connect and create something amazing together!
                    </p>
                    <div className='flex justify-center gap-6'>
                        <a target='_blank' href='https://www.linkedin.com/in/ifrah-sayyada-876a09255/' className='text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-Outfit'>
                            LinkedIn
                        </a>
                        <a target='_blank' href='https://github.com/ifrahsayyada' className='text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-Outfit'>
                            GitHub
                        </a>
                    </div>
                </div>
                
                <div className='border-t border-gray-400 dark:border-gray-600 mx-[10%] pt-6'>
                    <p className='text-center text-sm text-gray-500 dark:text-gray-400 font-Outfit'>
                        © 2025 Sayyda Ifrah. All rights reserved.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Footer