import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Layout from '../Layout/Layout';
import Service from '../pages/Services/Service';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Home from '../pages/Home/Home';

const AppRoutes = () => {
    return (

        <Routes>
            <Route path='/' element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="service" element={<Service/>} />
                <Route path="contact" element={<Contact />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;