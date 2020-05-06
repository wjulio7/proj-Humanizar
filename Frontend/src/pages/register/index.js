import React from 'react';
import {Link} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';//importa o botão de voltar
import './styles.css';

import logoImg from '../../assets/bar.png'

export default function Register(){
    return(
        <div className="register-container">
            <div className="content">
        <section>
        <img src={logoImg} alt="Barganhar" />
        <h1>Cadastro</h1>
        <p>Realize aqui o seu cadastro como vendedor.</p>

        <Link className="back-link" to="/">{/*Chamando o estilo da class back-link*/}
                <FiArrowLeft size={16} color="#E02041"/>
                Não, tenho cadastro
            </Link>
        </section>
        <form>
            <input placeholder= "Nome do vendedor" />
            <input type="password" name="Senha" placeholder="Senha"/>
            <input type="password" name="Confirmar senha" placeholder=" Confirmar a Senha"/>
            <input type="email" placeholder="E-mail" />
            

            <div className="input-group">
            <input placeholder="Cpf"/>
            <input placeholder="Rg"/>
            <input placeholder="whatsapp"/>
            </div>

            <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
     </div>
    );
}