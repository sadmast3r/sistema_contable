import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import sequelize, { testConnection } from './config/database';
import './models/associations'; // Importar asociaciones

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());

// Probar y sincronizar base de datos
const initializeDatabase = async () => {
  try {
    await testConnection();
    await sequelize.sync({ force: false }); // force: false para no borrar datos existentes
    console.log('Modelos sincronizados con la base de datos');
  } catch (error) {
    console.error('Error al sincronizar modelos:', error);
  }
};

initializeDatabase();

app.get('/', (req, res) => {
  res.send('API del Conjunto Residencial');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});