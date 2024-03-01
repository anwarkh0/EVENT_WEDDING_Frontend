import React from "react";
import Style from "./OurPackages.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
function OurPackages() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    bookingDate: "",
    budget: "",
    packageName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
  console.log("das", data);
  return (
    <section className={Style.section}>
      <h1>Our Most Popular {data&&data.name} Packages</h1>
      {data&&data.packageId &&
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
                <p className={Style.form_Title}>
                  Book Package
                </p>
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
                  disabled
                />
              </div>
              <div className={Style.bookingDate}>
                <button
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  type="submit"
                  className={Style.button}
                >
                  Sent
                </button>
              </div>
            </form>
          </motion.div>
        )
      }
      <h1></h1>
    </section >
  );
}

export default OurPackages;
