import React from 'react';

import tendaImg from '../../assets/tenda.png';//TendaImg variável que recebe a imagem.
import logoImg from '../../assets/bar.png';
import { Link } from 'react-router-dom';//Link facilita o auto carregamento
import{ FiLogIn} from 'react-icons/fi';//Importando ícone de login.
import './styles.css';//Importando o Css

export default function Login(){
    return(
        <div className="login-container">
            <section className="form">
            <img src={logoImg} alt="logo" />
            
            <form>
            <h1> Faça o seu Login</h1>
            <input placeholder="Sua ID"/>
            <input placeholder="Sua senha"/>
            <button className="button" type="submit">Entrar</button>
            
            <Link className="back-link" to="/register">{/*Chamando o estilo da class back-link*/}
                <FiLogIn size={16} color="#E02041"/>
                Não tenho cadastro
            </Link>
            </form>
            </section>

            <img src={tendaImg} alt="Tenda"/>{/*Dentro de chaves a variável */}
        </div>
    )
}