'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link' 

const Hero6 = () => {
  return (
    <section className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full my-20">
      
      <Image
        src="/dogy.jpeg"
        alt="Contact vet diani"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white">
          Boarding Services Available
        </h1>

        <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl">
          We also have boarding services available for you, our dear client.
          Reach out and let us arrange your pet’s next stay.
        </p>

        <div className='flex justify-center mt-4'>
          <Link href="/contact">
            <button className='bg-green-400 text-sm text-white px-6 py-2 rounded'>
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero6
