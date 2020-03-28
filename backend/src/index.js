
const express = require('express') //importa os dados do "framework express". --> pacote/framework ('express')
const cors = require('cors') // importando os dados do pacote "cors"
const routes = require('./routes') //importando os dados (routes) do arquivo ". -->  arquivo ('./routes')

const app = express()

app.use(cors({
    /*origin: 'http:// '   com opção chamada "origins:" endereço que será usados as aplicações front end, assim todos acessam este   */
})) 

//usamos p/ idicar que os dados da requição do cliente (localhost:3333 - Insomnia)
//será considerado como objeto JSON para ser entendido ao backend - servidor com front
app.use(express.json())
app.use(routes)

app.listen(3333) // porta usada quando for NODE // para react: (3000)

//OBS: Para executar estes comandos no navegador, entrar em terminal (ctrl + '/j)
//em seguida ainda no diretório "backend" executar: > node index.js
// com vc terá que abrir uma aba no chrome e inserir URL: http://localhost:3333
//para sair do servidor local host: crtl + c
