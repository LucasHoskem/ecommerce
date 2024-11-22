import React from 'react';
import { Link } from 'react-router-dom';

const HomeLogged = () => {
  return (
    <div className='navbar1'>
        <nav>
            <a href="/inicio">BEM-VINDO</a>
            <ul className="list">
                <li><Link to="/profile">Perfil</Link></li>
                <li><Link to="/carrinho">Carrinho</Link></li>
                <li><Link to="/catalogo">menu</Link></li>
            </ul>
            
        </nav>
    </div>
  );
};

export default HomeLogged;
