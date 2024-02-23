import React from 'react'
import Style from './OurPackages.module.css'
import { motion } from 'framer-motion';

import image from '../../assets/wedding/pexels-pixabay-265722.jpg'
function OurPackages() {
    return (
        <section className={Style.section}>

            <h1
                initial={{ y: '100', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

            >OUR BSET PACKAGES FOR WEDDING</h1>
            <article className={Style.article}
                initial={{ y: '100', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

            >
                <img src={image} className={Style.img}
                    initial={{ y: '100', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

                />
                <aside className={Style.aside}
                    initial={{ y: '100', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

                >
                    <p className={Style.p}
                        initial={{ y: '100', opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        , sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum.
                    </p>
                    <h3 className={Style.h3}
                        initial={{ y: '100', opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

                    >Package Includes</h3>
                    <ol className={Style.ol}
                        initial={{ y: '100', opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

                    >
                        <li
                            initial={{ y: '100', opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

                        >PWE Weddings & Events Workbook</li>
                        <li
                            initial={{ y: '100', opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

                        >Unlimited access to expert wedding advice (via e-mail)</li>
                        <li
                            initial={{ y: '100', opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

                        >Access to Preferred Vendors List</li>
                        <li
                            initial={{ y: '100', opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

                        >Wedding Assistant for wedding day</li>
                        <li
                            initial={{ y: '100', opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

                        >Oversee and help with ceremony/reception site set up & tear down</li>
                        <li
                            initial={{ y: '100', opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

                        >Review of Vendor contracts</li>
                        <li
                            initial={{ y: '100', opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

                        >Distribute final payments and gratuities to vendors as necessary</li>
                    </ol>
                    <button type="submit" className={Style.button}
                        initial={{ y: '100', opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

                    >Book Now</button>
                </aside>

            </article>

            <article className={Style.isRiverce}>
                <img src={image} className={Style.img} />
                <aside className={Style.aside}>
                    <p className={Style.p}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        , sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum.
                    </p>
                    <h3 className={Style.h3}>Package Includes</h3>
                    <ol className={Style.ol}>
                        <li>PWE Weddings & Events Workbook</li>
                        <li>Unlimited access to expert wedding advice (via e-mail)</li>
                        <li>Access to Preferred Vendors List</li>
                        <li>Wedding Assistant for wedding day</li>
                        <li>Oversee and help with ceremony/reception site set up & tear down</li>
                        <li>Review of Vendor contracts</li>
                        <li>Distribute final payments and gratuities to vendors as necessary</li>
                    </ol>
                    <button type="submit" className={Style.button} >Book Now</button>

                </aside>

            </article>
        </section>
    )
}

export default OurPackages