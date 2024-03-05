import React, { useContext } from 'react'
import Styles from "../Sidebar.module.css"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
// import { UserContext } from '../../../UserContext/UserContext'

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
}
const itemVariants = {
    open: {
        y: 0,
        opacity: 1
    },
    closed: {
        y: 50,
        opacity: 0
    }
}

const Links = ({ handleClose }) => {
    // const {user } =useContext(UserContext)
    const pages = [
        "Home",
        "Packages",
        "Plan-Your-Event",
        "Contact-Us",
        "About-Us"
    ]
    // if(user){
    //     pages.push("MyProfile")
    // }

    return (
        <motion.div className={Styles.linkss} variants={variants}>
            {pages.map(page => (
                <motion.div variants={itemVariants} key={page}>
                    {page === "Home" ? (
                        <Link to="/" style={{ fontSize: "30px", color: "#f5e8e0", fontWeight: "400" }} onClick={() => handleClose()}>
                            {page}
                        </Link>
                    ) : (
                        <Link to={`/${page.toLowerCase()}`} style={{ fontSize: "30px", color: "#f5e8e0", fontWeight: "400",textDecoration:"none" }} onClick={() => handleClose()}>
                            {page}
                        </Link>
                    )}
                </motion.div>
            ))}
        </motion.div>
    )
}

export default Links