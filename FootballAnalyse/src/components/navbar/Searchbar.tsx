
import { Search } from 'lucide-react';
import type { Searchbarprops } from '../../interface/SearchType';

const Searchbar = ({search,handleChange}:Searchbarprops) => {
  return (
    <div className='search-input'>
         <Search className='search-icon'/>
        <input type="text" placeholder='SEARCH' value={search} onChange={handleChange} />
    </div>
  )
}

export default Searchbar
