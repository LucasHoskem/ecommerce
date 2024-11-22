import React from 'react';
import Product from './Product';

function ProductCatalog({ products, filters }) {
    const filteredProducts = products
        .filter((product) =>
            product.name.toLowerCase().includes(filters.search.toLowerCase())
        )
        .filter((product) =>
            filters.category === 'Todos' || product.category === filters.category
        )
        .filter((product) =>
            product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
        )
        .filter((product) =>
            filters.inStock ? product.inStock : true
        );

    return (
        <div>
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            ) : (
                <p>Nenhum produto encontrado.</p>
            )}
        </div>
    );
}

export default ProductCatalog;