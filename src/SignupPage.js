import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Logo from './images/Logo.png';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [reenteredPassword, setReenteredPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== reenteredPassword) {
      setError('Passwords do not match');
      return;
    }
    // Add signup logic here
    // If successful:
    alert('Account created successfully!');
    navigate('/home');
    // If error:
    // setError('An error occurred. Please try again.');
  };

  return (
    <div className="signup-container">
      <img src={Logo} alt="Logo" className='img-logo-login' /> 
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="reenteredPassword">Re-enter Password:</label>
          <input
            type="password"
            id="reenteredPassword"
            value={reenteredPassword}
            onChange={(e) => setReenteredPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
