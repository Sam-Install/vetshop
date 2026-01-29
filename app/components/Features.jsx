'use client'

import React from 'react'
import { IoCall } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdOutlinePets } from "react-icons/md";

const feats = [
  {
    icon: <IoCall className="text-4xl text-green-500" />,
    title: '24/7 Support',
    description: "We offer around‑the‑clock care and guidance to our clients."
  },
  {
    icon: <FaTools className="text-4xl text-green-500" />,
    title: "Modern Tools",
    description: "We are equipped with updated veterinary equipment for accurate and comfortable treatments."
  },
  {
    icon: <IoPerson className="text-4xl text-green-500" />,
    title: "Certified Vets",
    description: "Our team is made up of certified vets who are experienced and compassionate."
  },
  {
    icon: <MdOutlinePets className="text-4xl text-green-500" />,
    title: "Pet Friendly",
    description: "Our environment is safe, welcoming, and comfortable for all pets."
  }
]

const Features = () => {
  return (
    <section className='my-16 sm:my-24 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto'>
      <header>
        <h1 className='text-center text-3xl sm:text-4xl font-extrabold text-green-600 mb-12'>
          Our Features That Set Us Apart
        </h1>
      </header>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {feats.map((feat, index) => (
          <article
            key={index}
            className='flex flex-col items-center text-center p-6 border rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out'
          >
            <div className='mb-5'>
              {feat.icon}
            </div>

            <h2 className='text-xl sm:text-2xl font-semibold text-gray-900 mb-2'>
              {feat.title}
            </h2>

            <p className='text-gray-700 leading-relaxed text-sm sm:text-base'>
              {feat.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Features
