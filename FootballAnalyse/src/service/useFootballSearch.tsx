import API from '../api/Api';
import { useEffect, useState } from 'react';
import  { PlayerModel } from "../models/PlayerModel";
import  { TeamModel } from "../models/TeamModel";
import useSearch from '../hooks/useSearch';
import useDebounce from '../hooks/useDebounce';

const useFootballSearch = () => {
    const [players, setPlayers] = useState<PlayerModel[]>([])
    const [teams, setTeams] = useState<TeamModel[]>([])
    const searchresult = useSearch()
    const debouncing = useDebounce(searchresult.search, 3000)
     
    useEffect(()=>{
      if(debouncing.trim() ===''){
        return
      }
      async function fetchdata() {
        const playerdata = await API._getplayers(debouncing)
        setPlayers(playerdata)
        console.log(players)
        
        const teamdata = await API._getteams(debouncing)
        setTeams(teamdata)
      }
      fetchdata()
    },[debouncing])

    return{
      players,
      teams,
      searchresult
    }
}

export default useFootballSearch
