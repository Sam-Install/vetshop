'use client'

import Image from 'next/image'
import React from 'react'

const Vet = () => {
  return (
    <section className="my-16 sm:my-24 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="flex flex-col-reverse sm:flex-row items-center gap-12">

        
        <div className="w-full sm:w-1/2 text-center sm:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-green-600">
            Meet Our Vet & CEO
          </h1>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            <strong>Dr. Kiloso</strong> is a dedicated and compassionate veterinarian
            with years of experience caring for animals of all kinds. He earned
            his veterinary degree after rigorous study and training and is
            officially registered with the <strong>Veterinary Board of Kenya</strong>,
            ensuring the highest standards of professional practice and ethical
            care for your pets.
          </p>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Known for his gentle approach and attention to detail, Dr. Kiloso
            builds strong relationships with both pet owners and their animals,
            making every visit calm and reassuring. He stays up to date with the
            latest advances in veterinary medicine to ensure your companion
            receives the best possible care — from routine checkups and
            vaccinations to more complex treatments.
          </p>
        </div>

        
        <div className="w-full sm:w-1/2 relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/veti.jpeg"
            alt="Dr. Kiloso – Certified Veterinarian and CEO of DianiVet"
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>

      </div>
    </section>
  )
}

export default Vet
