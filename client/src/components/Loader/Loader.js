import loader from '../../assets/image/Interwind-1.1s-344px.gif'
import Style from './LOader.module.css'
function Loader() {
  return (
    <div className={Style.div}><img src={loader} /></div>
  )
}

export default Loader