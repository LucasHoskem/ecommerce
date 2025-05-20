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
        <div className="filter-container">
  <input
    type="text"
    name="search"
    placeholder="Buscar produtos"
    value={filters.search}
    onChange={handleInputChange}
    className="filter-search"
  />
  <select
    name="category"
    value={filters.category}
    onChange={handleInputChange}
    className="filter-select"
  >
    <option value="Todos">Todos</option>
    <option value="Smartphone">Smartphones</option>
    <option value="Acessórios">Acessórios</option>
    <option value="Computador">Computadores</option>
    <option value="Periféricos">Periféricos</option>
    <option value="Caixa de som">Caixa de som</option>
    <option value="Drone">Drones</option>
    <option value="VideoGame">Video Games</option>
  </select>
  <input
    type="range"
    name="priceRange"
    min="0"
    max="4500"
    value={filters.priceRange[1]}
    onChange={(e) =>
      onFilterChange({ ...filters, priceRange: [0, Number(e.target.value)] })
    }
    className="filter-range"
  />
  <label className="filter-checkbox-label">
    <input
      type="checkbox"
      name="inStock"
      checked={filters.inStock}
      onChange={handleInputChange}
      className="filter-checkbox"
    />
    Somente em Estoque
  </label>
</div>

    );
}

export default FilterBar;