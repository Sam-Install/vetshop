'use client'

import React from 'react'
import Link from 'next/link'
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from 'react-icons/io5'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12">
      <div className="container mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8">

        
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Access</h2>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/services" className="hover:text-white">Our Services</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

    
        <div>
          <h2 className="text-lg font-semibold mb-4">Get In Touch</h2>
          <p className="text-gray-300">0778338838</p>
          <p className="text-gray-300">076535535</p>
          <p className="text-gray-300">dianivet@gmail.com</p>

        
          <div className="flex gap-4 mt-4 text-2xl text-gray-300">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white">
              <IoLogoFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white">
              <IoLogoTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white">
              <IoLogoInstagram />
            </a>
          </div>
        </div>

        
        <div>
          <h2 className="text-lg font-semibold mb-4">Pets & Vets Office Hours</h2>
          <div className="space-y-3 text-gray-300">
            <div className="border-b border-gray-700 pb-2">
              <p className="font-semibold">Weekdays</p>
              <p>9:00am - 6:00pm</p>
            </div>
            <div className="border-b border-gray-700 pb-2">
              <p className="font-semibold">Saturday</p>
              <p>9:00am - 6:00pm</p>
            </div>
            <div className="border-b border-gray-700 pb-2">
              <p className="font-semibold">Sunday</p>
              <p>By Appointment</p>
            </div>
            <div className="border-b border-gray-700 pb-2">
              <p className="font-semibold">Public Holidays</p>
              <p>By Appointment</p>
            </div>
          </div>
        </div>

      </div>

      
      <div className="border-t border-gray-800 mt-8 pt-4 pb-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Diani Vet. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
