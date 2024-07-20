import React from 'react';
import './App.css'; // Using App.css for styles
import myLogo from './images/myLogo.png';
import { FaShoppingCart } from 'react-icons/fa';


const HeaderPage = () => {
  return (
    <div className="homepage">
      <header className="header">
      <img src={myLogo} alt=" " className='img-logo' /> 
        <div className="logo-name">Supermarket</div>
        <div className="search-bar">
          <input type="text" placeholder="search product" />
          <button>search</button>
        </div>
        <div className="user-actions">
          <a href="/login">Login</a> | <a href="/signup">Register</a>
          <div className="cart">
          <span>cart</span>
          <FaShoppingCart size={18} />
          </div>
        </div>
      </header>
      <nav className="navbar">
        <a href="/">home</a>
        <a href="/">offers</a>
        <a href="/">contact Us</a>
        <a href="/">about us</a>
      </nav>
     {/* <main className='content'>

     </main> */}
    </div>
  );
};

export default HeaderPage;
