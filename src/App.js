import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HeaderPage from './HeaderPage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import OffersPage from './OffersPage';
import AboutPage from './AboutPage'; // Import the AboutPage component
import ContactusPage from './ContactusPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/header" element={<HeaderPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/about" element={<AboutPage />} /> 
          <Route path="/contact" element={<ContactusPage />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
