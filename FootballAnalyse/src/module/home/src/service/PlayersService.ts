
import API from "../../../../api/Api"
export const getPlayersData = async()=>{
    const playersData = await API._getplayers()
    console.log(playersData)
    return playersData
} 
getPlayersData()