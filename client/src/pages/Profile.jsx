import React, { useState, useEffect } from 'react';
import axios from 'axios';


const fetchUserProfile = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/auth/me', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,  // Passando o token nas requisições
      },
    });

    console.log('Dados do usuário:', response.data);
  } catch (error) {
    console.error('Erro ao buscar dados do usuário:', error);
  }
};

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulando a busca de dados do usuário
    const fetchUser = async () => {
      const response = await axios.get('http://localhost:5000/api/auth/me', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      });
      setUser(response.data);
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h1>Perfil do Usuário</h1>
      {user ? (
        <div>
          <p>Nome: {user.username}</p>
          <p>Email: {user.email}</p>
          <button>Editar Perfil</button>
        </div>
      ) : (
        <p>Carregando dados do usuário...</p>
      )}
    </div>
  );
};

export default Profile;
