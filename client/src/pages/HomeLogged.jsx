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
    { name: "Smartphone X100", price: 1500, img: "https://via.placeholder.com/200?text=Smartphone+X100" },
    { name: "Fone Bluetooth Pro", price: 300, img: "https://via.placeholder.com/200?text=Fone+Bluetooth+Pro" },
    { name: "Notebook Ultra", price: 3500, img: "https://via.placeholder.com/200?text=Notebook+Ultra" },
    { name: "Smartwatch Fit", price: 800, img: "https://via.placeholder.com/200?text=Smartwatch+Fit" },
    { name: "Câmera Digital Z7", price: 2500, img: "https://via.placeholder.com/200?text=Camera+Digital+Z7" },
    { name: "Monitor 4K Vision", price: 2000, img: "https://via.placeholder.com/200?text=Monitor+4K+Vision" },
    { name: "Teclado Mecânico Pro", price: 400, img: "https://via.placeholder.com/200?text=Teclado+Mecanico+Pro" },
    { name: "Mouse Gamer RX", price: 250, img: "https://via.placeholder.com/200?text=Mouse+Gamer+RX" },
    { name: "Caixa de Som Wave", price: 600, img: "https://via.placeholder.com/200?text=Caixa+de+Som+Wave" },
    { name: "HD Externo 1TB", price: 500, img: "https://via.placeholder.com/200?text=HD+Externo+1TB" },
    { name: "Drone Phantom", price: 4500, img: "https://via.placeholder.com/200?text=Drone+Phantom" },
    { name: "Console Gamer X", price: 2500, img: "https://via.placeholder.com/200?text=Console+Gamer+X" },
    { name: "Tablet Pro 10", price: 1800, img: "https://via.placeholder.com/200?text=Tablet+Pro+10" },
    { name: "Carregador Rápido Turbo", price: 150, img: "https://via.placeholder.com/200?text=Carregador+Rapido+Turbo" },
    { name: "Headset Gamer 7.1", price: 700, img: "https://via.placeholder.com/200?text=Headset+Gamer+7.1" },
    { name: "Impressora Multifuncional X", price: 1200, img: "https://via.placeholder.com/200?text=Impressora+Multifuncional+X" },
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
