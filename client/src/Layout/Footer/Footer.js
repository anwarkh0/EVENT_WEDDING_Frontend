import { motion } from 'framer-motion';
import Style from './Footer.module.css'
import Instagram from '../../assets/svgComponent/Instagram'
import Facebook from '../../assets/svgComponent/Facebook'
import logo from '../../assets/image/Logos_for_t04-06.svg'
import plant from '../../assets/image/Plant_for_Anwar-19.png'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer>
      <div className={Style.div1}>
        <div className={Style.logo}>
          <h2><Link to='/'><img src={logo} alt='' /></Link></h2>
        </div>
        <p className={Style.p}>
          Let's Create Memories Together! Contact
          Oakwood Events & Catering for Exceptional
          Culinary Experiences and Unforgettable Celebrations.

        </p>
        <div className={Style.icon}>
          {/* <Instagram />
          <Facebook /> */}
        </div>
      </div>
      <ul className={Style.ul}>
        <h2 className={Style.h2}> QUICK LINK</h2>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about-us'>About Us</Link></li>
        <li><Link to='/packages'>Packages</Link></li>
        <li><Link to='/contact-us'>Contact Us</Link></li>
      </ul>
      <div className={Style.contactUS}>
        <h2 className={Style.h2}>CONTACT US</h2>
        <span>Tripoli Al-Mina</span>
        <span>Call Us: +961********</span>
        <span>info@gmail.com</span>
      </div>
      <img src={plant} alt='' className={Style.img} />
    </footer>
  )
}

export default Footer