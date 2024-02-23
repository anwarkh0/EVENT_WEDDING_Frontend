import eventImage from '../../assets/wedding/pexels-agung-pandit-wiguna-2788488.jpg'
import HeroSection from '../../components/HeroSection/HeroSection'
import DescrituonForPage from '../../components/decriptionForPage/DescrituonForPage'
import DreamDay from '../../components/DreamDay/DreamDay'
import OurTeam from '../../components/OurTeam/OurTeam'
import AboutUs from '../../components/AboutUs/AboutUs'
function About() {
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
        image=""
      />

      <DreamDay />
    <AboutUs/>
      <OurTeam/>

    </>
  )
}

export default About