import API from '../api/Api';
import { useEffect, useState } from 'react';
import  { PlayerModel } from "../models/PlayerModel";
import  { TeamModel } from "../models/TeamModel";

const useFootballSearch = (search:string) => {
    const [players, setPlayers] = useState<PlayerModel[]>([])
    const [teams, setTeams] = useState<TeamModel[]>([])

    useEffect(()=>{
      if(search.trim() ===''){
        return
      }
     
        const timer = setTimeout(async()=>{
              const playerdata = await API._getplayers(search)
             setPlayers(playerdata)
             console.log(search) 

             const teamdata = await API._getteams(search)
            setTeams(teamdata)
        },300)
        return()=>clearTimeout(timer)
    },[search])

    return{
      players,
      teams,
    }
}

export default useFootballSearch
