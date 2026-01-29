'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const images = [
  '/hero1.jpeg',
  '/hero2.jpeg',
  '/hero3.jpeg',
  '/hero4.jpeg',
]

const Gallery = () => {
  return (
    <section className="my-16 sm:my-24 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      
  
      <h1 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-800 mb-10">
        Our <span className="text-green-600">Gallery</span>
      </h1>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={24}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-xl group">
              
              <Image
                src={src}
                alt={`Veterinary clinic gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={index === 0}
              />

              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Gallery
