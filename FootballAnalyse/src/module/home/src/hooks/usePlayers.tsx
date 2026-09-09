import { useEffect, useState } from "react"
import { PlayerModel } from "../models/PlayerModel"
import { getPlayersData } from "../service/PlayersService"
import API from "../../../../api/Api"
const usePlayers = () => {
    const [players, setPlayers] = useState<PlayerModel[]>([])
    useEffect(()=>{
        const getPlayersData = async()=>{
           const response = await API._getplayers()
           setPlayers(response)
        }
        getPlayersData()
    },[])
  return {
    players
  }
  
}

export default usePlayers
