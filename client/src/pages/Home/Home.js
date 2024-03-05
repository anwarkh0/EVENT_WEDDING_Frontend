import React, { useEffect, useState } from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import DescrituonForPage from '../../components/decriptionForPage/DescrituonForPage'
import Event from '../../components/Event/Event'
import axios from 'axios';
import eventImage from '../../assets/wedding/homepage.jpg'
import PlanYourEvent from '../../components/PlanYourEvent/EventBookingForm'
import { Link } from 'react-router-dom';
import Style from './/Home.module.css'
import image3 from '../../assets/hero/3.jpeg'
import image4 from '../../assets/hero/4.jpeg'
import image5 from '../../assets/hero/5.jpeg'
import image6 from '../../assets/hero/6.jpeg'
import image7 from '../../assets/hero/7.jpeg'
import image8 from '../../assets/hero/8.jpeg'
function Home() {

  const [images, setImages] = useState([
    image8,image7,image3,image4,image5,image6
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_ENDPOINT}event`);
        setData(response.data.slice(0, 3));
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <HeroSection
        image={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        title="Designing memorable events from start to finish"
      />
      <DescrituonForPage
        title="Welcome to Oakwood Events & Catering"
        paragrapg1="At Oakwood, we believe in transforming
         your vision into unforgettable experiences.
         As a premier events and catering company,
          we blend the rustic charm of oak with the sophistication of curated events,
         creating moments that linger long after the last bite."
      //   paragrapg2="    We, today have the finest catering services in Dubai, Shariah,
      // Ajman or any other Emirate in the UAE can offer.
      // Why? Because our services stretch beyond just food.
      // Our food catering company and its services incorporate planning of bespoke menus,
      // managing the supplies, facilitating the vendors,
      // organizing the waitstaff as well as other substantial workforce,
      // and lastly executing an event which is cherished by the hosts as well the guests.
      // Our passion for culinary arts makes puts us among the best catering companies in UAE."
        image={eventImage}
      />
      <section className={Style.section}>
        <h1 className={Style.h1}>Explor event</h1>
        <div className={Style.div}>
          {data && data.map((item) => (
            <Event
              title="OUR CATERING SERVICES"
              name={item.name}
              image={item.image}
              isLoading={isLoading}
              btn="See More"
              key={item._id}
              id={item._id}
              description={item.description}
            />
          ))
          }
        </div>
        <div className={Style.btn}>

          <Link to="/packages">See More</Link>
        </div>
      </section>
      <PlanYourEvent />
    </>
  )
}

export default Home