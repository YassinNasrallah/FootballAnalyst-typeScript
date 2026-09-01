
import Search from './Searchbar'
import Suggestions from './Suggestions'
import useFootballSearch from '../../service/useFootballSearch'
import useSearch from '../../hooks/useSearch'
const Searchwrapper = () => {
    
    const { players, teams} = useFootballSearch()
     const {search} = useSearch()
  return (
    <div className='search-wraper'> 
       <Search/>
       {search.trim()!=='' && (
          <Suggestions
              teams={teams} players={players}/>
       )}

    </div>
    
  )
}

export default Searchwrapper
