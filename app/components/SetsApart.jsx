'use client'

import React from 'react'
import Link from 'next/link'

const SetsApart = () => {
  return (
    <div className='my-20 px-4 sm:px-8'>

        <h1 className='text-2xl text-green-500 text-center'>What Sets Us Apart</h1>
        <p className='text-center mt-4 text-gray-500'>
          At DianiVet, our passion for animals goes beyond a profession — it’s a way of life. 
          We are a close-knit team united by a shared love for pets and a genuine desire to make a positive difference in their lives. 
          Under the leadership of Dr. Kiloso, who is registered with the Vet Board of Kenya, we take pride in offering care that feels personal, compassionate, and trustworthy. 
          What truly sets us apart is our commitment to forming real connections with both pets and their owners — we listen, we care, and we treat every animal as if they were our own. 
          Our clinic combines modern veterinary techniques with a warm, welcoming atmosphere so that every visit is comfortable and reassuring. 
          Whether it’s preventive wellness, urgent care, or tailored treatment plans, we strive to deliver exceptional service with integrity and heart.
        </p>

        <div className='flex justify-center mt-4'>
            <Link href="/contact">
              <button className='px-8 py-2 text-sm bg-green-400 text-white rounded'>
                Book an Appointment
              </button>
            </Link>
        </div>

    </div>
  )
}

export default SetsApart
