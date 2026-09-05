import type {Scores,  Fixture, Teams} from "../interface/MatchesType";

export class MatcheModel{

allgoals:Scores

id:Fixture
teams:Teams
constructor(
allgoals:Scores,

id:Fixture,
team:Teams
)
{
this.allgoals = allgoals

this.id=id
this.teams = team
}
}