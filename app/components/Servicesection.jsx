'use client'

import React from 'react'
import Image from 'next/image'

const services = [
  {
    img: '/nutrition.jpeg',
    title: "Nutrition Advice",
    description:
      "Expert guidance to ensure your pet receives a balanced diet that supports healthy growth, energy, and long-term wellbeing."
  },
  {
    img: '/multivitamins.jpeg',
    title: 'Multivitamin Jabs',
    description:
      "Safe and effective multivitamin injections designed to boost immunity, vitality, and overall health."
  },
  {
    img: '/dentist.jpeg',
    title: "Dental Services",
    description:
      "Professional dental checkups, cleanings, and treatments to prevent gum disease, pain, and tooth decay."
  },
  {
    img: '/general.jpeg',
    title: "General Wellness Checkups",
    description:
      "Routine health assessments to detect early signs of illness and keep vaccinations up to date."
  },
  {
    img: '/nutrition.jpeg',
    title: "Weight Management",
    description:
      "Personalized diet and exercise plans to help pets achieve and maintain a healthy weight."
  },
  {
    img: '/multivitamins.jpeg',
    title: 'Vaccination Plans',
    description:
      "Comprehensive immunization programs that protect pets from common and serious diseases."
  },
  {
    img: '/dentist.jpeg',
    title: "Ear & Eye Care",
    description:
      "Gentle examinations and treatments to manage infections, irritation, and sensory health issues."
  },
  {
    img: '/general.jpeg',
    title: "Parasite Prevention",
    description:
      "Reliable prevention and treatment solutions for fleas, ticks, worms, and other parasites."
  },
  {
    img: '/nutrition.jpeg',
    title: "Senior Pet Care",
    description:
      "Specialized care focused on mobility, nutrition, comfort, and quality of life for aging pets."
  },
  {
    img: '/multivitamins.jpeg',
    title: "Behavioral Advice",
    description:
      "Professional behavioral guidance to address anxiety, training challenges, and habits safely."
  }
]

const ServiceSection = () => {
  return (
    <section className="my-24 px-4 sm:px-8">

  
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Our <span className="text-green-500">Veterinary Services</span>
        </h1>
        <p className="mt-4 text-gray-600 leading-relaxed">
          At DianiVet, we offer a comprehensive range of veterinary services designed
          to keep your pets healthy, comfortable, and thriving at every stage of life.
        </p>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <article
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >

          
            <div className="relative w-full h-44 sm:h-52">
              <Image
                src={service.img}
                alt={`${service.title} at DianiVet`}
                fill
                className="object-cover"
              />
            </div>

            
            <div className="p-5 text-center sm:text-left">
              <h2 className="text-lg font-semibold text-gray-900">
                {service.title}
              </h2>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          </article>
        ))}
      </div>

    </section>
  )
}

export default ServiceSection
