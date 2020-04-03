import axios from 'axios' // cliente http: responsavel das chamadas das APis do backend

const api = axios.create({
    baseURL: 'http://localhost:3333' // base da URL que irá ser mantida entre todas as chamadas (PADRÃO)
})

export default api // exportar este arquivo para ser importado em outros aquivos