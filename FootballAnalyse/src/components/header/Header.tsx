

// import Swiper core and required modules
import { Navigation, } from 'swiper/modules';
import stadium from '../../assets/Real.jfif'
import players from '../../assets/players.jfif'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
const Header = () => {
  return (
    
        <div className="hero" style={{ background: `url(${stadium})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', height:'60vh', backgroundPosition:'center' }}>
             <div className="hero-content">
                  <h1>Follow Last Matches and see the results</h1>
                      <button>Learn More</button>
                      </div>
                  </div>

    
  )
}

export default Header
