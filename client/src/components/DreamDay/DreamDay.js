import image from '../../assets/wedding/pexels-agung-pandit-wiguna-2788488.jpg'
import Style from './DreamDay.module.css'
import { motion } from 'framer-motion';

function DreamDay() {
    return (
        <section className={Style.section}>
            <h1>WHY CHOOSE DREAMDAY</h1>
            <div className={Style.articles}>

                <article className={Style.article}>
                    <div className={Style.div}
                        style={{ backgroundImage: `url(${image})` }}>
                    </div>
                    <h2 className={Style.h2}>Experience & Expertise</h2>
                    <p className={Style.p}>
                        With years of experience in the industry,
                        we bring creativity, passion, and professionalism
                        to every event we undertake.
                    </p>
                </article>
                <article className={Style.article}>
                    <div className={Style.div}
                        style={{ backgroundImage: `url(${image})` }}
                    >
                    </div>
                    <h2 className={Style.h2}>Quality & Freshness</h2>
                    <p className={Style.p}>
                        We source only the finest ingredients,
                        ensuring that every dish is crafted with
                        care and attention to detail.

                    </p>
                </article>
                <article className={Style.article}>
                    <div className={Style.div}
                        style={{ backgroundImage: `url(${image})` }}>
                    </div>
                    <h2 className={Style.h2}>Personalized Approach</h2>
                    <p className={Style.p}>
                        Your vision is our priority. We work closely with
                        you to understand your needs and preferences,
                        bringing your dream event to life.

                    </p>
                </article>
            </div>
        </section>
    )
}

export default DreamDay