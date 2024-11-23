import React from 'react';

function Product({ product, addToCart }) {


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
      ];

    return (
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
              onClick={() => addToCart(product)}
            >
              Comprar
            </button>
          </div>
        ))}
      </div>
    );
}

export default Product;