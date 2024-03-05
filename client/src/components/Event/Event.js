import Style from './Event.module.css'
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader';
function Event({ description, image, name, isLoading, id }) {
    if (isLoading) {
        return <Loader/>;
    }
    return (
        <section className={Style.section}>
            <div>
                <div className={Style.threeEvent} >
                    <Link to={`/package/${id}`} className={Style.rachwan}
                        style={{ backgroundImage: `url(${process.env.REACT_APP_ENDPOINT}${image})` }}
                    >
                        <div className={Style.infoEvent}>
                            <h1 className={Style.nameEvent}>{name}</h1>
                            <p className={Style.p}>{description}</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )





}



export default Event