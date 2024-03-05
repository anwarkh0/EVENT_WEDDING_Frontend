import React, { useState } from 'react';
import Style from './ContactUs.module.css'
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [openNote, setOpenNote] = useState({
        open: false,
        message: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_99wpm17', 'template_iblcpks', e.target, {
                publicKey: 'eZbgPNjsgg-BVG94A',
            })
            .then(
                () => {
                    setOpenNote({
                        open: true,
                        message: 'Email was successfully sent!!'
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setOpenNote({
                        open: true,
                        message: 'Email not sent please try agian'
                    });
                },
            );
    };

    return (
        <section className={Style.section}>
            <h1 className={Style.h1}>CONTACT US</h1>
            <form className={Style.form} onSubmit={(e) => handleSubmit(e)}>
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

                    <button type="submit" className={Style.button} >Submit</button>
                </div>
            </form>
            {openNote.open && (
                <div className={Style.background}>

                    <motion.div className={Style.email}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}>
                        <h1>{openNote.message}{/* Email was successfully sent!! */}</h1>
                        <button className={Style.okButton} onClick={() => setOpenNote({
                            open: false,
                            message: ""
                        })}>
                            OK
                        </button>
                    </motion.div>
                </div>
            )}
        </section>
    );
}

export default ContactForm;
