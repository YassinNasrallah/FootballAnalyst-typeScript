
import Search from '../../../../components/search/Searchbar'
import Suggestions from './TeamsSuggestions'
import usePlayersSearch from '../../hooks/usePlayersSearch'
import useSearch from '../../hooks/useSearch'
const Searchwrapper = () => {
    const {search, handleChange} = useSearch()
    const {teams} = usePlayersSearch(search)
     
  return (
    <div className='search-wraper'> 
       <Search search={search} handleChange={handleChange}/>
       {search.trim()!=='' && (
          <Suggestions
              teams={teams}/>
       )}

    </div>
    
  )
}

export default Searchwrapper
