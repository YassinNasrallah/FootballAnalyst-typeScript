import { createContext } from "react";
import type { TeamModel } from "../models/TeamModel";
import type { PlayerModel } from "../models/PlayerModel";


type ContextType = {
        handleChange :(event:React.ChangeEvent<HTMLInputElement>)=>void
        search:string,
        team:TeamModel[],
        players:PlayerModel[],
        setloading:React.Dispatch<React.SetStateAction<boolean>>,
        loading:boolean,
        
}
const Context = createContext<ContextType | undefined>(undefined)
export default Context
