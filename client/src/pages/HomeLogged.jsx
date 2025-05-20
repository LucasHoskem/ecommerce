import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const HomeLogged = () => {
  const navigate = useNavigate();
  const handleBuy = (product) => {
    // Exemplo: você pode enviar o produto para o estado do carrinho aqui, se necessário
    console.log(`Adicionando ao carrinho: ${product.name}`);
    navigate('/carrinho'); // Redireciona para a página do carrinho
  }


  const products = [
  ];

  return (
    <>
      <div className='navbar-container'>
        <nav className='navbar'>
            <a href="/inicio">BEM-VINDO</a>
            <ul className="navbar-menu">
                <li className='navbar-item'><Link to="/profile">Perfil</Link></li>
                <li className='navbar-item'><Link to="/carrinho">Carrinho</Link></li>
                <li className='navbar-item'><Link to="/catalogo">menu</Link></li>
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

export default HomeLogged;
