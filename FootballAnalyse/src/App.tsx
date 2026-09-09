import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import PlayersPage from "./module/PlayerPage/src/layout/PlayersPage";
  function App(){
  return (
       <div className="App">
           
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/playerpage" element={<PlayersPage />}/>
              </Routes>
        
       </div>
  )
  }


export default App
