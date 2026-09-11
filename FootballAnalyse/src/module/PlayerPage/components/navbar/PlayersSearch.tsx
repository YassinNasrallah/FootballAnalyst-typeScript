

import Searchbutton from '../../../../components/Searchbutton'
import PlayersSearchbar from './PlayersSearchbar'
import useSearch from '../../../home/hooks/useSearch'

const PlayersSearch = () => {
    const {search, handleChange} = useSearch()
  return (
    <div className='playersSearch'>
       <Searchbutton />
       <PlayersSearchbar search={search} handleChange={handleChange}/>
    </div>
  )
}

export default PlayersSearch
