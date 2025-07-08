import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Copper from './pages/Copper';
import Aluminium from './pages/Aluminium';
import './App.css';

function BodyClassController() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/') {
      document.body.classList.add('home-page');
    } else {
      document.body.classList.remove('home-page');
    }
    return () => {
      document.body.classList.remove('home-page');
    };
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <BodyClassController />
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/copper" element={<Copper />} />
            <Route path="/aluminium" element={<Aluminium />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton phoneNumber="919887973000" />
      </div>
    </Router>
  );
}

export default App;
