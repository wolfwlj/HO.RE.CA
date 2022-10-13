import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './screens/Home';
import "./styles/app.css";

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
