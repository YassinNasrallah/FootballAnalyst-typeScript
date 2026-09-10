import { PlayerModel } from '../../module/PlayerPage/models/PlayerModel'
import FootballApi from '../../libs/FootballApi'
const Getplayers = () => {
     
   const getTopsoccer = async():Promise<PlayerModel[]>=>{
      const result = await FootballApi("players/topscorers?league=2&season=2022")
    return result.response
   }

   const getPlayers = async(search:string):Promise<PlayerModel[]>=>{
      const result = await FootballApi(`players/profiles?search=${search}`)
      return result.response
   } 

    const getPlayersById = async (id:number) => {
    const result = await FootballApi(
        `players?id=${id}&season=2022`)
      return result.response
}

return{
    getPlayers,
    getPlayersById,
    getTopsoccer
}
}

export default Getplayers

