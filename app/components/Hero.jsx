'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Link from 'next/link'

const slides = [
  {
    image: '/hero1.jpeg',
    title: 'Compassionate Veterinary Care for Every Stage of Life',
    description: 'At DianiVet, our dedicated team provides comprehensive health services for your pets — from wellness checkups to advanced treatments, ensuring they live happy, healthy lives.',
  },
  {
    image: '/hero4.jpeg',
    title: 'Trusted and Experienced Professionals You Can Rely On',
    description: 'Our veterinarians combine years of expertise with genuine love for animals. We tailor every treatment plan to your pet’s unique needs, ensuring personalized and effective care.',
  },
  {
    image: '/hero3.jpeg',
    title: 'Healthy Pets, Happy Families — That’s Our Promise',
    description: 'From preventive care to emergency support, we are committed to your pet’s well-being. Join our community of caring pet owners who trust us with their beloved companions.',
  },
]

const Hero = () => {
  return (
    <section className="relative h-screen w-full">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative h-screen w-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={idx === 0}
              />

              <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-6 sm:px-12 lg:px-24 text-white space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  {slide.title}
                </h1>
                <p className="text-md sm:text-lg lg:text-xl max-w-3xl leading-relaxed">
                  {slide.description}
                </p>

                
                <Link href="/services">
                  <button className="mt-3 bg-green-400 hover:bg-gray-500 text-white font-semibold px-8 py-3 rounded-lg text-lg">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Hero
