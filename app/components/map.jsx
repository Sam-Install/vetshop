'use client'

import React from 'react'

const Map = () => {
  return (
    <div className="my-10 px-4 sm:px-8">
      <h2 className="text-2xl font-bold text-center text-gray-500 mb-6">
        Our Location – South Coast, Kenya
      </h2>

      <div className="w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="South Coast Kenya Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15956.190416554258!2d39.5957!3d-4.26621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18401b0f646d6c3b%3A0xb86b3d4997bb0c1c!2sSouth%20Coast%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
          width="100%"
          height="100%"
          className="border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default Map
