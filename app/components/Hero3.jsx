import React from 'react'
import Image from 'next/image'

const Hero3 = () => {
  return (
    <section className="relative h-100 w-full">
      
      <Image
        src="/dogy.jpeg"      
        alt="Our Services"
        fill
        className="object-cover"
        priority
      />

      
      <div className="absolute inset-0 bg-black/60"></div>


      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
          Our Services
        </h1>

        <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl">
          Welcome to DianiVet — Explore Our Wide Range Of services and always feel free to give us a call incase of any enquiry on any of our services
        </p>
      </div>
    </section>
  )
}

export default Hero3
