import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './screens/Home';
import Geuss from './screens/Geuss';
import LoginSignUp from './screens/LoginSignUp';
import UserLeaderboard from './screens/UserLeaderboard';

import "./styles/app.css";
import Leaderboard from './screens/Leaderboard';

function App() {

  const [userID, setUserID] = useState(0)
  const [usernameEmit, setUsernameEmit] = useState('')
  const [userHighScore, setUserHighScore] = useState(0)
  const [userGamesPlayed, setUserGamesPlayed] = useState(0)



  useEffect(() => {
    (
    async () => {
    const res = await fetch('http://localhost:9090/validate', {
      // const res = await fetch('https://gin-production-6435.up.railway.app/validate', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',

      })

      const content = await res.json()
      console.log(content)
      let arr = []
      arr.push(content)
      setUserID(content.id)
      setUsernameEmit(content.Username)
      setUserHighScore(content.Highscore)
      setUserGamesPlayed(content.GamesPlayed)
    }
    )()
  })  






  return (
    <Router>
      <div className="App-container">
        <div className="section">
          <Header usernameEmit={usernameEmit} setUsernameEmit={setUsernameEmit}/>
        </div>

        <div className="section">
            <Routes>

              <Route path="/" element={<Geuss usernameEmit={usernameEmit} userId={userID} userHighScore={userHighScore} userGamesPlayed={userGamesPlayed}/>} />
              <Route path="/leaderboard" element={<Leaderboard  />} />
              <Route path="/userlb" element={<UserLeaderboard/>} />
              <Route path="/vote" element={<Home/>} />
              <Route path="/login" element={<LoginSignUp usernameEmit={usernameEmit} setUsernameEmit={setUsernameEmit}/>} />

            </Routes>
        </div>

        <div className="section">
           <Footer  />
        </div>

      </div>
    </Router>

  );
}

export default App;
