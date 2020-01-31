import axios from 'axios';

//const url = 'http://192.168.0.24:3333'
const url = 'http://10.60.0.63:3333'

const api = axios.create({
    baseURL: url
});

export default api;