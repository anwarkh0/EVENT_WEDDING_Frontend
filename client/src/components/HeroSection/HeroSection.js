import Style from './HeroSection.module.css'
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';

function HeroSection({ image, title }) {

  const typedRef = useRef(null);


  useEffect(() => {
    const options = {
      strings: [title + "..."],
      typeSpeed: 60,
      backSpeed: 50,
      loop: true
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  },);




  return (
    <main className={Style.main}
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

    >
      <img src={image} alt='heroImage' className={Style.image} />
        <h1 className={Style.h1} ref={typedRef} />
      <div className={Style.empty}>
      </div>
    </main>
  )
}

export default HeroSection