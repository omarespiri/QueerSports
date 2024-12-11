import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/cover.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import QueerAthletes from './pages/QueerAthletes';
import MediaAnalysis from './pages/MediaAnalysis';
import TransAthletes from './pages/TransAthletes';
import LeagueActions from './pages/LeagueActions';
import AttitudeChanges from './pages/AttitudeChanges';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column vh-100">
        <Navbar />
        <div className="flex-grow-1 d-flex justify-content-center align-items-center cover-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/queer-athletes" element={<QueerAthletes />} />
            <Route path="/media-analysis" element={<MediaAnalysis />} />
            <Route path="/trans-athletes" element={<TransAthletes />} />
            <Route path="/league-actions" element={<LeagueActions />} />
            <Route path="/attitude-changes" element={<AttitudeChanges />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
