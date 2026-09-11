import type { Teamstype } from "../../../interface/TeamType"
export class TeamModel {
  team:Teamstype

  constructor(
   team:Teamstype
  ) 
  {
    this.team = team
  }
}