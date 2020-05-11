import React from 'react';
import{Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/bar.png';

export default function NovoProduto(){
    return (
        <div className="new-incident-container">
            <div className="content">
        <section>
        <img src={logoImg} alt="Barganhar" />
        <h1>Cadastrar novo produto</h1>
        <p>Cadastre aqui um produto que deseje oferecer.</p>

        <Link className="back-link" to="/perfil">{/*Chamando o estilo da class back-link*/}
                <FiArrowLeft size={16} color="#E02041"/>
                Voltar para página de cadastro de produtos.
            </Link>
        </section>
        <form>
            <input placeholder= "Produto" />
            <textarea placeholder="Descrição" />

            <input placeholder="Valor R$: "/>
            
            <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
     </div>
    )
}