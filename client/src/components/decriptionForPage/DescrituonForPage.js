import Style from './DescrituonForPage.module.css'
import { motion} from 'framer-motion';
function DescrituonForPage({ title, paragrapg1, paragrapg2, image }) {
    return (

        <section  className={Style.section}>

            <div
                initial={{ y: '100', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut' }}
            >
                <h1 className={Style.h1}>{title}</h1>
                {paragrapg1 && <p className={Style.p}>{paragrapg1}</p>}
                {paragrapg2 && <p className={Style.p}>{paragrapg2}</p>}

            </div>
            <div
                initial={{ y: '100', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    type: 'tween', stiffness: 120, duration: 1, ease: 'easeInOut'
                }}
            >
                {image && <img src={image} className={Style.img} />}
            </div>

        </section>
    )
}

export default DescrituonForPage


