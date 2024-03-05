import React from 'react'
import Styles from "../Sidebar.module.css"
import {motion} from "framer-motion"

const Button = ( {setOpen} ) => {
  return (
    <div>
      <button onClick={()=>setOpen(prev=>!prev)} className={Styles.btn}>
      <svg width="23" height="23" viewBox='0 0 23 23 '>
        <motion.path strokeWidth="3" stroke='#f5e8e0' strokeLinecap='round'
        variants={{
            closed:{d: "M 2 2.5 L 20 2.5"},
            open:{ d: "M 3 16.5 L 17 2.5"}
        }}
         />
        <motion.path strokeWidth="3" stroke='#f5e8e0' strokeLinecap='round' d="M 2 9.423 L 20 9.423"
        variants={{
            closed:{opacity:1},
            open:{opacity:0}
        }}
        />
        <motion.path strokeWidth="3" stroke='#f5e8e0' strokeLinecap='round'
         variants={{
            closed:{d: "M 2 16.436 L 20 16.346"},
            open:{ d: "M 3 2.5 L 17 16.346"}
        }}
        />


      </svg>
      </button>
    </div>
  )
}

export default Button