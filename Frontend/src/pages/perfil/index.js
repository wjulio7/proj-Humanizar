import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';/* importar ícone*/


import api from '../../services/api';
import logoImg from '../../assets/bar.png';
import './styles.css';

export default function Perfil() {

    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Barganha"/>
                <span>Perfil</span> {/* Spam da página*/}

                <Link className="button" to="incidents/new"> Cadastrar novo Produto</Link>{/*Leva para outra rota*/}
                <button type="button">
                <FiPower size={18}  color="#E02041" />
                </button>
            </header>
            <h1>Produtos cadastrados</h1>
            <ul> 
                <li>
                    <strong>NOME:</strong>
                    <p>Nome:</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição do produto:</p>
                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#152cad" />
                    </button>
                </li>
                <li>
                    <strong>NOME:</strong>
                    <p>Nome:</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição do produto:</p>
                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#152cad" />
                    </button>
                </li>
                <li>
                    <strong>NOME:</strong>
                    <p>Nome:</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição do produto:</p>
                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#152cad" />
                    </button>
                </li>
                <li>
                    <strong>NOME:</strong>
                    <p>Nome:</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição do produto:</p>
                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#152cad" />
                    </button>
                </li>
            </ul>
            
        </div>





    )
}
