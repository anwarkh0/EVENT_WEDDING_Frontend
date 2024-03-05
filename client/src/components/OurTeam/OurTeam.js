import { motion } from 'framer-motion';
import team1 from '../../assets/image/images.jpeg'
import team2 from '../../assets/image/images (1).jpeg'
import team3 from '../../assets/image/images (2).jpeg'

import Style from './OurTeam.module.css'


function OurTeam() {
    return (
        <section className={Style.section}>
            <div className={Style.titleLink} >
                <h1 className={Style.h1}>OUR TEAM</h1>
            </div>
            <div className={Style.threeEvent} >
                <div className={Style.rachwan}
                    style={{ backgroundImage: `url(${team1})` }}>
                    <div className={Style.infoEvent}>
                        <h1 className={Style.nameEvent}>Event Manager</h1>
                    </div>
                </div>
                <div className={Style.rachwan}
                    style={{ backgroundImage: `url(${team2})` }}>
                    <div className={Style.infoEvent}>
                        <h1 className={Style.nameEvent}>Event Marketing</h1>
                    </div>
                </div> <div className={Style.rachwan}
                    style={{ backgroundImage: `url(${team3})` }}>
                    <div className={Style.infoEvent}>
                        <h1 className={Style.nameEvent}>Event Designer</h1>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default OurTeam