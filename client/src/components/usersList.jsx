import React, { useState, useEffect } from 'react';
import api from '../service/index';

const ProductList = ({ onEdit, onDelete }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await api.get('/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
    }
  };

  return (
    <div className='containerEdit'>
      <h2>Carrinho de Compras</h2>
      <ul >
        {products.map(product => (
          <li className='listp'  key={product.id}>
            {product.name} | {product.description} | {product.price} | {product.quantity}
            <button className='btneditandelete' onClick={() => onEdit(product)}>Editar</button>
            <button className='btneditandelete' onClick={() => onDelete(product.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;