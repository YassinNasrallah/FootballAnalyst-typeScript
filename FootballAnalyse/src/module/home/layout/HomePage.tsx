import Header from '../components/header/Header'
import Lastmatches from '../components/body/Lastmatches'
import Navigation from '../components/navbar/Navigation'
import PlayersSection from '../components/body/PlayersSection'
import '../style/Home.css'
import '../style/homeResponsive.css'
import Footer from '../../../components/footer/Footer'
const HomePage = () => {
  return (
    <div className='home-container'>
        <Navigation />
        <Header />
        <Lastmatches />
        <PlayersSection />
        <Footer />
    </div>
  )
}

export default HomePage

