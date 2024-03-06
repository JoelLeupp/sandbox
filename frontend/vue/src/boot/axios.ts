import axios from 'axios';

console.log(`Environement: ${CFG.ENV}`);

const api = axios.create({
  baseURL: CFG.API_BASE_URL,
});

export { api };
