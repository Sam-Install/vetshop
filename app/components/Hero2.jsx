'use client'

import React from 'react'
import Image from 'next/image'

const Hero2 = () => {
  return (
    <section className="relative h-[70vh] w-full">

      
      <Image
        src="/Abs.jpeg"
        alt="About Us Background"
        fill
        priority
        className="object-cover"
      />

      
      <div className="absolute inset-0 bg-black/65"></div>

      
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
          About <span className="text-green-500">Us</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-200 max-w-3xl leading-relaxed">
          Welcome to DianiVet — where compassionate care meets expert veterinary service.
          We provide personalized treatments, preventive wellness plans, and a calm,
          welcoming environment where your pets can truly thrive.
        </p>
      </div>

    </section>
  )
}

export default Hero2
