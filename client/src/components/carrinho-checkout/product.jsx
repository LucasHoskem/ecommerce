import React from 'react';

function Product({ product, addToCart }) {
  return (
  

<div className="products-container">
  <div className="product-card">
    <h3 className="product-title">{product.name}</h3>
    <p className="product-price">R$ {product.price},00</p>
    <button
      className="product-button"
      onClick={() => addToCart(product)}
    >
      Comprar
    </button>
  </div> 
</div>
  );
}

export default Product;
