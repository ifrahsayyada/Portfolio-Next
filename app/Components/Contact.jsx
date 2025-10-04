import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '../../assets/assets'
import { motion } from "motion/react"

const Contact = ({ isDarkMode }) => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2bfe5dc2-38fa-4204-b4d5-820da74f2258");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
  return (
    <motion.div 
      id='contact' 
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h4 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className='text-center mb-2 text-lg font-Ovo' 
        style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}
      >
        Connect with me
      </motion.h4>
      <motion.h2 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className='text-center text-5xl font-Ovo mb-2' 
        style={{ color: isDarkMode ? 'white' : 'black' }}
      >
        Get in touch
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo' 
        style={{ color: isDarkMode ? '#d1d5db' : '#4b5563' }}
      >
        I would love to hear from you! if you have any questions, comments, or feedback, please use the form below.
      </motion.p>
      
      <motion.form 
        onSubmit={onSubmit} 
        className='max-w-2xl mx-auto'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <motion.div 
          className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.55 }}
            whileFocus={{ scale: 1.02 }}
            type='text'
            placeholder='Enter Your Name'
            required
            className='p-4 border rounded-lg focus:outline-none focus:border-gray-500 font-Outfit transition-all duration-300'
            style={{
              backgroundColor: isDarkMode ? '#1f2937' : 'white',
              borderColor: isDarkMode ? '#4b5563' : '#d1d5db',
              color: isDarkMode ? 'white' : 'black'
            }}
            name="name"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            whileFocus={{ scale: 1.02 }}
            type='email'
            placeholder='Enter Your Email'
            required
            className='p-4 border rounded-lg focus:outline-none focus:border-gray-500 font-Outfit transition-all duration-300'
            style={{
              backgroundColor: isDarkMode ? '#1f2937' : 'white',
              borderColor: isDarkMode ? '#4b5563' : '#d1d5db',
              color: isDarkMode ? 'white' : 'black'
            }}
            name='email'
          />
        </motion.div>
        <motion.textarea
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.65 }}
          whileFocus={{ scale: 1.01 }}
          rows={6}
          placeholder='Enter Your Message'
          required
          className='w-full p-4 border rounded-lg focus:outline-none focus:border-gray-500 font-Outfit mb-6 resize-none transition-all duration-300'
          style={{
            backgroundColor: isDarkMode ? '#1f2937' : 'white',
            borderColor: isDarkMode ? '#4b5563' : '#d1d5db',
            color: isDarkMode ? 'white' : 'black'
          }}
          name='message'
        ></motion.textarea>
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.3, 
            delay: 0.7,
            type: "spring",
            stiffness: 260
          }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: isDarkMode 
              ? '0 10px 25px rgba(255, 255, 255, 0.2)' 
              : '0 10px 25px rgba(0, 0, 0, 0.2)'
          }}
          whileTap={{ scale: 0.95 }}
          type='submit'
          className='py-3 px-8 w-max flex items-center justify-center gap-2 rounded-full mx-auto transition-all duration-300 font-Outfit'
          style={{
            backgroundColor: isDarkMode ? 'white' : 'black',
            color: isDarkMode ? 'black' : 'white'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = isDarkMode ? '#e5e7eb' : '#374151';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = isDarkMode ? 'white' : 'black';
          }}
        >
          Submit now 
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Image 
              src={isDarkMode ? assets.right_arrow_bold : assets.right_arrow_white} 
              alt='arrow' 
              className='w-4' 
            />
          </motion.div>
        </motion.button>
        
        {result && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className='text-center mt-4 font-Outfit text-lg' 
            style={{ color: isDarkMode ? 'white' : 'black' }}
          >
            {result}
          </motion.p>
        )}
      </motion.form>
    </motion.div>
  )
}

export default Contact