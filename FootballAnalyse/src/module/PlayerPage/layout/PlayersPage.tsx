import '../style/Playerspage.css'

import Header from '../components/header/Header'
import Navigation from '../../home/components/navbar/Navigation'

import TopSoccerscard from '../components/PlayersSection/TopSoccerscard'

const PlayersPage = () => {
  return (
    <div className='playerspage-container'>
        <Navigation />
        <Header />  
        
        <TopSoccerscard />
    </div>
  )
}

export default PlayersPage
