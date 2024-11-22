import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/menu')
      .then(response => {
        setMenuItems(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar o menu!', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/menu/${id}`)
      .then(() => {
        setMenuItems(menuItems.filter(item => item.id !== id));
      })
      .catch(error => {
        console.error('Erro ao deletar item do menu!', error);
      });
  };

  return (

    <>
    <div className='panel'>
      <h1>Painel de Administração</h1>
      <h2>Gerenciar Usuários</h2>
      {menuItems.length > 0 ? (
        menuItems.map(item => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <button onClick={() => handleDelete(item.id)}>Deletar</button>
            <button>Editar</button>
          </div>
        ))
      ) : (
        <p>Carregando Usuários...</p>
      )}
      <button>Adicionar Usuários</button>
    </div>
    </>
  );
};

export default Admin;
