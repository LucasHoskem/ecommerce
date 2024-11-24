import axios from 'axios';
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');  // Importe as rotas de autenticação

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Usar as rotas de autenticação
app.use('/api/auth', authRoutes);  // Agora a rota /me estará disponível

const api = axios.create({
  baseURL: 'http://localhost:5000/api/auth',
  baseURL: 'http://localhost:5000/api/menu',
  baseURL: 'http://localhost:5000/api/orders'
});

export default api;
