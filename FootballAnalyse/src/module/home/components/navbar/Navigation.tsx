
import Logo from '../../../../components/Logo'
import MenuButton from '../../../../components/MenuButton'
import Navlinks from './Navlinks'
import Searchwrapper from './Searchwrapper'
const Navigation = () => {
  return (
    <div className='nav-container'>
      
        <Logo />
        <Navlinks />
        <Searchwrapper />
        <MenuButton />
    </div>
    
  )
}

export default Navigation
