import React from 'react'
import Event from '../../components/Event/Event'
import HeroSection from '../../components/HeroSection/HeroSection'
import DescrituonForPage from '../../components/decriptionForPage/DescrituonForPage'
import heroImage from '../../assets/image/hero.jpeg'

function Service() {
  return (
    <>
      <HeroSection
        image={heroImage}
        title="CATERING SERVICES"
      />
      <DescrituonForPage
        title="No. 1 Catering Company in Dubai"
        paragrapg1="Our Catering Services
        Welcome to [Your Company Name], where we
         take pride in offering a diverse range of 
         catering services to make your events extraordinary.
          Our dedicated team is committed to providing impeccable service,
           delicious cuisine, and seamless execution to ensure your special
            occasions are memorable."

        paragrapg2=""
        image=""
      />
      <Event 
      
      image={heroImage}
      title="OUR CATERING SERVICES"
      nameEvent="WEDDING"/>

    </>
  )
}

export default Service