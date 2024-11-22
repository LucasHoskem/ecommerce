import React, { useState } from 'react';
import ProductCatalog from './components/catalog-search/ProductCatalog';
import FilterBar from './components/catalog-search/FilterBar';
import productsData from './data/product';

function AppCatalogSearch() {
    const [products, setProducts] = useState(productsData);
    const [filters, setFilters] = useState({
        search: '',
        category: 'Todos',
        priceRange: [0, 100],
        inStock: false,
    });

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    return (
        <div>
            <div className='navbar1'>
                <nav>
                    <a href="/inicio">BEM-VINDO</a>
                    <ul className="list">
                        <li><a href="/profile">Perfil</a></li>
                        <li><a href="/carrinho">Carrinho</a></li>
                    </ul>
                    
                </nav>
            </div>
            <h1>Catálogo de Produtos</h1>
            <FilterBar filters={filters} onFilterChange={handleFilterChange} />
            <ProductCatalog products={products} filters={filters} />
        </div>
    );
}

export default AppCatalogSearch;