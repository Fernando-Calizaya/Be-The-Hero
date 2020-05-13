import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.0.104:3333' // usar IP que aparece no local host da máquina e a PORTA do backend do node: 3333
});

export default api;