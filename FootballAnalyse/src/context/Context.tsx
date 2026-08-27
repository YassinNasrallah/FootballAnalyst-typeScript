import { createContext } from "react";
import {Player} from '../models/Player'
import {Team} from '../models/Team'


type ContextType = {
        handleChange :()=>void
        search:string,
        team:Team[],
        players:Player[],
        setloading:React.Dispatch<React.SetStateAction<boolean>>,
        loading:boolean,
       
}

const Context = createContext<ContextType | undefined>(undefined)

export default Context
