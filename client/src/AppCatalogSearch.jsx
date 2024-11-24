import React, { useState } from 'react';
import ProductCatalog from './components/catalog-search/ProductCatalog';
import FilterBar from './components/catalog-search/FilterBar';
import productsData from './data/product';

function AppCatalogSearch() {
    const [products, setProducts] = useState(productsData);
    const [filters, setFilters] = useState({
        search: '',
        category: 'Todos',
        priceRange: [0, 100000],
        inStock: false,
    });

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    return (
        <div>
            <div className='navbar-container'>
                <nav className='navbar'>
                    <a href="/inicio">BEM-VINDO</a>
                    <ul className="navbar-menu">
                        <li className="navbar-item"><a href="/profile">Perfil</a></li>
                        <li className="navbar-item"><a href="/carrinho">Carrinho</a></li>
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