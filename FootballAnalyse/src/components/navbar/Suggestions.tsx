import { useNavigate } from 'react-router-dom'
import type { PlayerModel } from '../../models/PlayerModel'
import type { TeamModel } from '../../models/TeamModel'
  type SuggestionsProps = {
    players: PlayerModel[];
    teams: TeamModel[];
};
const Suggestions = ({ players, teams }: SuggestionsProps) => {
    const navigate = useNavigate()
  return (
     <div className="search-suggestion">
            {players.slice(0, 5).map((player:PlayerModel) => (
                <div key={player.player.id} className="details" onClick={()=>
                  navigate(`/players/${player.player.id}`)
                }>
                  
                  <div className="image">
                    <img src={player.player.photo} loading='lazy' /> 
                 </div>

                  <div className="name">
                      <h3>
                        {player.player.name}
                      </h3>
                      <p>Player / {player.player.position}</p>
                  </div>
                    
                
                </div> 
            ))}
            
            
            {teams.slice(0, 5).map((club:TeamModel) => (
                <div key={club.team.id} className="details">
                  
                  <div className="image">
                    <img src={club.team.logo} loading='lazy' /> 
                 </div>

                  <div className="name">
                      <h3>
                        {club.team.name}
                      </h3>
                      <p>club / {club.team.country}</p>
                  </div>
                </div> 
            ))}
        </div>
  )
}

export default Suggestions
