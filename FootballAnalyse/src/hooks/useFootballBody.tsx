import { useEffect, useState,} from 'react'
import { MatcheModel } from '../models/MatcheModel'
import { GetMatchesData } from '../service/FixtureService'


import { fakeFixture } from '../fakeData/Fakedata'

const useFootballBody = () => {
   const [matches, setMatches] = useState<MatcheModel[]>([])
   useEffect(()=>{
    const getMatchesData = async()=>{
        const response = await GetMatchesData()
         setMatches(response)
    }
    getMatchesData()
   },[])
   return{
    matches
   }
  
}

export default useFootballBody
