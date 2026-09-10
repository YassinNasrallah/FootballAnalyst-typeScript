import { useEffect, useState,} from 'react'
import { MatcheModel } from '../models/MatcheModel'
import { getMatches } from '../../../service/matches/Getmatches'



const useFootballBody = () => {
   const [matches, setMatches] = useState<MatcheModel[]>([])
   useEffect(()=>{
    const getMatchesData = async()=>{
        const response = await getMatches()
         setMatches(response)
    }
    getMatchesData()
   },[])
   return{
    matches
   }
  
}

export default useFootballBody
