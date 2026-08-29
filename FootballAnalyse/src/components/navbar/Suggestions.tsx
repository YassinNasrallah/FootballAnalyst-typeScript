import { useNavigate } from 'react-router-dom'
import type { Player } from '../../models/Player'
import type { Team } from '../../models/Team'
import useFootball from '../../hooks/useFootball'
const Suggestions = () => {
    const {team, players} = useFootball()
    const navigate = useNavigate()
  return (
     <div className="search-suggestion">
            {players.slice(0, 5).map((player:Player) => (
                <div key={player.id} className="details" onClick={()=>
                  navigate(`/players/${player.id}`)
                }>
                  
                  <div className="image">
                    <img src={player.photo} loading='lazy' /> 
                 </div>

                  <div className="name">
                      <h3>
                        {player.name}
                      </h3>
                      <p>Player / {player.position}</p>
                  </div>
                    
                
                </div> 
            ))}
            
            
            {team.slice(0, 5).map((club:Team) => (
                <div key={club.id} className="details">
                  
                  <div className="image">
                    <img src={club.logo} loading='lazy' /> 
                 </div>

                  <div className="name">
                      <h3>
                        {club.name}
                      </h3>
                      <p>club / {club.country}</p>
                  </div>
                </div> 
            ))}
        </div>
  )
}

export default Suggestions
