const API_key = 'your-own-key'
const API_url = "https://v3.football.api-sports.io"
export const FootballApi = async(endpoint:string) => {
    const result = await fetch(`${API_url}/${endpoint}`,{
              headers:{
              "x-apisports-key":API_key
          }
    })
    if(!result){
        throw new Error('faild to fetch')
    } return result.json()
}
