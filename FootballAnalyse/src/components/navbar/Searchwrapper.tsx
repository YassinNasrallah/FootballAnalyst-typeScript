
import Search from './Searchbar'
import Suggestions from './Suggestions'
import useFootballSearch from '../../service/useFootballSearch'
import useSearch from '../../hooks/useSearch'
const Searchwrapper = () => {
    const {search, handleChange} = useSearch()
    const { players, teams} = useFootballSearch(search)
     
  return (
    <div className='search-wraper'> 
       <Search search={search} handleChange={handleChange}/>
       {search.trim()!=='' && (
          <Suggestions
              teams={teams} players={players}/>
       )}

    </div>
    
  )
}

export default Searchwrapper
