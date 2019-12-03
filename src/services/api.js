import axios from 'axios';
const api = axios.create({ baseURL: 'https://backenddaw.herokuapp.com/api'});

export default api;