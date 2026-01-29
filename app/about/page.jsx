'use client'

import React from 'react'
import Hero2 from '../components/Hero2'
import Vet from '../components/Vet'
import Navbar from '../components/Navbar'
import Gallery from '../components/Gallery'
import SetsApart from '../components/SetsApart'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Hero2/>
        <Vet/>
        <Gallery/>
        <SetsApart/>
        <Footer/>

    </div>
  )
}

export default page