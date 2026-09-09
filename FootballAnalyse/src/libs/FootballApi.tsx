import type { MatcheModel } from "../module/home/src/models/MatcheModel"
import type { PlayerModel } from "../module/home/src/models/PlayerModel"
import { TeamModel } from "../module/home/src/models/TeamModel"


const FootballApi = () => {
 const API_key = 'bbf173f9ce928fa2fa132dc984fe75e3'
 
 const _getplayers = async():Promise<PlayerModel[]>=>{
    const result = await fetch("https://v3.football.api-sports.io/players/topscorers?league=2&season=2022",{
        headers:{
            "x-apisports-key":API_key
        }
    })
    const data = await result.json()
    console.log(data)
    return data.response
 }

 const _getteams = async(search:string):Promise<TeamModel[]>=>{
      const result = await fetch(`https://v3.football.api-sports.io/teams?search=${search}`,{
        headers:{
            "x-apisports-key":API_key
        }
      
      })
            const data = await result.json()
            console.log(data)
            return data.response
 }

 const _getMatches = async():Promise<MatcheModel[]> =>{
    const result = await fetch( `https://v3.football.api-sports.io/fixtures?team=541&league=2&season=2022`,{
         headers:{
            "x-apisports-key":API_key
         }

    })
    const data = await result.json()
    console.log(data)
    return data.response
 }
 const _getstate = async(id:number) =>{
    const result = await fetch( `https://v3.football.api-sports.io/fixtures/statistics?fixture=${id}`,{
         headers:{
            "x-apisports-key":API_key
         }

    })
    const data = await result.json()
    console.log(data)
    return data.response
 }
 
 const _getMatchById = async (id:number) => {
    const result = await fetch(
        `https://v3.football.api-sports.io/fixtures?id=${id}`,
        {
            headers: {
                "x-apisports-key": API_key
            }
        }
    )

    const data = await result.json()

    return data.response
}
 const _getPlayersById = async (id:number) => {
    const result = await fetch(
        `https://v3.football.api-sports.io/players?id=${id}&season=2022`,
        {
            headers: {
                "x-apisports-key": API_key
            }
        }
    )

    const data = await result.json()

    console.log(data)

    return data.response
}


 return {
    _getplayers,
    _getteams,
    _getMatches,
    _getMatchById,
    _getstate,
    _getPlayersById
 }
}

export default FootballApi