import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import QueerAthletes from './pages/QueerAthletes';
import MediaAnalysis from './pages/MediaAnalysis';
import TransAthletes from './pages/TransAthletes';
import LeagueActions from './pages/LeagueActions';
import AttitudeChanges from './pages/AttitudeChanges';
import Sources from './pages/Sources';

function App() {
  const globalStyles = {
    app: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #add8e6, #ffffff)', // Light blue gradient background
      fontFamily: 'Arial, sans-serif', // Global font family
    },
    mainContent: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  return (
    <Router>
      <div style={globalStyles.app}>
        <Navbar />
        <div style={globalStyles.mainContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/queer-athletes" element={<QueerAthletes />} />
            <Route path="/media-analysis" element={<MediaAnalysis />} />
            <Route path="/trans-athletes" element={<TransAthletes />} />
            <Route path="/league-actions" element={<LeagueActions />} />
            <Route path="/attitude-changes" element={<AttitudeChanges />} />
            <Route path="/sources" element={<Sources />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
