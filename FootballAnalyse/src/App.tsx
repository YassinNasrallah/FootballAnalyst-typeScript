import { Routes, Route } from "react-router-dom";
import HomePage from "./module/home/layout/HomePage";
import PlayersPage from "./module/PlayerPage/layout/PlayersPage";
  function App(){
  return (
       <div className="App">
           
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/playerpage" element={<PlayersPage />}/>
              </Routes>
        
       </div>
  )
  }


export default App
