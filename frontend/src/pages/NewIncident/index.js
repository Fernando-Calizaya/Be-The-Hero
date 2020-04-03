import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import logoImg from '../../assets/logo.svg'
import './styles.css'

export default function NewIncident() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    const history = useHistory( ) // navegção entre rotas
    const ongId = localStorage.getItem('ongId') // atribuir  "ongId" que esta no "localStorage" logada no navegardor 

    async function handleNewIncident(e) { // este função também criamos para saber a função que o user irá usar.
        e.preventDefault() // previne o comportamento padrã do formulario (line 55)

        const data = { // crinado um obejto "data" para os campos/ atributos dos novos casos/incidentes
            title,
            description,
            value,
        }

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })
            // Após cadatrar novo incidente acima na backend ou API, vamos:...
            history.push('/profile') // retorar para rota do profile (todos os casos cadastrados) assim que cadastrar o novo caso

        } catch (err) {
            alert('[ERRO] Erro ao cadastrar novo caso.')
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile"> {/* voltar para a rota logon, que significa localhost:33333 */}
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input
                        placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}