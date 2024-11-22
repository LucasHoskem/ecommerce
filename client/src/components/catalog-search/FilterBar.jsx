import React from 'react';

function FilterBar({ filters, onFilterChange }) {
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        onFilterChange({
            ...filters,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    return (
        <div>
            <input
                type="text"
                name="search"
                placeholder="Buscar produtos"
                value={filters.search}
                onChange={handleInputChange}
            />
            <select name="category" value={filters.category} onChange={handleInputChange}>
                <option value="Todos">Todos</option>
                <option value="Eletrônicos">Eletrônicos</option>
                <option value="Eletrodomésticos">Eletrodomésticos</option>
                <option value="Roupas">Roupas</option>
                {/* Adicione outras categorias conforme necessário */}
            </select>
            <input
                type="range"
                name="priceRange"
                min="0"
                max="100"
                value={filters.priceRange[1]}
                onChange={(e) =>
                    onFilterChange({ ...filters, priceRange: [0, Number(e.target.value)] })
                }
            />
            <label>
                <input
                    type="checkbox"
                    name="inStock"
                    checked={filters.inStock}
                    onChange={handleInputChange}
                />
                Somente em Estoque
            </label>
        </div>
    );
}

export default FilterBar;