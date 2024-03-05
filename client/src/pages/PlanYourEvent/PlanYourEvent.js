import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import DescrituonForPage from '../../components/decriptionForPage/DescrituonForPage'
import eventImage from '../../assets/wedding/pexels-trung-nguyen-1578873.jpg'
import EventBookingForm from '../../components/PlanYourEvent/EventBookingForm'
function PlanYourEvent() {
  return (
    <>
      <HeroSection
        image={eventImage}
        title=""
      />
      <DescrituonForPage
        title="Tailor-Made Experiences for Every Occasion"
        paragrapg1="At Oakwood Events & Catering, we understand that every celebration is unique. While we offer a range of carefully curated packages designed to suit various tastes and preferences, we also recognize that your vision may require a more personalized touch. That's why we provide the flexibility for you to customize your own event."
        paragrapg2="adjusting menu selections, incorporating specific themes, or adding bespoke elements to your décor, our dedicated team is here to bring your vision to life. With our commitment to excellence and attention to detail, we ensure that your event is exactly as you imagine it. Let us help you create a one-of-a-kind experience that exceeds your expectations and leaves a lasting impression on you and your guests."
        image=""
      />
      <EventBookingForm />
    </>
  )
}

export default PlanYourEvent