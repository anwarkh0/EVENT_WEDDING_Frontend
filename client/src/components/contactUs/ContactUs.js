import React, { useState } from 'react';
import Style from './ContactUs.module.css'
import { motion } from 'framer-motion';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <section className={Style.section}>
            <h1 className={Style.h1}>CONTACT US</h1>
            <form className={Style.form} onSubmit={handleSubmit}>
                <div className={Style.formgroup}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className={Style.formgroup}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className={Style.fieldDesc}>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" required></textarea>
                </div>
                <div className={Style.btn}>

                    <button type="submit" className={Style.button}>Submit</button>
                </div>
            </form>
        </section>
    );
}

export default ContactForm;
