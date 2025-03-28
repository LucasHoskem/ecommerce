import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const HomeLogged = () => {
  const navigate = useNavigate();
  const handleBuy = (product) => {
    // Exemplo: você pode enviar o produto para o estado do carrinho aqui, se necessário
    console.log(`Adicionando ao carrinho: ${product.name}`);
    navigate('/carrinho'); // Redireciona para a página do carrinho
  }
  const estiloTabela = {
    width: '80%', // A tabela ocupará 80% da largura da tela
    margin: '0 auto', // Centraliza a tabela na tela
    borderCollapse: 'collapse', // Estilo de borda
  };

  const estiloCelula = {
    padding: '8px',
    border: '1px solid black',
    textAlign: 'center',
  };


  const products = [
  ];

  return (
    <>
      <div className='navbar-container'>
        <nav className='navbar'>
            <a href="/inicio">BEM-VINDO</a>
            <ul className="navbar-menu">
                <li className='navbar-item'><Link to="/profile">Perfil</Link></li>
            </ul>
        </nav>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <table style={estiloTabela}>
        <thead>
          <tr>
            <th style={estiloCelula}>Nome</th>
            <th style={estiloCelula}>Idade</th>
            <th style={estiloCelula}>Cidade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={estiloCelula}>João</td>
            <td style={estiloCelula}>25</td>
            <td style={estiloCelula}>São Paulo</td>
          </tr>
          <tr>
            <td style={estiloCelula}>Maria</td>
            <td style={estiloCelula}>30</td>
            <td style={estiloCelula}>Rio de Janeiro</td>
          </tr>
          <tr>
            <td style={estiloCelula}>Pedro</td>
            <td style={estiloCelula}>22</td>
            <td style={estiloCelula}>Belo Horizonte</td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
};

export default HomeLogged;
