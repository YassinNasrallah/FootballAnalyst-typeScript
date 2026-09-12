import { useEffect, useState } from "react"
import { PlayerModel } from "../models/PlayerModel"
import { getSearchPlayers } from "../../../service/players/Getplayers"

const useSearchPlayers = (search:string) => {

    const [players, setPlayers] = useState<PlayerModel[]>([])
    useEffect(()=>{
      if(search.trim()===''){
        return
      }
        const timer = setTimeout(async()=>{
            const response = await getSearchPlayers(search)
            console.log(response)
            setPlayers(response)
        },300)
        return()=>clearTimeout(timer)
    },[search])
  return {
    players
  }
}

export default useSearchPlayers
