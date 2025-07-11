import React from 'react'
import Hero from '../components/Hero'
import Specilist from '../components/Specilist'
import Gettouch from '../components/Gettouch'
import Services from '../components/Services'
import ServicesSection from '../components/ServicesSection'
import HeroSection from '../components/Video'
import TestimonialCarousel from '../components/testimonials'
import Footer from '../components/Footer'
import ImageCrosel from '../components/ImageCrosel'
import ServicesHero from '../components/ServicesHero'
import Navbar from '../components/Navbar'
import ImageGallery from '../components/ImageGallery'
import DirectorMessage from '../components/DirectorMessage '
import MissionVision from '../components/MissionVision '
import Ceo from '../components/Ceo'
import TestimonialSlider from '../components/TestimonialSlider'
 const Home = () => {
  return (
    <div>
          
          <Navbar/>
        <ServicesHero/>
        <DirectorMessage/>
        <Ceo/>
        <TestimonialSlider/>
        <MissionVision/>
       <Services/>
        <Specilist/>
        <Gettouch/>
        <ServicesSection/>
        <ImageGallery/>
         <Hero/>
        {/* <HeroSection/> */}
        {/* <TestimonialCarousel/> */}
        <Footer/>
    </div>
  )
}

export default Home
