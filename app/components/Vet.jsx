'use client'

import Image from 'next/image'
import React from 'react'

const Vet = () => {
  return (
    <div className='my-20 px-4 sm:px-8'>

        <div className='flex flex-col sm:flex-row gap-4'>

            <div className='w-full sm:w-1/2'>

            <h1 className='text-center text-2xl text-green-600'>Meet Our Vet & CEO</h1>
            <p className='text-lg text-gray-800 mt-4'>Dr. Kiloso is a dedicated and compassionate veterinarian with years of experience caring for animals of all kinds. He earned his veterinary degree after rigorous study and training, and he is registered with the Vet Board of Kenya, ensuring the highest standards of professional practice and ethical care for your pets. Known for his gentle approach and attention to detail, Dr. Kiloso builds strong relationships with both pet owners and their animals, making every visit calm and reassuring. He stays up to date with the latest advances in veterinary medicine, so your companion receives the best possible treatment. Whether it’s routine checkups, vaccinations, or more complex care, Dr. Kiloso’s commitment to animal welfare and healthy outcomes makes him a trusted choice for pet families across the region.</p>

            </div>

            <div className='w-full sm:w-1/2 relative h-64 sm:h-80 md:h-96'>

            <Image 

            src='/veti.jpeg'
            alt='dianibeach hospital'
            fill 
            className='rounded-md object-cover shadow-lg '



/>

            </div>

        </div>

    </div>
  )
}

export default Vet