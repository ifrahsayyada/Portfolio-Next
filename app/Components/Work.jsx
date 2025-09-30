import { workData, assets } from '../../assets/assets'
import React from 'react'
import Image from 'next/image'

const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>
                My portfolio
            </h4>
            <h2 className='text-center text-5xl font-Ovo'>
                My Latest Projects
            </h2>
            <p className='text-center text-base sm:text-lg lg:text-xl mt-6 mb-8 max-w-2xl mx-auto font-Outfit leading-relaxed'> 
                Here are some of my recent works. I have worked on a variety of projects, ranging from small business websites to large e-commerce platforms. I am always looking for new challenges and opportunities to grow my skills.
            </p>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10'>
                {workData.map(({ title, description, bgImage }, index) => (
                    <div key={index} className='border border-gray-400 rounded-xl overflow-hidden hover:-translate-y-1 duration-500 cursor-pointer transition-all work-card relative group'>
                        <div className='relative overflow-hidden bg-gray-200 min-h-[192px]'>
                            <Image 
                                src={bgImage} 
                                alt={title} 
                                className='w-full h-48 object-cover group-hover:scale-105 duration-500'
                                width={400}
                                height={192}
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                            />
                            <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500'></div>
                        </div>
                        <div className='p-6'>
                            <h3 className='text-lg font-Ovo mb-2 text-gray-800'>{title}</h3>
                            <p className='text-sm text-gray-600 leading-5 font-Outfit mb-4'>{description}</p>
                            <a href="#" className='flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors duration-300'>
                                View Project <Image src={assets.send_icon} alt='send icon' className='w-4' />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Work