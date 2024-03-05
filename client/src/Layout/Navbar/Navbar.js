import React, { useEffect } from 'react'
import Facebook from '../../assets/svgComponent/Facebook'
import Instagram from '../../assets/svgComponent/Instagram'
import Style from './Navbar.module.css'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/image/Logos_for_t04-06.svg'
import Sidebar from '../Sidebar/Sidebar'
function Navbar() {
    const activeStyles = {
        borderBottom: "#f5e8e0 2px groove",
        color: "#f5e8e0",
    }

    return (
        <nav id='navbar' className={Style.nav}>
            <div className={Style.logo}>
                <h2><Link to='/'><img src={logo} alt='' /></Link></h2>
            </div>
            <ul className={Style.ul}>
                <li>
                    <NavLink
                        to='/'
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Home
                    </NavLink>
                </li>
                <li>

                    <NavLink
                        to='/about-us'
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        About Us
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/plan-your-event'
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Plan Your Event
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/contact-us'
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Contact Us
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/packages'
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Packages
                    </NavLink>
                </li>
            </ul>
                    <Sidebar />
            <ul className={Style.socialMedia}>
                <li>
                    {/* <Facebook /> */}
                    {/* Facebook */}
                </li>
                <li>
                    {/* <Instagram /> */}
                    {/* Instagram */}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar