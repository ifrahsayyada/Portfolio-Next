import { serviceData, assets } from '../../assets/assets'
import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
         <h4 className='text-center mb-2 text-lg font-Ovo'>
                What I Do
            </h4>
            <h2 className='text-center text-5xl font-Ovo'>
                My Services
            </h2>
            <p className='text-center text-base sm:text-lg lg:text-xl mt-6 mb-8 max-w-2xl mx-auto font-Outfit leading-relaxed'> 
                I am a passionate frontend web developer with expertise in HTML, CSS, JavaScript, and React. I create visually appealing and user-friendly websites that deliver exceptional user experiences. Let's collaborate to bring your ideas to life!
            </p>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
                {serviceData.map(({ icon, title, description, link }, index) => (
                    <div key={index} className='border border-gray-400 p-6 rounded-xl hover:-translate-y-1 duration-500 cursor-pointer transition-all service-card'>
                        <Image src={icon} alt={title} className='w-10' />
                        <h3 className='text-lg my-4 text-gray-700 dark:text-white font-Ovo mb-2'>{title}</h3>
                        <p className='text-sm text-gray-600 dark:text-gray-300 leading-5 font-Outfit'>{description}</p>
                        <a href={link} className='flex items-center gap-2 text-sm mt-5 hover:gap-3 transition-all duration-300'>
                            Read more <Image src={assets.right_arrow} className='w-4' alt='Right Arrow' />
                        </a>
                    </div>
                ))} 
            </div>
    </div>
  )
}

export default Services
