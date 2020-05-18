import React,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import tendaImg from '../../assets/prop.png';//TendaImg variável que recebe a imagem.
import logoImg from '../../assets/bar.png';
import{ FiLogIn} from 'react-icons/fi';//Importando ícone de login.
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
            localStorage.setItem('userCpf',cpf)
            localStorage.setItem('userName', response.data.nameVend)
            localStorage.setItem('userurl', response.data.urlImgVend)
            localStorage.setItem('actualNameProfilePicture', response.data.imgVendName)

            history.push('/profile')
        }catch (err) {
            alert('Falha no login, tente novamente.')
        }
    }

    return(
        <html>
            <meta name="viewport" content="width=device-width"></meta>
        <div className="login-container">
            
            <section className="form">
            <img src={logoImg} alt="logo" />
            <form onSubmit={handleLogin}>
                <h1>Faça seu login</h1>
                <input placeholder="Digite seu cpf"
                       value={cpf}
                       onChange={e=> setCpf(e.target.value)}/>
                <input placeholder="Digite sua Senha" type="password"
                       value={password}
                       onChange={e=> setpassword(e.target.value)}/>

                <button className="button" type="submit">Entrar</button>
                <Link className="back-link" to="/register">{/*Chamando o estilo da class back-link*/}
                <FiLogIn size={16} color="#E02041"/>
                Não tenho cadastro
            </Link>
            </form>
            </section>
            <img src={tendaImg} alt="Tenda"/>{/*Dentro de chaves a variável */}
        </div>
        </html>
    )
}
