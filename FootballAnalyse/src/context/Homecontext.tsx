
import { createContext } from "react"; 
import type { MatcheModel } from "../models/MatcheModel"
import type { TeamModel } from "../models/TeamModel";
 type HomecontextType = {
       matches:MatcheModel[]
       teams:TeamModel[]
 }

 const Homecontext = createContext<HomecontextType | undefined>(undefined)

export default Homecontext
