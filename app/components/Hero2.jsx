import React from 'react'
import Image from 'next/image'

const Hero2 = () => {
  return (
    <section className="relative h-100 w-full">
      
      <Image
        src="/abs.jpeg"      
        alt="About Us Background"
        fill
        className="object-cover"
        priority
      />

      
      <div className="absolute inset-0 bg-black/60"></div>


      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
          About Us
        </h1>

        <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl">
          Welcome to DianiVet — where compassionate care meets expert veterinary service.
          We provide personalized treatments, wellness plans, and a loving environment
          for your beloved pets to thrive.
        </p>
      </div>
    </section>
  )
}

export default Hero2
