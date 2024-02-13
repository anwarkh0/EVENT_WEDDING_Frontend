import React from 'react'
import Facebook from '../../assets/svgComponent/Facebook'
import Instagram from '../../assets/svgComponent/Instagram'
import Style from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
function Navbar() {
    const activeStyles = {
        borderBottom: "#fff7ea 2px groove",
        color: "#fff7ea",
    }
    return (
        <nav className={Style.nav}>
            <div className={Style.logo}>
                <h2>Events and Weddings</h2>
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
                        to='/service'
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/contact'
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Contact Us
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/about'
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        About Us
                    </NavLink>
                </li>
            </ul>
            <ul className={Style.socialMedia}>
                <li>
                    <Facebook />
                    Facebook
                </li>
                <li>
                    <Instagram />
                    Instagram
                </li>
            </ul>
        </nav>
    )
}

export default Navbar