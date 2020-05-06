import React,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom'

import api from '../../services/api'
import './styles.css'
export default function Login() {
    const [cpf, setCpf] = useState('')
    const [password, setpassword] = useState('')
    const history = useHistory()

    async function handleLogin(e) {
        e.preventDefault()

        try{
            const response = await api.post('loginVendedorController', {cpf, password})
            //armazenando o id na sessão
            localStorage.setItem('cpf',cpf)
            localStorage.setItem('userName', response.data.name)
            history.push('/profile')
        }catch (err) {
            alert('Falha no login, tente novamente.')
        }
    }

    return(
        <div>
            <form onSubmit={handleLogin}>
                <h1>Faça seu logon</h1>
                <input placeholder="Digite seu cpf"
                       value={cpf}
                       onChange={e=> setCpf(e.target.value)}/>
                <input placeholder="Digite sua Senha"
                       value={password}
                       onChange={e=> setpassword(e.target.value)}/>

                <button className="button" type="submit">Entrar</button>

            </form>
        </div>
    )
}
