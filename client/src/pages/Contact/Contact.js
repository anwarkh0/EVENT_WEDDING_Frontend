import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import eventImage from '../../assets/wedding/couver.jpg'
import DescrituonForPage from '../../components/decriptionForPage/DescrituonForPage'
import ContactForm from '../../components/contactUs/ContactUs'
import ContactInfo from '../../components/ContactInfo/ContactInfo'
import Style from './Contact.module.css'
function Contact() {
  return (
    <>
      <HeroSection
        image={eventImage}
        title="CONTACT US"
      />
      <DescrituonForPage

        title="Ready to turn your vision into reality? "
        paragrapg1=" Contact us today to discuss your event
         needs and let us create an unforgettable experience
          together."
        paragrapg2="Welcome to Oakwood Events & Catering, where every event is a masterpiece."
        image=""
      />
      <div className={Style.div}>

        <ContactInfo />
      
      </div>
      <ContactForm />
    </>
  )
}

export default Contact