import React from 'react'
import Image from 'next/image'

const Hero3 = () => {
  return (
    <section className="relative h-[70vh] w-full">

      
      <Image
        src="/dogy.jpeg"
        alt="Veterinary services at DianiVet"
        fill
        priority
        className="object-cover"
      />

      
      <div className="absolute inset-0 bg-black/65"></div>

    
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
          Our <span className="text-green-500">Services</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-200 max-w-3xl leading-relaxed">
          Explore our wide range of professional veterinary services designed to keep
          your pets healthy, happy, and comfortable. If you have any questions or need
          guidance, our team is always just a call away.
        </p>
      </div>

    </section>
  )
}

export default Hero3
