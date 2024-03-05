import image1 from '../../assets/image/200.png'
import image2 from '../../assets/image/images.png'
import image3 from '../../assets/image/995646-200.png'
import Style from './DreamDay.module.css'
import { motion } from 'framer-motion';

function DreamDay() {
    return (
        <section className={Style.section}>
            <h1>Why Choose Oakwood Events & Catering</h1>
            <div className={Style.articles}>

                <article className={Style.article}>
                    <div className={Style.div}
                        style={{ backgroundImage: `url(${image1})` }}>
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
                        style={{ backgroundImage: `url(${image2})` }}
                    >
                    </div>
                    <h2 className={Style.h2}>Quality & Freshness</h2>
                    <p className={Style.p}>
                    At our establishment, we meticulously source only the finest ingredients, ensuring quality and freshness in every dish crafted with care and attention to detail.                    </p>
                </article>
                <article className={Style.article}>
                    <div className={Style.div}
                        style={{ backgroundImage: `url(${image3})` }}>
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