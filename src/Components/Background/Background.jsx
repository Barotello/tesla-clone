import './Background.css'
import video1 from '../../assets/video1.mp4'
import Modely1 from '../../assets/Modely1.webp'
import Modely2 from '../../assets/Modely2.webp'
import Modely3 from '../../assets/Modely3.webp'

const Background = ({playStatus,heroCount}) => {
  if (playStatus){
    return(
      <video className='background fade-in' autoPlay loop muted>
        <source  src={video1} type='video/mp4'/>
      </video>
    )
  }
  else if (heroCount===0){
    return <img src={Modely1} className='background fade-in' alt="" />
  }
  else if (heroCount===1){
    return <img src={Modely2} className='background fade-in' alt="" />
  }
  else if (heroCount===2){
    return <img src={Modely3} className='background fade-in' alt="" />
  }
}

export default Background
