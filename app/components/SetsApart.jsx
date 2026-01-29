'use client'

import React from 'react'
import Link from 'next/link'

const SetsApart = () => {
  return (
    <section className="my-16 sm:my-24 px-4 sm:px-8 lg:px-16 max-w-5xl mx-auto">

    
      <h1 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-800">
        What Sets <span className="text-green-600">Us Apart</span>
      </h1>

      
      <p className="text-center mt-6 text-gray-600 leading-relaxed text-lg">
        At DianiVet, our passion for animals goes beyond a profession — it’s a way of life.
        We are a close-knit team united by a genuine love for pets and a commitment to making
        a positive difference in their lives. Under the leadership of Dr. Kiloso, who is
        registered with the Vet Board of Kenya, we provide care that is personal, compassionate,
        and trustworthy.
        <br /><br />
        What truly sets us apart is our focus on building real connections with both pets and
        their owners. We listen, we care, and we treat every animal as if they were our own.
        By combining modern veterinary practices with a warm, welcoming environment, we ensure
        every visit is calm, comfortable, and reassuring.
      </p>

    
      <div className="flex justify-center mt-10">
        <Link href="/contact">
          <button className="px-10 py-3 text-sm font-semibold bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 transition">
            Book an Appointment
          </button>
        </Link>
      </div>

    </section>
  )
}

export default SetsApart
