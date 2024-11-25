import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/auth')
      .then(response => {
        console.log('Dados recebidos:', response.data); // Log para depurar
        setUserData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar usuários:', error);
        setError('Não foi possível carregar os usuários.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando Usuários...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className='navbar-container'>
        <nav className='navbar'>
            <a href="/inicio">BEM-VINDO</a>
            <ul className="navbar-menu">
                <li className='navbar-item'><Link to="/profile">Perfil</Link></li>
                <li className='navbar-item'><Link to="/carrinho">Carrinho</Link></li>
                <li className='navbar-item'><Link to="/catalogo">menu</Link></li>
            </ul>
        </nav>
      </div>
      <div className='panel'>
        <h1>Painel de Administração</h1>
        <h2>Gerenciar Usuários</h2>
        {userData && userData.length > 0 ? (
          userData.map(user => (
            <div key={user.id}>
              <h3>{user.username}</h3>
              <p>{user.email}</p>
              <button onClick={() => console.log('Deletar', user.id)}>Deletar</button>
              <button onClick={() => console.log('Editar', user)}>Editar</button>
            </div>
          ))
        ) : (
          <p>Nenhum usuário encontrado.</p>
        )}
        <button onClick={() => console.log('Adicionar usuário')}>Adicionar Usuários</button>
      </div>
    </>
  );
};

export default Admin;
