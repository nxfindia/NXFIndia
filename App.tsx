import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FilmFestivals from './pages/FilmFestivals';
import Osff from './pages/Osff';
import AtomFestival from './pages/AtomFestival';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/film-festivals" element={<FilmFestivals />} />
            <Route path="/osff" element={<Osff />} />
            <Route path="/atom" element={<AtomFestival />} />
            
            {/* Redirects/Placeholders for backward compatibility or direct access */}
            <Route path="/donate" element={<Navigate to="/contact" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
};

export default App;