import FootballApi from "../../libs/FootballApi"
import { MatcheModel } from "../../module/home/models/MatcheModel"

export  const getMatches = async():Promise<MatcheModel[]> =>{
    const result = await FootballApi( `fixtures?team=541&league=2&season=2022`)
    console.log(result)
    return result.response
 }
 export const getstate = async(id:number) =>{
    const result = await FootballApi( `fixtures/statistics?fixture=${id}`)
    console.log(result)
    return result.response
 }


  export const getMatchById = async (id:number) => {
    const result = await FootballApi(`fixtures?id=${id}`)
    return result.response
}

