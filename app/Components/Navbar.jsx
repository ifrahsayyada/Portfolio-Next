import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import Image from 'next/image'

const Navbar = () => {
    const [isScrolling, setIsScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
      closeMenu();
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    <div className='fixed top-0 left-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt="Background" className='w-full h-full object-cover' />
    </div>
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-500 ${
      isScrolling ? 'backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
        <a href="#top">
                <Image src={assets.logo} alt="Logo" className='w-28 cursor-pointer mr-14' />
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 shadow-sm transition-all duration-500 ${
          isScrolling ? 'backdrop-blur-sm' : 'bg-white bg-opacity-50'
        }`}>
            <li><a className='font-Ovo cursor-pointer hover:text-gray-700' href='#top'>Home</a></li>
            <li><a className='font-Ovo cursor-pointer hover:text-gray-700' href='#about'>About</a></li>
            <li><a className='font-Ovo cursor-pointer hover:text-gray-700' href='#services'>Services</a></li>
            <li><a className='font-Ovo cursor-pointer hover:text-gray-700' href='#work'>My Work</a></li>
            <li><a className='font-Ovo cursor-pointer hover:text-gray-700' href='#contact'>Contact me</a></li>
        </ul>
        <div className='flex items-center gap-4'>
            <button>
                <Image src={assets.moon_icon} alt="Moon Icon" className='w-6' />
            </button>

           <a href="#contact" className={`hidden lg:flex items-center gap-3 px-10 py-3 border rounded-full ml-4 font-Ovo hover:bg-lightHover duration-500 transition-all ${
             isScrolling ? 'border-gray-500 text-black' : 'border-white text-white'
           }`}>
               Contact <Image src={isScrolling ? assets.arrow_icon : assets.right_arrow_white} alt="Arrow" className='w-3 ml-1' />
           </a>
           <button className='block md:hidden ml-3' onClick={toggleMenu}>
            <Image src={isScrolling ? assets.menu_black : assets.menu_white} alt="Menu" className='w-6' />
           </button>
        </div>
        
        {/* Mobile Menu */}
        <ul className={`md:hidden flex flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-all duration-500 ${
          isMenuOpen ? 'right-0' : '-right-64'
        }`}>
            <div className='absolute right-6 top-6'>
                <button onClick={closeMenu}>
                    <Image src={assets.close_black} alt="Close" className='w-5 cursor-pointer' />
                </button>
            </div>
            <li><a className='font-Ovo cursor-pointer hover:text-gray-700' href='#top' onClick={closeMenu}>Home</a></li>
            <li><a className='font-Ovo cursor-pointer hover:text-gray-700' href='#about' onClick={closeMenu}>About</a></li>
            <li><a className='font-Ovo cursor-pointer hover:text-gray-700' href='#services' onClick={closeMenu}>Services</a></li>
            <li><a className='font-Ovo cursor-pointer hover:text-gray-700' href='#portfolio' onClick={closeMenu}>My Work</a></li>
            <li><a className='font-Ovo cursor-pointer hover:text-gray-700' href='#contact' onClick={closeMenu}>Contact me</a></li>
        </ul>

    </nav>
    </>
  )
}

export default Navbar