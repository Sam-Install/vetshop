'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero6 = () => {
  return (
    <section className="relative w-full my-24 h-[420px] sm:h-[520px] md:h-[620px]">

      
      <Image
        src="/dogy.jpeg"
        alt="Pet boarding services at DianiVet in Diani Beach"
        fill
        className="object-cover"
        priority
      />

      
      <div className="absolute inset-0 bg-black/60" />

      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Safe & Comfortable <br className="hidden sm:block" />
          <span className="text-green-400">Pet Boarding Services</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
          Going away? Leave your pet in caring hands.
          Our boarding services provide a safe, clean, and loving environment
          where your pet receives attention, comfort, and professional care.
        </p>

        
        <div className="mt-8">
          <Link href="/contact">
            <button className="bg-green-500 hover:bg-green-600 transition text-white font-semibold text-sm sm:text-base px-8 py-3 rounded-lg shadow-md">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero6
