import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import eventImage from '../../assets/wedding/pexels-agung-pandit-wiguna-2788488.jpg'
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

        title="We look forward to hearing from you."
        paragrapg1="Contact us for any enquire or to request a quote, and we’ll
        arrange each of your culinary wishes, recording your specific needs
         with creativity and professionalism."
        paragrapg2=""
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