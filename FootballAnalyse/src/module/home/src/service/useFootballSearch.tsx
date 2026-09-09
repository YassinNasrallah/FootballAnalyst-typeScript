import API from '../../../../api/Api';
import { useEffect, useState } from 'react';
import  { TeamModel } from "../models/TeamModel";

const useFootballSearch = (search:string) => {
    const [teams, setTeams] = useState<TeamModel[]>([])
    useEffect(()=>{
      if(search.trim() ===''){
        return
      }
        const timer = setTimeout(async()=>{
             const teamdata = await API._getteams(search)
            setTeams(teamdata)
        },300)
        return()=>clearTimeout(timer)
    },[search])

    return{
      teams,
    }
}

export default useFootballSearch
