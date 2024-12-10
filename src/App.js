import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import QueerAthletes from './pages/QueerAthletes';
import MediaAnalysis from './pages/MediaAnalysis';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/queer-athletes" element={<QueerAthletes />} />
        <Route path="/media-analysis" element={<MediaAnalysis />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
