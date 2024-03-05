import React from "react";
import Style from "./OurPackages.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

function OurPackages() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    bookingDate: "",
    budget: "",
    packageName: "",
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
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_ENDPOINT}event/get-one-event/${id}`
        );

        setData(response.data.event);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching package data:", error);
      }
    };

    fetchData();
  }, [id]);
  return (
    <section className={Style.section}>
      <h1>Our Most Popular {data && data.name} Packages</h1>
      {data && data.packageId &&
        data.packageId.map((item) => (
          <article className={Style.article} key={item._id}>
            <img
              src={`${process.env.REACT_APP_ENDPOINT}${item.image}`}
              className={Style.img}
            />
            <aside className={Style.aside}>
              <p className={Style.p}>{item.description}</p>
              <h3 className={Style.h3}>Package Includes</h3>
              <ol className={Style.ol}>
                {item.servicesId.map((items, key) => {
                  return (
                    <li key={key}>{items.name}</li>
                  )
                }
                )}
              </ol>
              <button
                type="submit"
                className={Style.button}
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                Book Now
              </button>
            </aside>
          </article >
        ))
      }

      {
        isOpen && (
          <motion.div
            className={Style.background}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <form className={Style.form} onSubmit={handleSubmit}>
              <span
                className={Style.span}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <h1 className={Style.form_Title}>
                  Book Package
                </h1>
                <button className={Style.xbtn} onClick={() => setIsOpen(false)}>
                  X
                </button>
              </span>
              <div>
                <label htmlFor="fullName">Full Name:</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="bookingDate">Booking Date:</label>
                <input
                  type="date"
                  id="bookingDate"
                  name="bookingDate"
                  value={formData.bookingDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="budget">Budget:</label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="packageName">Package:</label>
                <input
                  type="text"
                  id="package"
                  name="packageName"
                  value={formData.packageName}
                  onChange={handleChange}
                  required
                  // disabled
                />
              </div>
              <div className={Style.bookingDate}>
                <button
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  type="submit"
                  className={Style.SendButton}
                >
                  Sent
                </button>
              </div>
            </form>
          </motion.div>
        )
      }
      {openNote.open && (
        <div className={Style.backgrounds}>

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
    </section >
  );
}

export default OurPackages;
