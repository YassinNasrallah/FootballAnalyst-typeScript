import { useNavigate } from 'react-router-dom'
import type { TeamModel } from '../../models/TeamModel'
  type SuggestionsProps = {
   
    teams: TeamModel[];
};
const TeamsSuggestions = ({ teams }: SuggestionsProps) => {
    const navigate = useNavigate()
  return (
     <div className="search-suggestion">

            
            {teams.slice(0, 5).map((club:TeamModel) => (
                <div key={club.team.id} className="details" onClick={()=>{
                  navigate(`/teams/${club.team.id}`)
                }}>
                  
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

export default TeamsSuggestions
