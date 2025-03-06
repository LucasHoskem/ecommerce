// src/pages/Register.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', {
        username,
        email,
        password,
        role
      });
      navigate('/login'); // Redirecionar para a página de login após o cadastro
    } catch (error) {
      setError(error.response?.data?.error || 'Erro ao cadastrar');
    }
  };

  return (
    <>
      <div className='navbar-container'>
        <nav className='navbar'>
          <a href="/" className='navbar-logo'>BEM-VINDO</a>
          <ul className="navbar-menu">
            <li className='navbar-item'>
              <a href="/login" className='navbar-link'>Login</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className='register-container'>
        <form className='register-form' onSubmit={handleRegister}>
          <h1 className='register-title'>Cadastrar</h1>
          <div className='form-group'>
            <label htmlFor="username" className='form-label'>Nome de Usuário:</label>
            <input
              type="text"
              id="username"
              className='form-input'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor="email" className='form-label'>Email:</label>
            <input
              type="email"
              id="email"
              className='form-input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor="password" className='form-label'>Senha:</label>
            <input
              type="password"
              id="password"
              className='form-input'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className='form-error'>{error}</p>}
          <button className='btn-register' type="submit">Cadastrar</button>
        </form>
      </div>

    </>
  );
};

export default Register;
