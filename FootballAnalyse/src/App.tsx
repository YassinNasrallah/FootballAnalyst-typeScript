import { Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import FootballApi from "./libs/FootballApi";
import Context from "./context/Context";
import React, { useEffect, useState } from 'react';
import { Player } from "./models/Player";
import { Team } from "./models/Team";




  function App(){


  const API= FootballApi()
  const [search, setSearch] = useState<string>('')
  const [players, setPlayers] = useState<Player[]>([])
  const [team, setTeams] = useState<Team[]>([])
  const [loading, setloading]= useState(true)


  const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setSearch(event.target.value)
  }
  useEffect(()=>{
    if(search.trim()===""){
      return
    }

    const timer = setTimeout(async()=>{
      const players = await API._getplayers(search)
      const teams = await API._getteams(search)
      setTeams(
        teams
      )
      setPlayers(
        players
      )
      console.log(players,
        teams
      )
    },300)
    return()=>{
      clearTimeout(timer)
    }
  },[search])


  return (
       <div className="App">
          <Context.Provider value={{
            handleChange,
            setloading,
            search,
            loading,
            players,
            team,
            
          }}>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
          </Context.Provider>
       </div>
  )
  }


export default App
