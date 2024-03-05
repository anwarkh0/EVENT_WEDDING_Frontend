import Style from './AboutUs.module.css'
import React from 'react'
import { motion } from 'framer-motion';

function AboutUs() {
  return (
    <section className={Style.section}>
      <h1 className={Style.h1}>ABOUT US</h1>
      <p className={Style.p}>
      Oakwood Events & Catering isn't just about food; it's about crafting experiences that resonate. With our meticulous attention to detail and unwavering dedication to excellence, we ensure that every event surpasses expectations.

      </p>
    </section>
  )
}

export default AboutUs
