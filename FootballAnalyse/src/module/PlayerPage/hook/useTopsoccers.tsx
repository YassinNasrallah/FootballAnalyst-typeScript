import { useEffect, useState } from 'react'
import { PlayerModel } from '../models/PlayerModel'
import { getTopsoccers } from '../../../service/players/Getplayers'
const useTopsoccers = () => {
    const [topSoccers, setTopsoccers] = useState<PlayerModel[]>([])
    useEffect(()=>{
        const fetchdata = async()=>{
            const response = await getTopsoccers()
            console.log(response)
            setTopsoccers(response)
        }
        fetchdata()
    },[])
  return {
      topSoccers
  }
}

export default useTopsoccers
