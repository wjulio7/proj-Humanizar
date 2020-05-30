import React, { useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';//importa o botão de voltar

import logoImg from '../../assets/bar.png';
import api from '../../services/api';
import './styles.css';

export default function RecSenha() {
    const[cpf, setCpf] = useState(null)
    const[rg, setRg] = useState(null)
    const[password, setPassword] = useState(null)
    const history = useHistory()

    async function handlerecSenha(e) {
        e.preventDefault()
        try {
            const data = {
                cpf,
                rg,
                password
            };
            api.post('alterarsenhacontroller', data)
            history.push('/')
        } catch (error) {
            console.log(error)
        }
      
    }

    return (
        <html>
        <div className="register-container">
            <div className="content">
            <section>
            <img src={logoImg} alt="Barganhar" />
            <h1>Alterar Senha</h1>
            <p>Use seu CPF e RG para alterar sua senha.</p>
            <Link className="back-link" to="/">{/*Chamando o estilo da class back-link*/}
                <FiArrowLeft size={16} color="#E02041"/>
                Voltar para página inicial
            </Link>
            </section>
            <form onSubmit={handlerecSenha}>
            <input placeholder="Cpf"
                    type="number"
                    value={cpf} // função reduzida
                    onChange={e=> setCpf(e.target.value.trim())}/>
            <input placeholder="Rg"
                type="number"
                    value={rg} // função reduzida
                    onChange={e=> setRg(e.target.value.trim())}
                    maxLength="7"/>
            <input placeholder="Digite uma nova Senha" type="password"
                    value={password}
                    onChange={e=> setPassword(e.target.value.trim())}
                    minLength="3"
                    maxLength="25"
                    />
            <button className="button" type="submit">Alterar senha</button>
            </form>
        </div>
        </div>
        <footer className="Desenvolvedores">
        Desenvolvido por : Alexandro,Breno, Ronni, Túlius Alves e Wolgran Julio
        </footer>
        </html>
        )
}