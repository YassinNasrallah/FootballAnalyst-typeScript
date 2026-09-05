
import API from "../api/Api"

 export const GetMatchesData = async() =>{
        const MatchesData = await API._getMatches()
        return MatchesData
        }
        GetMatchesData()
  