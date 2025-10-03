'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import Navbar from "./Components/Navbar"
import Header from "./Components/Header"
import About from "./Components/About"
import Services from "./Components/Services"
import Work from "./Components/Work"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Start with light mode
  
  useEffect(() => {
    // Check localStorage and system preference on client side only
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        setIsDarkMode(true);
      } else if (savedTheme === 'light') {
        setIsDarkMode(false);
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setIsDarkMode(true);
      }
    }
  }, []);
  
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);
  
  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode}   />
      <About isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
