import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '../../assets/assets'

const Contact = () => {

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
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        Connect with me
      </h4>
      <h2 className='text-center text-5xl font-Ovo mb-2'>
        Get in touch
      </h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>I would love to hear from you! if you have any questions, comments, or feedback, please use the form below.</p>
      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
          <input
            type='text'
            placeholder='Enter Your Name'
            required
            className='p-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 font-Outfit'
            name="name"
          />
          <input
            type='email'
            placeholder='Enter Your Email'
            required
            className='p-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 font-Outfit'
            name='email'
          />
        </div>
        <textarea
          rows={6}
          placeholder='Enter Your Message'
          required
          className='w-full p-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 font-Outfit mb-6 resize-none'
        name='message'
        ></textarea>
        <button
          type='submit'
          className='py-3 px-8 w-max flex items-center justify-center gap-2 bg-black text-white rounded-full mx-auto hover:bg-gray-800 transition-all duration-300 font-Outfit'
        >
          Submit now <Image src={assets.right_arrow_white} alt='arrow' className='w-4' />
        </button>
        
        {result && (
          <p className='text-center mt-4 font-Outfit text-lg'>
            {result}
          </p>
        )}
      </form>
    </div>
  )
}

export default Contact  