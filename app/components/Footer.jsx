'use client'

import React from 'react'
import Link from 'next/link'
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from 'react-icons/io5'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          
          <nav aria-label="Footer Navigation">
            <h2 className="text-xl font-semibold mb-6 text-white">
              Quick Access
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/" className="hover:text-green-400 transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-green-400 transition-colors">Our Services</Link></li>
              <li><Link href="/about" className="hover:text-green-400 transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-green-400 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-green-400 transition-colors">Contact Us</Link></li>
            </ul>
          </nav>

          
          <address className="not-italic">
            <h2 className="text-xl font-semibold mb-6">
              Get In Touch
            </h2>

            <div className="space-y-2 text-gray-400">
              <p> 0778 338 838</p>
              <p> 0765 355 35</p>
              <p>dianivet@gmail.com</p>
            </div>

            <div className="flex gap-6 mt-6 text-2xl text-gray-400">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="hover:text-green-400 transition-colors"
              >
                <IoLogoFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="hover:text-green-400 transition-colors"
              >
                <IoLogoTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-green-400 transition-colors"
              >
                <IoLogoInstagram />
              </a>
            </div>
          </address>

          {/* Office Hours */}
          <section>
            <h2 className="text-xl font-semibold mb-6">
              Pets & Vets Office Hours
            </h2>

            <div className="space-y-4 text-gray-400 text-sm sm:text-base">
              <div className="border-b border-gray-700 pb-2">
                <p className="font-semibold text-white">Weekdays</p>
                <p>9:00am – 6:00pm</p>
              </div>

              <div className="border-b border-gray-700 pb-2">
                <p className="font-semibold text-white">Saturday</p>
                <p>9:00am – 6:00pm</p>
              </div>

              <div className="border-b border-gray-700 pb-2">
                <p className="font-semibold text-white">Sunday</p>
                <p>By Appointment</p>
              </div>

              <div className="border-b border-gray-700 pb-2">
                <p className="font-semibold text-white">Public Holidays</p>
                <p>By Appointment</p>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Diani Vet. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
