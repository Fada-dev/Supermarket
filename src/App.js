import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HeaderPage from './HeaderPage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import OffersPage from './OffersPage'; // Import the new OffersPage component
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
          <Route path="/offers" element={<OffersPage />} /> {/* Add the Offers page route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
