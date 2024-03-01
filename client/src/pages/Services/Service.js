import Event from '../../components/Event/Event'
import HeroSection from '../../components/HeroSection/HeroSection'
import DescrituonForPage from '../../components/decriptionForPage/DescrituonForPage'
import heroImage from '../../assets/image/hero.jpeg'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Style from './Service.module.css'
function Service() {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_ENDPOINT}event`);
        setData(response.data);
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
        image={heroImage}
        title="Our Catering Services"
      />
      <DescrituonForPage
        title="No. 1 Catering Company in the North"
        paragrapg1="Welcome to Oakwood Events & Catering, 
        your premier choice for exceptional catering services
         in the North. We take pride in offering a diverse range 
         of culinary experiences to elevate your events. Our dedicated 
         team is committed to providing impeccable service, delicious cuisine,
          and seamless execution to ensure your special occasions are memorable."

        paragrapg2=""
        image=""
      />
      <section className={Style.section}>
        <h1 className={Style.h1}>title</h1>
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

      </section>

    </>
  )
}

export default Service