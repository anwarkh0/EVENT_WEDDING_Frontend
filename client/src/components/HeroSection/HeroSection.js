import Style from './HeroSection.module.css'
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';

function HeroSection({ image, title,alt }) {

  return (
    <main className={Style.main}>
      <img src={image} alt={alt} className={Style.image} />
        <h1 className={Style.h1}  >{title}</h1>
      <div className={Style.empty}>
      </div>
    </main>
  )
}

export default HeroSection