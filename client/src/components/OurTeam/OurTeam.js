import { motion } from 'framer-motion';


import Style from './OurTeam.module.css'
import eventImage from '../../assets/wedding/homepage.jpg'


function OurTeam() {
    return (
        <section className={Style.section}>
            <div className={Style.titleLink} >
                <h1 className={Style.h1}>OUR TEAM</h1>
            </div>
            <div className={Style.threeEvent} >
                <div className={Style.rachwan}
                    style={{ backgroundImage: `url(${eventImage})` }}>
                    <div className={Style.infoEvent}>
                        <h1 className={Style.nameEvent}>team member</h1>
                    </div>
                </div>
                <div className={Style.rachwan}
                    style={{ backgroundImage: `url(${eventImage})` }}>
                    <div className={Style.infoEvent}>
                        <h1 className={Style.nameEvent}>team member</h1>
                    </div>
                </div> <div className={Style.rachwan}
                    style={{ backgroundImage: `url(${eventImage})` }}>
                    <div className={Style.infoEvent}>
                        <h1 className={Style.nameEvent}>team member</h1>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default OurTeam