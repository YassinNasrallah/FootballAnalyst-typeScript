import { createContext } from "react";
import type {Player} from '../models/Player'
import type {Team} from '../models/Team'

type ContextType = {
        handleChange :(event:React.ChangeEvent<HTMLInputElement>)=>void
        search:string,
        team:Team[],
        players:Player[],
        setloading:React.Dispatch<React.SetStateAction<boolean>>,
        loading:boolean,
}
const Context = createContext<ContextType | undefined>(undefined)
export default Context
