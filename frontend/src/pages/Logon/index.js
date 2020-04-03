import React, { useState } from 'react'
import { Link , useHistory } from 'react-router-dom' // aqui vamos importar um componenet LINK, responsavel por Não recarregar a page toda assim que acessa uma nova tota/pagina e sim só REDIRECIONA ficando mais rápido as navegações.
import { FiLogIn } from 'react-icons/fi' // inportando do pacote o icone "Log in" - link: link: https://feathericons.com/

import api from '../../services/api'
import'./styles.css' // importanto arquivo de .css
import logoImg from '../../assets/logo.svg' //importando a logo
import heroesImg from '../../assets/heroes.png' //importanto imagem


export default function Logon() {
    
    const history = useHistory() // permite a navegação, sem usar o "Link" do react-router-dom 
    const [id, setId] = useState('') // uso de estado

    async function handleLogin(e) {
        e.preventDefault()

        try {
            const response = await api.post('sessions', { id }) // aqui estamos validando o ID da ONG já cadastrado 
            //Precisamos do ID e NAME da ONG disponiveis em nossa aplicação (este será salvo no Storage do Navegador!!)
            localStorage.setItem('ongId', id ) // serve para identificar qual id e name está logada no navegador (após logar com id ver no inpecionador "aplicação" -> localStorage )
            localStorage.setItem('ongName', response.data.name) //  serve para identificar qual id e name está logada no navegador (após logar com id ver no inpecionador "aplicação" -> localStorage )

            history.push('/profile') // está redireciona para rota profile  (lista dos casos da ONG ), após acionar este bloco de validação

        } catch (err) {  
            alert('[ERRO] Seu ID está incorreto, verique por favor.');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/> {/* usando chaves para informar o uso de java script */}

                <form onSubmit={handleLogin} >
                    <h1>Faça seu logon</h1>

                    <input
                        placeholder=" Seu ID "
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to ="/register"> {/* está informando que este link esta direcionando para rota register */}
                        <FiLogIn size={16} color="#E02041" /> {/* adicionando imagem Log In do pacote */}
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    )
}