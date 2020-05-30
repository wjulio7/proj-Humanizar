import React, { useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiPower, FiTrash2} from "react-icons/fi";

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
        <div>
            <form onSubmit={handlerecSenha}>
            <h1>Recuperação de senha</h1>
            <input placeholder="Cpf"
                    type="number"
                    value={cpf} // função reduzida
                    onChange={e=> setCpf(e.target.value.trim())}/>
            <input placeholder="Rg"
                type="number"
                    value={rg} // função reduzida
                    onChange={e=> setRg(e.target.value.trim())}
                    maxLength="7"/>
            <input placeholder="Digite sua Senha" type="password"
                    value={password}
                    onChange={e=> setPassword(e.target.value.trim())}/>
            <button className="button" type="submit">Recuperar</button>
            </form>
        </div>
        )
}