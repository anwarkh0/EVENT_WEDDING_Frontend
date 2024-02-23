import { motion } from 'framer-motion';
import Style from './Footer.module.css'
import Instagram from '../../assets/svgComponent/Instagram'
import Facebook from '../../assets/svgComponent/Facebook'
import imgae from '../../assets/wedding/pexels-jonathan-borba-19063543.jpg'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer
    initial={{  opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

    >
      <div className={Style.div1}>
        <h1 className={Style.title}>Event and Wedding</h1>
        <p className={Style.p}>
          Lorem ipsum dolor sit amet,consectetur
          adipiscing elit,sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud
        </p>
        <div className={Style.icon}>
          <Instagram />
          <Facebook />
        </div>
      </div>
      <ul className={Style.ul}>
        <h2> QUICK LINK</h2>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About Us</Link></li>
        <li><Link to='/service'>Packages</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
      </ul>
      <div className={Style.contactUS}>
        <h2 className={Style.h2}>CONTACT US</h2>
        <span>Any where and any city</span>
        <span>Call Us: +961********</span>
        <span>info@gmail.com</span>
      </div>
      <div className={Style.photography}>
        <h2 className={Style.h2}>PHOTOGRAPHY</h2>
        <div className={Style.photo}>

          <img src={imgae} className={Style.image} />
          <img src={imgae} className={Style.image} />
          <img src={imgae} className={Style.image} />
          <img src={imgae} className={Style.image} />
          <img src={imgae} className={Style.image} />
          <img src={imgae} className={Style.image} />
        </div>
      </div>
    </footer>
  )
}

export default Footer