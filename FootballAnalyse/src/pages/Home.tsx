import Navigation from '../components/navbar/Navigation'
import '../style/Home.css'
import Header from '../components/header/Header'
import Homecontext from '../context/Homecontext'
import useHome from '../hooks/useHomecontext'
const Home = () => {
  const {matche} = useHome()
  return (
    <div className='main-container'>
        <Navigation />
        <Homecontext.Provider value={
          {
            matche
          }
        }>
          <Header />
        </Homecontext.Provider>
        
    </div>
  )
}

export default Home
