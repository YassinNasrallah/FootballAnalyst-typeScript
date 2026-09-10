
import Search from './Searchbar'
import Suggestions from './PlayersSuggestions'
import useSearch from '../../../home/hooks/useSearch'
import useSearchPlayers from '../../hook/useSearchPlayers'
const Searchwrapper = () => {
    const {search, handleChange} = useSearch()
    const { players} = useSearchPlayers(search)
  return (
    <div className='players-search-wraper'> 
       <Search search={search} handleChange={handleChange}/>
       {search.trim()!=='' && (
          <Suggestions
              players={players}/>
       )}

    </div>
    
  )
}

export default Searchwrapper
