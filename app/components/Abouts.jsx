'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Abouts = () => {
  return (
    <section className="my-16 sm:my-24 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="flex flex-col-reverse sm:flex-row items-center gap-12">

        
        <div className="w-full sm:w-1/2 text-center sm:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            About Us
          </h1>

          <h2 className="text-xl sm:text-2xl font-semibold text-green-500">
            Committed to Caring for Your Beloved Pets
          </h2>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            At DianiVet, we are passionate about providing compassionate and
            professional veterinary care for every member of your family. Our
            experienced team creates a welcoming environment where pets receive
            personalized treatments and gentle attention. From routine wellness
            checks to advanced care services, we focus on your pet’s health,
            comfort, and happiness every step of the way.
          </p>

          <div className="flex justify-center sm:justify-start">
            <Link href="/services">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                Our Services
              </button>
            </Link>
          </div>
        </div>

        
        <div className="w-full sm:w-1/2 relative h-64 sm:h-80 md:h-96 rounded-md overflow-hidden shadow-xl">
          <Image
            src="/abouts.jpeg"
            alt="DianiVet Veterinary Team Caring for Pets"
            fill
            className="object-cover rounded-md"
            priority
          />
        </div>

      </div>
    </section>
  )
}

export default Abouts
