import React from 'react';

function Product({ product }) {
    return (
        <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Preço: R${product.price}</p>
            <p>{product.inStock ? 'Em estoque' : 'Fora de estoque'}</p>
        </div>
    );
}

export default Product;