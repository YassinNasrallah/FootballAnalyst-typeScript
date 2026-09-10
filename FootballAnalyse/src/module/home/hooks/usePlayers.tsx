import { useEffect, useState } from "react"
import { PlayerModel } from "../../PlayerPage/models/PlayerModel"
import 
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
