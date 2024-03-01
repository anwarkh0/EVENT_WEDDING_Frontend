import Style from './DescrituonForPage.module.css'
import { motion } from 'framer-motion';
function DescrituonForPage({ title, paragrapg1, paragrapg2, image }) {
    return (

        <section className={Style.section}>

            <div>
                <h1 className={Style.h1}>{title}</h1>
                {paragrapg1 && <p className={Style.p}>{paragrapg1}</p>}
                {paragrapg2 && <p className={Style.p}>{paragrapg2}</p>}

            </div>
            <div>
                {image && <img src={image} className={Style.img} />}
            </div>

        </section>
    )
}

export default DescrituonForPage


