import React from 'react';
import { Link } from 'react-router-dom';


const products = [
  
];


const Home = () => {
  return (
    <>
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
          <div className="products-container">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <img
                src={product.img}
                alt={product.name}
                className="product-image"
              />
              <h3 className="product-title">{product.name}</h3>
              <p className="product-price">R$ {product.price},00</p>
              <button
                className="product-button"
                onClick={() => handleBuy(product)}
              >
                Comprar
              </button>
            </div>
          ))}
        </div>
        </>
  );
};

export default Home;