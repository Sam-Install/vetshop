'use client'

import React from 'react'
import Image from 'next/image'

const Abouts = () => {
  return (
    <div className='my-20 px-4 sm:px-8'>
      <div className='flex flex-col sm:flex-row gap-8 items-center justify-center'>
        
        
        <div className='w-full sm:w-1/2 relative h-64 sm:h-80 md:h-96'>
          <Image
            src="/abouts.jpeg"
            alt="DianiVet Team"
            fill
            className='rounded-md object-cover shadow-lg'
            priority
          />
        </div>

        
        <div className='w-full sm:w-1/2 text-center sm:text-left space-y-4'>
          <h1 className='text-2xl font-bold text-black text-center'>About Us</h1>

          <h2 className='text-xl font-semibold text-center text-blue-600'>
            Committed to Caring for Your Beloved Pets
          </h2>

          <p className='text-base text-gray-700 leading-relaxed text-center'>
            At DianiVet, we are passionate about providing compassionate and
            professional veterinary care for every member of your family. Our
            experienced team is dedicated to creating a welcoming environment
            where pets receive personalized treatments and gentle attention.
            From routine wellness checks to advanced care services, we focus on
            your pet’s health, comfort, and happiness every step of the way.
          </p>

          
          <div className='flex justify-center'>
            <button className='bg-green-300 hover:bg-green-400 text-white font-semibold px-6 py-2 rounded-lg'>
              Our Services
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Abouts
