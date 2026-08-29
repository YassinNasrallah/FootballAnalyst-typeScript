
import Search from './Searchbar'
import Suggestions from './Suggestions'
import useFootball from '../../hooks/useFootball'
const Searchwrapper = () => {
    const {search} = useFootball()
  return (
    <div className='search-wraper'>
       <Search />
       {search.trim()!=='' && (
        <Suggestions />
       )}

    </div>
  )
}

export default Searchwrapper
