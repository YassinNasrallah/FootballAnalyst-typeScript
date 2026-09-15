import type {Score,  Fixture, Teams} from "../../../interface/MatchesType"

export class MatcheModel{

goals:Score

id:Fixture
teams:Teams
constructor(
    goals:Score,
    id:Fixture,
    team:Teams
)
{
this.goals = goals

this.id=id
this.teams = team
}
}

