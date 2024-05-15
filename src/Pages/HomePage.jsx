/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../Componntents/Navbar'
import Bannner from '../Componntents/Bannner'
import Section from '../Componntents/Section'
import HowItworksSection from '../Componntents/How-It-works-Section'
import Footer from '../Componntents/Footer'


const HomePage = () => {
  return (
    <div>
     <Navbar/>
    <Bannner/>
    <Section/> 
    <HowItworksSection/> 
    <Footer/>
    </div>
  )
}

export default HomePage
