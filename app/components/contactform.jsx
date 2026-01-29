'use client'

import React from 'react'
import { IoCall, IoMail, IoLocationSharp } from "react-icons/io5"
import { FaFacebook, FaLinkedin } from "react-icons/fa"

const ContactForm = () => {
  return (
    <section className='my-20 px-4 sm:px-8'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>

        
        <div className='space-y-6 justify-center items-center'>
          <h1 className='text-2xl text-green-400 font-bold text-center sm:text-left'>
            Leave Us a Message
          </h1>

          <form className='space-y-4'>
            <input
              type="text"
              placeholder="Your Name"
              className='w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300'
            />

            <input
              type="email"
              placeholder="Your Email"
              className='w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300'
            />

            <input
              type="text"
              placeholder="Your Phone"
              className='w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300'
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className='w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300'
            />

            <button
              type="submit"
              className='w-full bg-green-400 hover:bg-green-500 text-white font-semibold py-2 rounded'
            >
              Send
            </button>
          </form>
        </div>

        
        <div className='space-y-6 text-gray-800'>
          <h2 className='text-2xl font-bold text-green-400 text-center sm:text-left'>
            Contact Details
          </h2>

          <div className='flex items-center gap-3'>
            <IoCall className='text-xl text-green-500' />
            <p>0720984113 / 0708275214</p>
          </div>

          <div className='flex items-center gap-3'>
            <IoMail className='text-xl text-green-500' />
            <p>dianivet@gmail.com</p>
          </div>

          <div className='flex items-center gap-3'>
            <IoLocationSharp className='text-xl text-green-500' />
            <p>Diani Beach, southcoast</p>
          </div>

          
          <div className='flex gap-4 pt-4'>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className='text-2xl text-green-500 hover:text-green-700'
            >
              <FaFacebook />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className='text-2xl text-green-500 hover:text-green-700'
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ContactForm
