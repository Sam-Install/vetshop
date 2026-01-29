'use client'

import React from 'react'
import Image from 'next/image'

const services = [
  {
    img: '/nutrition.jpeg',
    title: "Nutrition Advice",
    description: "Expert guidance to ensure your pet gets the right balance of nutrients for optimal health, weight management, and energy."
  },
  {
    img: '/multivitamins.jpeg',
    title: 'Multivitamin Jabs',
    description: "Support your pet’s immune system and overall vitality with safe and effective multivitamin injections tailored to their needs."
  },
  {
    img: '/dentist.jpeg',
    title: "Dental Services",
    description: "Full dental care, including checkups, cleanings, and treatments to prevent pain, decay, and gum disease."
  },
  {
    img: '/general.jpeg',
    title: "General Wellness Checkup",
    description: "Routine checkups to monitor your pet’s health, detect early signs of illness, and keep vaccinations up to date."
  },
  {
    img: '/nutrition.jpeg',
    title: "Weight Management",
    description: "Personalized programs to help pets achieve and maintain a healthy weight with diet plans and exercise guidance."
  },
  {
    img: '/multivitamins.jpeg',
    title: 'Vaccination Plans',
    description: "Comprehensive immunization schedules to protect your pet against common and serious diseases."
  },
  {
    img: '/dentist.jpeg',
    title: "Ear & Eye Care",
    description: "Gentle examinations and treatments to prevent and address infections, irritation, and other sensory health issues."
  },
  {
    img: '/general.jpeg',
    title: "Parasite Prevention",
    description: "Effective solutions for fleas, ticks, worms, and other parasites to keep your pet comfortable and disease-free."
  },
  {
    img: '/nutrition.jpeg',
    title: "Senior Pet Care",
    description: "Specialized wellness checks and support for older pets, focusing on mobility, diet, and quality of life."
  },
  {
    img: '/multivitamins.jpeg',
    title: "Behavioral Advice",
    description: "Professional guidance to address anxiety, training issues, and behavioral challenges safely and effectively."
  }
]

const ServiceSection = () => {
  return (
    <section className='my-10 px-4 sm:px-8'>
      <h1 className='text-center text-2xl text-green-400 font-bold mb-8'>
        Our Veterinary Services
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {services.map((service, index) => (
          <div
            key={index}
            className='bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition'
          >
        
            <div className='relative w-full h-40 sm:h-48'>
              <Image
                src={service.img}
                alt={service.title}
                fill
                className='object-cover'
              />
            </div>

            
            <div className='p-4'>
              <h2 className='text-xl font-semibold text-gray-800'>
                {service.title}
              </h2>
              <p className='text-gray-600 mt-2'>
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServiceSection
