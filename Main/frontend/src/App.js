import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
//import Projects from './pages/Projects';
import Team from './pages/Team';
import Resources from './pages/Resources';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
