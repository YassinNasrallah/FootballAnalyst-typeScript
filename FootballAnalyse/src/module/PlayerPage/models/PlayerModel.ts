import type { statistics } from "../../../interface/PlayerStats"
import type { PlayerType } from "../../../interface/PlayerType"

export class PlayerModel{
player:PlayerType
statistics:statistics[]
constructor(
player:PlayerType,
statistics:statistics[]
)
{
    this.player = player
    this.statistics = statistics
}
}


