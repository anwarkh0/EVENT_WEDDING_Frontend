import { motion } from 'framer-motion';
import Style from './Event.module.css'
import { Link } from 'react-router-dom'
function Event({ image, title, nameEvent, btn }) {

    return (
        <section className={Style.section}>
            <div  className={Style.titleLink}>

                <h1 className={Style.h1}
                    initial={{ y: '200', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}
                >{title}</h1>

            </div>

            <div >
                {<div className={Style.threeEvent}
                    initial={{ y: '100', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}
                >
                    <Link to="/event-packages" className={Style.rachwan}
                        style={{ backgroundImage: `url(${image})` }}>
                        <div className={Style.infoEvent}>
                            <h1 className={Style.nameEvent}>{nameEvent}</h1>
                        </div>
                    </Link>
                    <Link to="/event-packages" className={Style.rachwan}
                        style={{ backgroundImage: `url(${image})` }}>
                        <div className={Style.infoEvent}>
                            <h1 className={Style.nameEvent}>{nameEvent}</h1>
                        </div>
                    </Link>
                    <Link to="/event-packages" className={Style.rachwan}
                        style={{ backgroundImage: `url(${image})` }}>
                        <div className={Style.infoEvent}>
                            <h1 className={Style.nameEvent}>{nameEvent}</h1>
                        </div>
                    </Link>
                </div>
                }

                {btn &&
                    <div className={Style.link}
                        initial={{ y: '100', opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}
                    >
                        <Link to="/service">See More</Link>
                    </div>}
            </div>
        </section>
    )





}



export default Event