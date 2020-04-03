import React, { useState } from 'react' // aqui vamos usar o "Estado" para importar os dados dos "inputs" do front para cada "estado" API
import { Link, useHistory } from 'react-router-dom' // useHistory , função permite a navegação entre as rotas sem o Link e Ancora (a)
import { FiArrowLeft } from  'react-icons/fi'

import api from '../../services/api'
import './styles.css'
import logoImg from '../../assets/logo.svg'

{/*  */}
export default function Register() {
    const [name, setName] = useState('')  //armazenando valor das "inputs" para cada um "estado"
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')

    const history = useHistory() // está função permite a navegação, sem usar o "Link" do react-router-dom
    
    async function handleRegister(e) { {/* este "e" parametro recebe o evento de "submit do fornulario" */} {/* AQUI SERÁ NOSSA API, CONECTAR FRONT/BACK */}
        e.preventDefault();     {/* Previne comportamento padrão do formulario ou seja não carregará a página toda, economiza tempo */}

        const data = ({ // aqui já tenho acesso todas as informações "exemplo: console.log"
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        
        try { // chamada do API (Aqui já faz o cadastro da ONG no Banco de Dados)
            const response = await api.post('ongs', data) // (api + metodo post + rota ONG + mostrar "data") //PODEMOS VER ESTÁ CHAMADA DA API NO CHROME NA ABA "NETWORK"
            alert(`Seu ID de acesso: ${response.data.id}`) // aqui solicitando o Id em especifico como alerta
            history.push('/') // espurra para página inicial de login, após executar este bloco de validação

        } catch(err) {
            alert('[ERRO] Erro no seu cadastro, tente novamente!')
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to ="/"> {/* voltar para a rota logon, que significa localhost:33333 */}
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para o Logon
                    </Link>
                </section>

                <form onSubmit={handleRegister}> {/* quando executar o formaulario será acionado a função "handleRegister" */}
                    <input
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)} //ARROW FANCTION: aqui está o parametro "e" con corpo da função
                        />
                        
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />

                    <input
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                        />
                    
                    <div className="input-group">
                        <input
                        placeholder="Cidade"
                        value={city}
                        onChange={e => setCity(e.target.value)} 
                        />

                        <input
                        placeholder="UF"
                        style = {{ width: 80 }}
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                        /> 
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}