import { useEffect, useState } from "react"
import { PlayerModel } from "../models/PlayerModel"
import Getplayers from "../../../service/players/Getplayers"

const useSearchPlayers = (search:string) => {
    const {getPlayers} = Getplayers()
    const [players, setPlayers] = useState<PlayerModel[]>([])
    useEffect(()=>{
        const fetchPlayers = async()=>{
            const response = await getPlayers(search)
            setPlayers(response)
        }
        fetchPlayers()
    },[search])
  return {
    players
  }
}

export default useSearchPlayers
