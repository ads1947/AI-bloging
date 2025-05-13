// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Advantages from './components/Advantages';
import Uses from './components/Uses';
import Info from './components/Info';
import Future from './components/Future';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advantages" element={<Advantages />} />
        <Route path="/uses" element={<Uses />} />
        <Route path="/info" element={<Info />} />
        <Route path="/future" element={<Future />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;