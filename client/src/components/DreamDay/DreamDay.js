import image from '../../assets/wedding/pexels-agung-pandit-wiguna-2788488.jpg'
import Style from './DreamDay.module.css'
import { motion } from 'framer-motion';

function DreamDay() {
    return (
        <section className={Style.section}>
            <h1
                initial={{ y: '100', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

            >WHY CHOOSE DREAMDAY</h1>
            <div className={Style.articles}
                initial={{ y: '100', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

            >

                <article className={Style.article}
                    initial={{ y: '100', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

                >
                    <div className={Style.div}
                        style={{ backgroundImage: `url(${image})` }}
                        initial={{ y: '100', opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

                    >
                    </div>
                    <h2 className={Style.h2}
                        initial={{ y: '100', opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

                    >delicious food</h2>
                    <p className={Style.p}
                        initial={{ y: '100', opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                    </p>
                </article>
                <article className={Style.article}
                    initial={{ y: '100', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

                >
                    <div className={Style.div}
                        style={{ backgroundImage: `url(${image})` }}

                        initial={{ y: '100', opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

                    >
                    </div>
                    <h2 className={Style.h2}
                        initial={{ y: '100', opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

                    >delicious food</h2>
                    <p className={Style.p}
                        initial={{ y: '100', opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                    </p>
                </article>
                <article className={Style.article}
                    initial={{ y: '100', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

                >
                    <div className={Style.div}
                        style={{ backgroundImage: `url(${image})` }}
                        initial={{ y: '100', opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

                    >
                    </div>
                    <h2 className={Style.h2}
                        initial={{ y: '100', opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

                    >delicious food</h2>
                    <p className={Style.p}
                        initial={{ y: '100', opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}

                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                    </p>
                </article>
            </div>
        </section>
    )
}

export default DreamDay