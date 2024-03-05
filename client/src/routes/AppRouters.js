import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Layout from '../Layout/Layout';
import Service from '../pages/Services/Service';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Home from '../pages/Home/Home';
import PlanYourEvent from '../pages/PlanYourEvent/PlanYourEvent';
import OurPackagesPage from '../pages/OurPackagesPage/OurPackagesPage';

const AppRoutes = () => {
    return (

        <Routes>
            <Route path='/' element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="about-us" element={<About />} />
                <Route path="packages" element={<Service/>} />
                <Route path="package/:id" element={<OurPackagesPage />} />
                <Route path="contact-us" element={<Contact />} />
                <Route path="plan-your-event" element={<PlanYourEvent />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;