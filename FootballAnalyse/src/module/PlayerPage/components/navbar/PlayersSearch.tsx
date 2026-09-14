

import Searchbutton from '../../../../components/search/Searchbutton'
import PlayersSearchbar from './PlayersSearchbar'
import useSearch from '../../../home/hooks/useSearch'
import useSearchPlayers from '../../hook/useSearchPlayers'

const PlayersSearch = () => {
    const {search, handleChange} = useSearch()
    const {players} = useSearchPlayers(search)

console.log(players)
  return (
    <div className='playersSearch'>
       <Searchbutton />
       <PlayersSearchbar search={search} handleChange={handleChange}/>
       
    </div>
  )
}

export default PlayersSearch
