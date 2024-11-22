import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      const { token, role } = response.data;
      
      // Armazenar o token no localStorage ou sessionStorage
      localStorage.setItem('token', token);

      // Redirecionar o usuário dependendo do papel
      if (role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/inicio');
      }
    } catch (error) {
      console.error('Erro ao fazer login', error);
    }
  };

  return (  
    <>

      

      <nav className='navbar'>
        <a href="/" className='navbar-logo'>BEM-VINDO</a>
      </nav>
      <div className='login-container'>
        <form onSubmit={handleLogin} className='login-form'>
          <h3 className='login-title'>Login</h3>
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
          <button className='btn-login' type="submit">Entrar</button>
          <ul className="login-links">
            <li className='login-link-item'>
              <a href="/register" className='login-link'>Sign-in</a>
            </li>
          </ul>
        </form>
      </div>  
    </>
  );
};

export default Login;

