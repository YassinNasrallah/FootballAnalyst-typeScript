
import type { Searchbarprops } from '../../../../interface/SearchType';
const PlayersSearchbar = ({search, handleChange}:Searchbarprops) => {
  return (
    <div>
        <input type="text" placeholder='Search For Player' value={search} onChange={handleChange}/>
    </div>
  )
}

export default PlayersSearchbar
