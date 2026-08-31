import type {Scores, Winner} from "../interface/MatchesType";

export class MatcheModel{

allgoals:Scores
winner:Winner

constructor(
allgoals:Scores,
winner:Winner,
)
{
this.allgoals = allgoals
this.winner = winner
}
}