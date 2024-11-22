import React from 'react';

function Product({ product, addToCart }) {
    return (
        <div>
            <h2>{product.name}</h2>
            <p>Preço: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
        </div>
    );
}

export default Product;