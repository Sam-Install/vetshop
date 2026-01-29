'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const images = [
  "/hero1.jpeg",
  "/hero2.jpeg",
  "/hero3.jpeg",
  "/hero4.jpeg",
  
]

const Gallery = () => {
  return (
    <section className='my-20 px-4 sm:px-8'>
      <h1 className='text-center text-2xl text-green-400 font-bold mb-8'>
        Our Gallery
      </h1>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={20}
        loop
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}
        navigation
        className="w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Gallery
