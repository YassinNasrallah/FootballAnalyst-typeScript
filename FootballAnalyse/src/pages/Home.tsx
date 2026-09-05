import Navigation from '../components/navbar/Navigation'
import '../style/Home.css'
import Header from '../components/header/Header'
import Lastmatches from '../components/body/Lastmatches'

const Home = () => {
  
  return (
    <div className='main-container'>
          <Navigation />
          <Header />  
          <Lastmatches />
    </div>
  )
}

export default Home
