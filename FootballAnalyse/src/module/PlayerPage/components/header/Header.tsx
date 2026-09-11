
import '../../style/Playerspage.css'
import PlayersSearch from '../navbar/PlayersSearch'
import HeroContent from './HeroContent'

const Header = () => {
  return (
    <div className="playerpage-hero-content" >
       <HeroContent />
       <PlayersSearch /> 
       
    </div>
  )
}

export default Header
