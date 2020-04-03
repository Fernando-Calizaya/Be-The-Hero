import React, { useState, useEffect } from 'react' // "useEffect(() => {}, [])" dispara uma função em um determinado momento do componente, como quando é mostrado em tela. 
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'
import logoImg from '../../assets/logo.svg'


export default function Profile() { // Entidade Lista de incidentes/ casos correspondente com a ONG logada.
    const [incidents, setIncidents] = useState([]) // variavel com valor fixo e o outro como variavel e substituta da mesma.

    const history = useHistory()

    const ongId = localStorage.getItem('ongId') // aqui estamos pegando o id da ONG logada e armazenada no navegador...
    const ongName = localStorage.getItem('ongName') // aqui estamos pegando o nome da ONG logada e armazenada no navegador por meio da "localStorage"
    // Podemos ver este camando no "index.js" das pasta Logon
    useEffect(() => { //usaremos para disparar dados dos casos do back para o front
        api.get('profile', {
            headers: {
                Authorization: ongId
            }
        }).then(response => { //para guardar a "resposta" usamos sempre:
            setIncidents(response.data) // ESTADO responde com os dados dos incidents ou casos
        })
    }, [ongId]) // caso deixamos este vetor vazio, só executará esta função uma vez // mas informe "ongId" como dependencia

    async function handleDeleteIncident(id) {   // aqui apagará o id que está como parametro na função "handleDeleteIncident"
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            })
            // após excluir o caso por meio do bloco acima fazer este bloco (apos exclusão do caso (id) deixar somente os outros casos)
            setIncidents(incidents.filter(incident => incident.id !== id)) // Este realizará uma varredura (filtro) no vetor de "incidentes" (linha 11) 
                                                                        // e somente retornar os incidentes em que o ID por diferente do id que fiz a exclusão (id como paramentro - linha 26) 
        } catch (err) {
            alert('[ERRO] Erro ao excluir caso, tentar novamente.')
        }
    }

    function handleLogout() { //após esta função ser acioanda, irá limpar o localstorage e sairá da rota "profile" para "logon"
        localStorage.clear() // reponsavel por limpar todo o localstorage do navegador, ou seja desloga da ONG que está logada com seu Id. (verifica Inpecionar en Google aba "aplication" -> local Storage)

        history.push('/') // levará para rota inicial "logon"
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vinda, {ongName}</span> {/* na parte do cabeçalho apresentamos o nome da ONG como objeto {ongName} */}

                <Link className="button" to="/incidents/new">Cadastrar novo caso </Link>
                <button onClick={handleLogout} type="button"> 
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul> {/* "MAP" percorrer cada um deles para retornar alguma coisa */}
                {incidents.map(incident => ( // retornar cada um dos incidentes em formato JSX. por isso ()
                    <li key={incident.id}>   {/* Na lista devemos colocar uma chave única para identificar o incidente/caso */}
                        <strong>CASO:</strong>
                        <p>{incident.title}</p> {/* Ver no imsomnia seu atributo em GET -> Profile */}

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>  {/* international/formato do numero(idioma atual/ add objeto {estilo "moeda", R$ moeda em real}) */}
                        <p>{ Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value) }</p> {/* no final definir valor do caso */}
                                    {/* Ao fazer arrow function criei uma função que será  pasado para o evento on click */}
                        <button  onClick={() => handleDeleteIncident(incident.id)} type="button"> 
                            <FiTrash2 size={20} color="#a8a8b3" />  {/* Botão de excluir */}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}