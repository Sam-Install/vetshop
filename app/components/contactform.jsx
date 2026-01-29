'use client'

import React from 'react'
import { IoCall, IoMail, IoLocationSharp } from "react-icons/io5"
import { FaFacebook, FaLinkedin } from "react-icons/fa"

const ContactForm = () => {
  return (
    <section
      className="my-24 px-4 sm:px-8 max-w-7xl mx-auto"
      aria-labelledby="contact-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        
        <div className="space-y-8">
          <h1
            id="contact-heading"
            className="text-3xl font-bold text-green-500 text-center lg:text-left"
          >
            Leave Us a Message
          </h1>

          <p className="text-gray-600 text-center lg:text-left max-w-md">
            Have a question or need veterinary assistance?  
            Fill in the form below and our team will get back to you promptly.
          </p>

          <form className="space-y-5" aria-label="Contact form">
            <input
              type="text"
              placeholder="Your Name"
              aria-label="Your Name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              aria-label="Your Email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <input
              type="tel"
              placeholder="Your Phone Number"
              aria-label="Your Phone Number"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              aria-label="Your Message"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 transition text-white font-semibold py-3 rounded-lg shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>

      
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-green-500 text-center lg:text-left">
            Contact Details
          </h2>

          <div className="space-y-5 text-gray-800 text-base">
            <div className="flex items-center gap-4">
              <IoCall className="text-2xl text-green-500" />
              <p>0720 984 113 / 0708 275 214</p>
            </div>

            <div className="flex items-center gap-4">
              <IoMail className="text-2xl text-green-500" />
              <p>dianivet@gmail.com</p>
            </div>

            <div className="flex items-center gap-4">
              <IoLocationSharp className="text-2xl text-green-500" />
              <p>Diani Beach, South Coast, Kenya</p>
            </div>
          </div>

        
          <div className="flex gap-6 pt-4 justify-center lg:justify-start">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit DianiVet on Facebook"
              className="text-3xl text-green-500 hover:text-green-700 transition"
            >
              <FaFacebook />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit DianiVet on LinkedIn"
              className="text-3xl text-green-500 hover:text-green-700 transition"
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
