'use client'

import Image from 'next/image'
import React from 'react'

const Office = () => {
  return (
    <section className='my-16 sm:my-24 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto'>
      <div className='flex flex-col sm:flex-row items-center gap-12'>

        
        <div className='w-full sm:w-1/2 relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-xl'>
          <Image
            src="/shepherd.jpeg"
            alt="DianiVet Pets & Vet Office"
            fill
            className='object-cover rounded-xl'
            priority
          />
        </div>

        
        <div className='w-full sm:w-1/2 text-center sm:text-left space-y-6'>
          <h1 className='text-3xl sm:text-4xl font-extrabold text-green-400'>
            Pets & <span className='text-black'>Vet</span> Operational / Open Hours
          </h1>

          <div className='space-y-6 text-gray-800 text-base sm:text-lg'>
            <div className='border-b pb-2'>
              <p className='font-semibold'>Weekdays</p>
              <p>9:00am - 6:00pm</p>
            </div>

            <div className='border-b pb-2'>
              <p className='font-semibold'>Saturday</p>
              <p>9:00am - 6:00pm</p>
            </div>

            <div className='border-b pb-2'>
              <p className='font-semibold'>Sunday</p>
              <p>By Appointment</p>
            </div>

            <div className='border-b pb-2'>
              <p className='font-semibold'>Public Holidays</p>
              <p>By Appointment</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Office
