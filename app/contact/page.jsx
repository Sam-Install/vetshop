'use client'

import React from 'react'
import Hero4 from '../components/Hero4'
import Navbar from '../components/Navbar'
import ContactForm from '../components/contactform'
import Map from '../components/map'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
<Navbar/>
<Hero4/>
<ContactForm/>
<Map/>
<Footer/>

    </div>
  )
}

export default page