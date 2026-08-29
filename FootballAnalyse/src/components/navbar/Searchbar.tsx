
import { Search } from 'lucide-react';
import useFootball from '../../hooks/useFootball';
const Searchbar = () => {
    const {search, handleChange} = useFootball()
  return (
    <div className='search-input'>
         <Search className='search-icon'/>
        <input type="text" placeholder='SEARCH' value={search} onChange={handleChange} />
    </div>
  )
}

export default Searchbar
