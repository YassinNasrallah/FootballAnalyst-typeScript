import  useTopsoccers from "../../hook/useTopsoccers"
import type { PlayerModel } from "../../models/PlayerModel"

const TopSoccerscard = () => {
  const {topSoccers} = useTopsoccers()
  
  
  
  return (
    <>
    
    
    <div className="topsoccers-container">
      
      {topSoccers.slice(0, 9).map((player:PlayerModel)=>(
        
      
        
      <div className="playerdetails" key={player.player.id}>
        
         <img src={player.player.photo} alt="player-photo" loading="lazy" />
        
         <div>
           <h2 className="player-name">{player.player.name}</h2>
           <div className="player-state">
            <h3 className="state">Goals: {player.statistics[0].goals.total}</h3>
           <h3 className="state">Assist: {player.statistics[0].goals.assists}</h3>
           <h3 className="state">Shots : {player.statistics[0].shots.total}</h3>
           </div>
          
         </div>
         
         
      </div>
     
      ))}
      
    </div>
    </>
  )
}

export default TopSoccerscard
