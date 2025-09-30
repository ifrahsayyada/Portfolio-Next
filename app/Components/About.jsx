import React from 'react'
import { assets, infoList, toolsData } from '../../assets/assets'
import Image from 'next/image'

const About = () => {
    return (
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>
                Introduction
            </h4>
            <h2 className='text-center text-5xl font-Ovo'>
                About me
            </h2>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <div className='max-w-max mx-auto relative'>
                    <Image src={assets.user_image} alt="User" className='w-64 sm:w-80 rounded-3xl max-w-none' />
                    <div className='bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center'>
                        <Image src={assets.code_icon} alt="Code" className='w-1/4' />
                        <Image src={assets.edu_icon} alt="Education" className='w-1/4' />
                        <Image src={assets.project_icon} alt="Projects" className='w-1/4' />
                    </div>
                </div>
                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl font-Ovo'>
                        I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
                    </p>

                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <li className='border-2 border-gray-400 rounded-xl p-6 cursor-pointer info-card'
                                key={index} >
                                <Image src={icon} alt={title} className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                                <p className='text-gray-600 text-sm'>{description}</p>
                            </li>
                        ))}
                    </ul>

                    <h4 className='my-6 text-gray-700 font-Ovo'>Tools I use</h4>
                    
                    <ul className='flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index) => (
                            <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 hover:border-black hover:border-2 hover:shadow-lg duration-500'>
                                <Image src={tool} alt="Tool" className='w-5 sm:w-7' />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About