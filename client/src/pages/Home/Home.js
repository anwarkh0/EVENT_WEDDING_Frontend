import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import DescrituonForPage from '../../components/decriptionForPage/DescrituonForPage'
import Event from '../../components/Event/Event'
import eventImage from '../../assets/wedding/homepage.jpg'
import PlanYourEvent from '../../components/PlanYourEvent/EventBookingForm'
function Home() {
  return (
    <>
      <HeroSection
        image={eventImage}
        title="OUR CATERING SERVICES"
      />
      <DescrituonForPage
        title="No. 1 Catering Company in Dubai"
        paragrapg1="To be a food catering company that provides the best
      catering services in Dubai takes a lot more than just
      the fundamentals.
      Bouffant Catering has worked its way up among the
      leading catering companies steadily and consistently
      through its “Passion to Serve”."
        paragrapg2="    We, today have the finest catering services in Dubai, Shariah,
      Ajman or any other Emirate in the UAE can offer.
      Why? Because our services stretch beyond just food.
      Our food catering company and its services incorporate planning of bespoke menus,
      managing the supplies, facilitating the vendors,
      organizing the waitstaff as well as other substantial workforce,
      and lastly executing an event which is cherished by the hosts as well the guests.
      Our passion for culinary arts makes puts us among the best catering companies in UAE."
      image={eventImage}
      />
      <Event
        image={eventImage}
        title="OUR CATERING SERVICES"
        nameEvent="WEDDING"
        btn="See More"

      />
      <PlanYourEvent />
    </>
  )
}

export default Home