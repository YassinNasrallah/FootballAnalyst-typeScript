import { Link } from "react-router-dom"
import PlayerSectionImage from "./PlayerSectionImage"
const PlayersSection = () => {
    
  return (
    <div className='Players-container'>
        <PlayerSectionImage />
       <div className="content">
        <h2>Follow your favorite players, discover the stars of the season, and keep up with their latest performances and stats</h2>
        <Link to="/playerpage">Discover Player</Link>
       </div>
        
    </div>
  )
}

export default PlayersSection
