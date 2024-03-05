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
        title="About us..."
      />
      <DescrituonForPage
        title="Masterful Moments: Crafting Unforgettable"
        paragrapg1="We believe you should have complete control of your event.  Your wedding planning process should be authentic to you, enjoyable, memorable, and as special as your actual wedding day"
        paragrapg2=""
        image=""
      />

      <DreamDay />
    <AboutUs/>
      <OurTeam/>

    </>
  )
}

export default About