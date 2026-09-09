import Header from '../components/header/Header'
import Lastmatches from '../components/body/Lastmatches'
import Navigation from '../components/navbar/Navigation'
import PlayersSection from '../components/body/PlayersSection'
const HomePage = () => {
  return (
    <div>
        <Navigation />
        <Header />
        <Lastmatches />
        <PlayersSection />
    </div>
  )
}

export default HomePage

