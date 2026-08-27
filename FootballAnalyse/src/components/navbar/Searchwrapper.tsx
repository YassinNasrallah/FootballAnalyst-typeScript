import  { useContext } from 'react'
import Search from './Searchbar'
import Suggestions from './Suggestions'
import Context from '../../context/Context'
const Searchwrapper = () => {
    const {search} = useContext(Context)
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
