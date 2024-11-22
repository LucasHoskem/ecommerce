import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/auth',
  baseURL: 'http://localhost:5000/api/menu',
  baseURL: 'http://localhost:5000/api/orders'
});

export default api;
