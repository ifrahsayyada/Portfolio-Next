'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import { serviceData, assets } from '../../../assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

const ServiceDetailPage = () => {
  const params = useParams()
  const [isDarkMode, setIsDarkMode] = React.useState(false)
  
  // Sync with system theme on mount
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      
      if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        setIsDarkMode(true)
        document.documentElement.classList.add('dark')
      } else {
        setIsDarkMode(false)
        document.documentElement.classList.remove('dark')
      }
    }
  }, [])
  
  // Update document class when theme changes
  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])
  
  // Find the service based on slug
  const service = serviceData.find(s => s.slug === params.slug)
  
  // If service not found, show error
  if (!service) {
    return (
      <div>
        <div className='min-h-screen flex items-center justify-center' style={{ backgroundColor: isDarkMode ? 'black' : 'white' }}>
          <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <div className='text-center'>
            <h1 className='text-4xl font-Ovo mb-4' style={{ color: isDarkMode ? 'white' : 'black' }}>Service Not Found</h1>
            <Link href='/#services' className='text-sm font-Outfit' style={{ color: isDarkMode ? '#d1d5db' : '#374151' }}>
              Back to Services
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className='min-h-screen transition-colors duration-300' style={{ backgroundColor: isDarkMode ? 'black' : 'white' }}>
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className='w-full px-[12%] py-24 scroll-mt-20'
        >
          {/* Back Button */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='mb-10'
          >
            <Link 
              href='/#services' 
              className='inline-flex items-center gap-2 text-sm font-Outfit transition-colors no-underline'
              style={{ color: isDarkMode ? '#d1d5db' : '#374151' }}
            >
              <Image 
                src={assets.right_arrow} 
                alt='Back' 
                className='w-4 rotate-180' 
                style={{ filter: isDarkMode ? 'invert(1)' : 'none' }}
              />
              Back to Services
            </Link>
          </motion.div>

          {/* Service Header */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className='mb-16'
          >
            <div className='flex items-center gap-6 mb-8'>
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100, damping: 15 }}
                className='p-5 rounded-xl border'
                style={{ 
                  backgroundColor: isDarkMode ? 'transparent' : 'white',
                  borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'
                }}
              >
                <Image 
                  src={service.icon} 
                  alt={service.title} 
                  className='w-14 h-14' 
                  style={{ filter: isDarkMode ? 'invert(1) brightness(2)' : 'none' }}
                />
              </motion.div>
              <h1 className='text-4xl md:text-6xl font-Ovo' style={{ color: isDarkMode ? 'white' : 'black' }}>
                {service.title}
              </h1>
            </div>
            <p className='text-lg md:text-xl font-Outfit leading-relaxed max-w-4xl' style={{ color: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : '#4b5563' }}>
              {service.fullDescription}
            </p>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className='mb-16'
          >
            <h2 className='text-3xl md:text-4xl font-Ovo mb-8' style={{ color: isDarkMode ? 'white' : 'black' }}>
              What I Offer
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.08, ease: 'easeOut' }}
                  whileHover={{ 
                    x: 8,
                    transition: { duration: 0.3, ease: 'easeOut' },
                    boxShadow: isDarkMode 
                      ? '0 10px 30px rgba(255, 255, 255, 0.1)' 
                      : '0 10px 30px rgba(0, 0, 0, 0.1)' 
                  }}
                  className='flex items-start gap-4 p-6 rounded-xl border transition-all'
                  style={{ 
                    backgroundColor: isDarkMode ? 'transparent' : 'white',
                    borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div className='flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-1' style={{ backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)' }}>
                    <Image src={assets.right_arrow} alt='Check' className='w-3.5' style={{ filter: isDarkMode ? 'invert(1)' : 'none' }} />
                  </div>
                  <p className='text-base font-Outfit leading-relaxed' style={{ color: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : '#4b5563' }}>
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technologies Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className='mb-16'
          >
            <h2 className='text-3xl md:text-4xl font-Ovo mb-8' style={{ color: isDarkMode ? 'white' : 'black' }}>
              Technologies & Tools
            </h2>
            <div className='flex flex-wrap gap-4'>
              {service.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.04, type: 'spring', stiffness: 200, damping: 20 }}
                  whileHover={{ scale: 1.08, y: -3, transition: { duration: 0.2, ease: 'easeOut' } }}
                  className='px-5 py-2.5 rounded-full text-sm font-Outfit font-medium border cursor-default'
                  style={{ 
                    backgroundColor: isDarkMode ? 'transparent' : 'white',
                    borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
                    color: isDarkMode ? 'white' : 'black'
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.015, transition: { duration: 0.3, ease: 'easeOut' } }}
            className='rounded-2xl p-10 md:p-14 text-center border relative overflow-hidden'
            style={{ 
              backgroundColor: isDarkMode ? 'transparent' : 'white',
              borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)'
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className='text-3xl md:text-5xl font-Ovo mb-5' style={{ color: isDarkMode ? 'white' : 'black' }}>
                Interested in this service?
              </h2>
              <p className='text-lg md:text-xl mb-8 font-Outfit leading-relaxed max-w-2xl mx-auto' style={{ color: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : '#4b5563' }}>
                Let&apos;s work together to bring your ideas to life!
              </p>
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: 'easeOut' } }}
                whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
              >
                <Link
                  href='/#contact'
                  className='inline-flex items-center gap-3 px-8 py-4 rounded-full font-Outfit font-medium transition-all no-underline border'
                  style={{ 
                    backgroundColor: isDarkMode ? 'white' : 'black',
                    color: isDarkMode ? 'black' : 'white',
                    borderColor: isDarkMode ? 'white' : 'black'
                  }}
                >
                  Get in Touch
                  <Image src={assets.right_arrow} alt='Arrow' className='w-4' style={{ filter: isDarkMode ? 'invert(0)' : 'invert(1)' }} />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <Footer isDarkMode={isDarkMode} />
      </div>
    </div>
  )
}

export default ServiceDetailPage
