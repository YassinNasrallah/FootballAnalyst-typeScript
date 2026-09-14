import { useNavigate } from 'react-router-dom'
import { PlayerModel } from '../../models/PlayerModel';

  type SuggestionsProps = {
   
    players:PlayerModel[]
};
const PlayersSuggestions = ({players}:SuggestionsProps) => {
    const navigate = useNavigate()
  return (
     <div className="Players-suggestion">
            {players.slice(0, 5).map((player:PlayerModel) => (
                <div key={player.player.id} className="details" onClick={()=>{
                  navigate(`/players/${player.player.id}`)
                }}>
                  
                  <div className="image">
                    <img src={player.player.photo} loading='lazy' /> 
                 </div>

                  <div className="name">
                      <h3>
                        {player.player.name}
                      </h3>
                    
                  </div>
                </div> 
            ))}
        </div>
  )
}

export default PlayersSuggestions
