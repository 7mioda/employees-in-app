import axios from 'axios';

const token = sessionStorage.getItem('token');
const api = axios.create({
  baseURL: 'http://localhost:5000/',
  headers: { Authorization: token },
});

export default api;
