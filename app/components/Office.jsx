'use client'

import Image from 'next/image'
import React from 'react'

const Office = () => {
  return (
    <section className='my-20 px-4 sm:px-8'>
      <div className='flex flex-col sm:flex-row gap-8 items-center'>

    
        <div className='w-full sm:w-1/2 relative h-64 sm:h-80 md:h-96'>
          <Image
            src="/shepherd.jpeg"
            alt="Pets & Vets Office"
            fill
            className='rounded-md object-cover shadow-lg'
            priority
          />
        </div>

        
        <div className='w-full sm:w-1/2 text-center sm:text-left space-y-6'>
          <h1 className='text-3xl font-bold text-green-400'>
            Pets & <span className='text-black'>Vet</span> Operational / Open Hours
          </h1>

          
          <div className='space-y-4 text-gray-800 text-lg'>

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
