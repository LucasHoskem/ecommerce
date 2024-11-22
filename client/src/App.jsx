import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HomeLogged from './pages/HomeLogged';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Register from './pages/Register'; // Importando o componente Register
import PrivateRoute from './components/PrivateRoute';
import AppCarrinho from './AppCarrinho';
import AppCatalogSearch from './AppCatalogSearch';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />  {/* Definindo a rota de registro */}

      {/* Rotas protegidas */}
      <Route element={<PrivateRoute roles={['user', 'admin']} />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/inicio" element={<HomeLogged />} />
        <Route path="/carrinho" element={<AppCarrinho /> } />
        <Route path="/catalogo" element={<AppCatalogSearch />} />
      </Route>

      <Route element={<PrivateRoute roles={['admin']} />}>
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  );
};

export default App;
