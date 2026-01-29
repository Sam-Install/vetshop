'use client'

import React from 'react'
import { IoCall } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdOutlinePets } from "react-icons/md";

const feats = [
  {
    icon: <IoCall className="text-3xl text-green-500" />,
    title: '24/7 Support',
    description: "We offer around‑the‑clock care and guidance to our clients."
  },
  {
    icon: <FaTools className="text-3xl text-green-500" />,
    title: "Modern Tools",
    description: "We are equipped with updated veterinary equipment for accurate and comfortable treatments."
  },
  {
    icon: <IoPerson className="text-3xl text-green-500" />,
    title: "Certified Vets",
    description: "Our team is made up of certified vets who are experienced and compassionate."
  },
  {
    icon: <MdOutlinePets className="text-3xl text-green-500" />,
    title: "Pet Friendly",
    description: "Our environment is safe, welcoming, and comfortable for all pets."
  }
]

const Features = () => {
  return (
    <section className='my-20 px-4 sm:px-8'>
      <h1 className='text-center text-2xl sm:text-3xl font-bold text-green-600 mb-8'>
        Our Features That Set Us Apart
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {feats.map((feat, index) => (
          <div
            key={index}
            className='flex flex-col items-center text-center p-6 border rounded-lg shadow-md hover:shadow-lg transition'
          >
            
            <div className='mb-4'>
              {feat.icon}
            </div>

    
            <h2 className='text-xl font-semibold text-gray-800'>
              {feat.title}
            </h2>

            
            <p className='text-gray-600 mt-2 leading-relaxed'>
              {feat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
