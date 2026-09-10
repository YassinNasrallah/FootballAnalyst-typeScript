 import FootballApi from "../../libs/FootballApi"
import { TeamModel } from "../../module/home/models/TeamModel"
 export const getteams = async(search:string):Promise<TeamModel[]>=>{
            const result = await FootballApi(`teams?search=${search}`)
            return result.response
 }