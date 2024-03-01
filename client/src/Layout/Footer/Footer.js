import { motion } from 'framer-motion';
import Style from './Footer.module.css'
import Instagram from '../../assets/svgComponent/Instagram'
import Facebook from '../../assets/svgComponent/Facebook'
import logo from '../../assets/image/Logos_for_t04-06.svg'
import imgae from '../../assets/wedding/pexels-jonathan-borba-19063543.jpg'
import { Link } from 'react-router-dom'
function Footer() {
  return (
  <footer
  >
    <div className={Style.div1}>
    <div className={Style.logo}>
                <h2><Link to='/'><img src={logo} alt=''/></Link></h2>
            </div>
      <p className={Style.p}>
        Let's Create Memories Together! Contact
        Oskwood Events & Catering for Exceptional
        Culinary Experiences and Unforgettable Celebrations.

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
    {/* <div className={Style.photography}>
      <h2 className={Style.h2}>PHOTOGRAPHY</h2>
      <div className={Style.photo}>

        <img src={imgae} className={Style.image} />
        <img src={imgae} className={Style.image} />
        <img src={imgae} className={Style.image} />
        <img src={imgae} className={Style.image} />
        <img src={imgae} className={Style.image} />
        <img src={imgae} className={Style.image} />
      </div>
    </div> */}
  </footer>
  )
}

export default Footer