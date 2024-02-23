import React, { useState } from 'react';
import Style from './PlanYourEvent.module.css'
import { motion } from 'framer-motion';
import eventImage from '../../assets/wedding/couver.jpg'
import MultiSelectList from '../MultiSelectionLIst/MultiSelectList';
function EventBookingForm() {
    const [selectedServices, setSelectedServices] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        services: selectedServices,
        description: ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };


    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            eventType: '',
            services: '',
            description: ''
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    }
    return (
        <section className={Style.section}
            style={{ backgroundImage: `url(${eventImage})` }}
            initial={{ y: '100', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

        >

            <h1 className={Style.h1}
                initial={{ y: '100', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

            >
                Event Booking Form
            </h1>
            <form onSubmit={handleSubmit} className={Style.form}
                initial={{ y: '100', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

            >

                <div
                    initial={{ y: '100', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

                >
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div
                    initial={{ y: '100', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

                >
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div
                    initial={{ y: '100', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

                >
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div
                    initial={{ y: '100', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

                >

                    <label htmlFor="eventType">Event Type:</label>
                    <select id="eventType" name="eventType" value={formData.eventType} onChange={handleChange} required
                    >
                        <option value="" disabled="disabled" selected="selected">Please select your event</option>
                        <option value="wedding">Wedding</option>
                        <option value="birthday">Birthday</option>
                        <option value="corporate">Corporate Event</option>
                    </select>
                </div>



                <MultiSelectList
                    setSelectedServices={setSelectedServices}
                    selectedServices={selectedServices}
                />
                <div className={Style.fieldDesc}
                    initial={{ y: '100', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

                >

                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="4" required></textarea>
                </div>
                <div className={Style.btn}
                    initial={{ y: '100', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

                >

                    <button type="submit" className={Style.button} onClick={resetForm}>Send</button>
                </div>
            </form>
        </section>
    );
}

export default EventBookingForm;
