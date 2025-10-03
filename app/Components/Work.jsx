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

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10 gap-5'>
                {workData.map((project, index) => (
                <div key={index}
                    className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group hover:scale-105 transition-all duration-300'
                    style={{ backgroundImage: `url(${project.bgImage})` }}>
                    <div className='bg-white dark:bg-gray-800 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                        <div>
                            <h2 className='text-xl font-semibold text-black dark:text-white'>
                                {project.title}
                            </h2>
                            <p className='text-sm text-gray-700 dark:text-gray-300'>{project.description}</p>
                        </div>
                        <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 group-hover:scale-110 group-hover:shadow-[3px_3px_0_#000] transition-all duration-300 cursor-pointer hover:rotate-12'>
                            <Image src={assets.send_icon} alt='send icon' className='w-5' />
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 dark:text-white border-[0.5px] border-gray-700 dark:border-gray-300 rounded-full py-3 px-10 mx-auto my-20 hover:bg-black hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300 group'>
                Show More <Image src={assets.right_arrow_bold} alt='Right arrow' className='w-4 group-hover:translate-x-1 transition-transform duration-300' />
            </a>
        </div>
    )
}

            export default Work