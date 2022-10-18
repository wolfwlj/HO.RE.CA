import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './screens/Home';
import Geuss from './screens/Geuss';

import "./styles/app.css";
import Leaderboard from './screens/Leaderboard';

function App() {
  return (
    <Router>
      <div className="App-container">
        <div className="section">
          <Header />
        </div>

        <div className="section">
            <Routes>

              <Route path="/" element={<Home  />} />
              <Route path="/leaderboard" element={<Leaderboard  />} />
              <Route path="/geuss" element={<Geuss  />} />

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
