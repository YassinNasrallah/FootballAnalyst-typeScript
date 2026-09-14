import '../style/Playerspage.css'
import Header from '../components/header/Header'
import Navigation from '../../home/components/navbar/Navigation'
import TopSoccerscard from '../components/PlayersSection/TopSoccerscard'
import PlayersSuggestions from '../components/PlayersSection/PlayersSuggestions'
import useSearch from '../../home/hooks/useSearch'
import useSearchPlayers from '../hook/useSearchPlayers'
import Footer from '../../../components/footer/Footer'

const PlayersPage = () => {
  const {search} = useSearch()
  const {players} = useSearchPlayers(search)
  return (
    <div className='playerspage-container'>
        <Navigation />
        <Header />  
        <PlayersSuggestions players={players}/>
        <TopSoccerscard />
        <Footer />
    </div>
  )
}

export default PlayersPage
