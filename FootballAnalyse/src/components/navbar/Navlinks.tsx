
import {Link} from 'react-router-dom'

const Navlinks = () => {
  return (
    <nav className='navlinks'>
        <Link className='nav-item' to="/">Home</Link>
        <Link className='nav-item'>Players</Link>
        <Link className='nav-item'>Clubs</Link>
    </nav>
  )
}

export default Navlinks
