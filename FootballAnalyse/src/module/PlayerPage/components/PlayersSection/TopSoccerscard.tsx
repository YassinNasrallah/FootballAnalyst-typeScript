import  useTopsoccers from "../../hook/useTopsoccers"
import type { PlayerModel } from "../../models/PlayerModel"

const TopSoccerscard = () => {
  const {topSoccers} = useTopsoccers()
  
  
  
  return (
    <div className="topsoccers-container">
      {topSoccers?.slice(0, 5).map((player:PlayerModel)=>(

        
      <div className="" key={player.player.id}>
         <img src={player.player.photo} alt="player-photo" loading="lazy" />
         <h2>{player.player.name}</h2>
         
      </div>
      
      ))}
      
    </div>
  )
}

export default TopSoccerscard
