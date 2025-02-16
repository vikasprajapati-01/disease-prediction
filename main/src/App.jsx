import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import HeartForm from './HeartForm';
import DiabetesForm from './DiabetesForm';
import FAQ from './FAQ';
import About from './About';
import Home from './Home';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="form-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diabetes" element={<DiabetesForm />} />
          <Route path="/heart" element={<HeartForm />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
