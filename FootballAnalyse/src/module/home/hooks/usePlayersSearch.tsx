import { useEffect, useState } from 'react';
import  { TeamModel } from "../models/TeamModel";
import { getteams } from '../../../service/teams/Getteams';
const usePlayersSearch = (search:string) => {
  const [teams, setTeams] = useState<TeamModel[]>([])
    useEffect(()=>{
      if(search.trim() ===''){
        return
      }
        const timer = setTimeout(async()=>{
             const teamdata = await getteams(search)
            setTeams(teamdata)
        },300)
        return()=>clearTimeout(timer)
    },[search])

    return{
      teams,
    }
}

export default usePlayersSearch
