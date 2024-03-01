import { motion } from 'framer-motion';
import Style from './ContactInfo.module.css'
function ContactInfo() {
  return (
    <section className={Style.section}
    >
      <h1>LOCATION</h1>
      <div className={Style.container}>
        <div className={Style.div}>
          <span className={Style.span1}>
            Address
          </span>
          <span className={Style.span2}>
            Any where, any city, 445533
          </span>
        </div>
        <div className={Style.div}>
          <span className={Style.span1}>
            Call Us
          </span>
          <span className={Style.span2}>
            Call Us: +961********
          </span>
        </div>
        <div className={Style.div}>
          <span className={Style.span1}>
            Mail Us
          </span>
          <span className={Style.span2}>
            info@gmail.com
          </span>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo