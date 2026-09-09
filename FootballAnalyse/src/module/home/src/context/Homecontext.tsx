
import { createContext } from "react"; 
import type { MatcheModel } from "../models/MatcheModel"
import type { TeamModel } from "../models/TeamModel";
import type { PlayerModel } from "../models/PlayerModel";
 type HomecontextType = {
       matches:MatcheModel[]
       teams:TeamModel[]
       players:PlayerModel[]
 }

 const Homecontext = createContext<HomecontextType | undefined>(undefined)

export default Homecontext
