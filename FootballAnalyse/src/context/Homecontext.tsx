
import { createContext } from "react"; 
import type { MatcheModel } from "../models/MatcheModel";
 type HomecontextType = {
       matche:MatcheModel[]
 }

 const Homecontext = createContext<HomecontextType | undefined>(undefined)

export default Homecontext
