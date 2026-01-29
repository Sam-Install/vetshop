import React from 'react'
import Image from 'next/image'

const Hero4 = () => {
  return (
    <section className="relative w-full my-24 h-[420px] sm:h-[520px] md:h-[620px]">

      
      <Image
        src="/dogy.jpeg"
        alt="Contact DianiVet veterinary clinic in Diani Beach"
        fill
        className="object-cover"
        priority
      />

      
      <div className="absolute inset-0 bg-black/60" />

  
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Contact <span className="text-green-400">DianiVet</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
          We’re here to listen, support, and care for your pets.
          Reach out to us with any questions, appointments, or veterinary needs —
          our team is ready to help.
        </p>
      </div>
    </section>
  )
}

export default Hero4
