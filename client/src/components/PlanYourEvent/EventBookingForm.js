import React, { useEffect, useState } from 'react';
import Style from './PlanYourEvent.module.css'
import { motion } from 'framer-motion';
import eventImage from '../../assets/wedding/couver.jpg'
import MultiSelectList from '../MultiSelectionLIst/MultiSelectList';
import axios from 'axios';
function EventBookingForm() {
    const [selectedServices, setSelectedServices] = useState([]);
    const [services, setServices] = useState([]);
    const [data, setData] = useState([])
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        services: selectedServices,
        description: ''
    });

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_ENDPOINT}event/`);
                setData(response.data);
                console.log("data", response.data)
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);
    const handleChange = (e) => {
        let i = e.target.value.split(" ")[0]
        setServices(data[i].serviceId)
        console.log("first", data[i].serviceId)
        const { name, value } = e.target;
        console.log("name", name)
        setFormData((prevData) => ({
            ...prevData,
            [name]: value.split(" ")[1]
        }))};
         const handleFormDataChange = (e) => {
            const { name, value } = e.target;
            console.log("name", name)
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }))};

        
       


        const resetForm = () => {
            setFormData({
                name: '',
                email: '',
                phone: '',
                eventType: '',
                services: [],
                description: ''
            })
        }
        console.log("dada", data)
console.log("SELECTED",)
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log("Form submitted:", formData);
        }
        return (
            <section className={Style.section}
                style={{ backgroundImage: `url(${eventImage})` }}>

                <h1 className={Style.h1}>Event Booking Form</h1>
                <form onSubmit={handleSubmit} className={Style.form}>

                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleFormDataChange} required />
                    </div>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleFormDataChange} required />
                    </div>

                    <div>
                        <label htmlFor="phone">Phone:</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleFormDataChange} required />
                    </div>
                    <div>

                        <label htmlFor="eventType">Event Type:</label>
                        <select
                            id="eventType"
                            name="eventType"
                            onChange={handleChange}
                            disabled={!data || data.length === 0}
                            required
                        >
                            <option value="" disabled selected>Please select your event</option>
                            {data &&
                                data.map((event, index) => (
                                    <option
                                        key={event._id}
                                        id={index}
                                        value={index + " " + event.name}
                                        className={Style.eventName}
                                    >
                                        {event.name}
                                    </option>
                                ))}
                        </select>
                    </div>
                    {

                        <MultiSelectList
                            services={services}
                            setSelectedServices={setSelectedServices}
                            selectedServices={selectedServices}
                        />
                    }
                    <div className={Style.fieldDesc}>

                        <label htmlFor="description">Description:</label>
                        <textarea id="description" name="description" value={formData.description} onChange={handleFormDataChange} rows="4" required></textarea>
                    </div>
                    <div className={Style.btn}>

                        <button type="submit" className={Style.button} /* onClick={handleSubmit} */>Send</button>
                    </div>
                </form>
            </section>
        );
    }

    export default EventBookingForm;
