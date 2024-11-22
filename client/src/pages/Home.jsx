import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='navbar-container'>
      <nav className='navbar'>
        <Link to="/">Bem Vindo</Link>
        <ul className='navbar-menu'>
          <li className='navbar-item'>
            <Link to="/login" className='navbar-link'>Login</Link>
          </li>
          <li className='navbar-item'>
            <Link to="/register" className='navbar-link'>Sign-in</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;