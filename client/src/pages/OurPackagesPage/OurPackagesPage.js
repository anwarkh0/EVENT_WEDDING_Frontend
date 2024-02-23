import React from 'react'
import OurPackages from '../../components/OurPackages/OurPackages'
import eventImage from '../../assets/wedding/homepage.jpg'
import HeroSection from '../../components/HeroSection/HeroSection'

function OurPackagesPage() {
  return (
<>
<HeroSection
        image={eventImage}
        title="OUR CATERING SERVICES"
      />
<OurPackages/>
</>
    )
}

export default OurPackagesPage