import React from 'react';
import { Link } from 'react-router-dom';

function Product({ product }) {
    return (

        <div className="product-info-card">
        <h2 className="product-info-title">{product.name}</h2>
        <p className="product-info-price">Preço: R${product.price}</p>
        <p className={`product-info-stock ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
            {product.inStock ? 'Em estoque' : 'Fora de estoque'}
        </p>
        <Link
            to="/carrinho"
            className="product-info-button"
            onClick={() => addToCart(product)}
        >
            Adicionar ao Carrinho
        </Link>
        </div>


    );
}

export default Product;