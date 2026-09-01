
import { Search } from 'lucide-react';
import useSearch from '../../hooks/useSearch';

const Searchbar = () => {
  const {search, handleChange} = useSearch() 
  return (
    <div className='search-input'>
         <Search className='search-icon'/>
        <input type="text" placeholder='SEARCH' value={search} onChange={handleChange} />
    </div>
  )
}

export default Searchbar
