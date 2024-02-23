import { motion } from 'framer-motion';


import Style from './OurTeam.module.css'
import eventImage from '../../assets/wedding/homepage.jpg'


function OurTeam() {
    return (
        <section className={Style.section}>
            <div className={Style.titleLink}
                initial={{ y: '100', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

            >
                <h1 className={Style.h1}
                    initial={{ y: '100', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

                >OUR TEAM</h1>
            </div>
            <div className={Style.threeEvent}
                initial={{ y: '100', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

            >
                <div className={Style.rachwan}
                    style={{ backgroundImage: `url(${eventImage})` }}
                    initial={{ y: '100', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

                >
                    <div className={Style.infoEvent}>
                        <h1 className={Style.nameEvent}
                    

                        >
                            team member
                        </h1>
                    </div>
                </div>
                <div className={Style.rachwan}
                    style={{ backgroundImage: `url(${eventImage})` }}>
                    <div className={Style.infoEvent}
                        initial={{ y: '100', opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

                    >
                        <h1 className={Style.nameEvent}
                        

                        >team member</h1>
                    </div>
                </div> <div className={Style.rachwan}
                    style={{ backgroundImage: `url(${eventImage})` }}
                    initial={{ y: '100', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

                >
                    <div className={Style.infoEvent}>
                        <h1 className={Style.nameEvent}
                      

                        >team member</h1>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default OurTeam