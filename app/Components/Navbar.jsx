import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import Image from 'next/image'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
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
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-500 ${isScrolling ? 'backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        {/* Logo */}
        <a href="#top">
          <Image src={assets.logo} alt="Logo" className="w-28 cursor-pointer mr-14" />
        </a>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 shadow-sm transition-all duration-500 ${isScrolling ? 'backdrop-blur-sm dark:bg-gray-800/70' : 'bg-white bg-opacity-50 dark:bg-gray-900/40'}`}>
            <li><a className="font-Ovo cursor-pointer text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-300" href="#top">Home</a></li>
            <li><a className="font-Ovo cursor-pointer text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-300" href="#about">About</a></li>
            <li><a className="font-Ovo cursor-pointer text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-300" href="#services">Services</a></li>
            <li><a className="font-Ovo cursor-pointer text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-300" href="#work">My Work</a></li>
            <li><a className="font-Ovo cursor-pointer text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-300" href="#contact">Contact me</a></li>
        </ul>

        {/* Right side buttons */}
        <div className="flex items-center gap-4">
            {/* Dark/Light Toggle */}
            <button 
              onClick={() => setIsDarkMode(prev => !prev)}
              className="p-2 rounded-full hover:bg-dark dark:hover:bg-dark transition-colors duration-300"
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <Image 
                src={isDarkMode ? assets.sun_icon : assets.moon_icon} 
                alt={isDarkMode ? 'Sun Icon' : 'Moon Icon'} 
                className="w-6" 
              />
            </button>

            {/* Contact Button */}
            <a href="#contact" className={`hidden lg:flex items-center gap-3 px-10 py-3 border-2 rounded-full ml-4 font-Ovo hover:bg-lightHover dark:hover:bg-darkHover duration-500 transition-all ${isScrolling ? 'border-black bg-white text-black dark:text-white dark:border-white dark:bg-gray-800' : 'border-black text-black bg-white/80 dark:border-white dark:text-white dark:bg-gray-800/80'}`}>
               Contact 
               <Image 
                 src={assets.arrow_icon} 
                 alt="Arrow" 
                 className="w-3 ml-1 dark:invert" 
               />
            </a>

            {/* Mobile Menu Toggle */}
            <button className="block md:hidden ml-3" onClick={toggleMenu}>
              <Image 
                src={isDarkMode ? assets.menu_white : assets.menu_black} 
                alt="Menu" 
                className="w-6" 
              />
            </button>
        </div>
        
        {/* Mobile Menu */}
    <ul className={`md:hidden flex flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 dark:bg-gray-800 transition-all duration-500 ${isMenuOpen ? 'right-0' : '-right-64'}`}>
      <div className="absolute right-6 top-6">
        <button onClick={closeMenu}>
          <Image src={assets.close_black} alt="Close" className="w-5 cursor-pointer dark:filter dark:invert" />
        </button>
      </div>
      <li><a className="font-Ovo cursor-pointer text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-300" href="#top" onClick={closeMenu}>Home</a></li>
      <li><a className="font-Ovo cursor-pointer text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-300" href="#about" onClick={closeMenu}>About</a></li>
      <li><a className="font-Ovo cursor-pointer text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-300" href="#services" onClick={closeMenu}>Services</a></li>
      <li><a className="font-Ovo cursor-pointer text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-300" href="#work" onClick={closeMenu}>My Work</a></li>
      <li><a className="font-Ovo cursor-pointer text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-300" href="#contact" onClick={closeMenu}>Contact me</a></li>
    </ul>
    </nav>
  )
}

export default Navbar
