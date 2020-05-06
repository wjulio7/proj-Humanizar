import React,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiPower, FiTrash2} from "react-icons/fi";

import api from '../../services/api'
import './styles.css'

export default function Profile() {

    const userCpf = localStorage.getItem('userCpf')
    const userName = localStorage.getItem('userName')

    const history = useHistory()

    function handleLogout() {
        localStorage.clear()
        history.push('/')
    }

    return (
        <div >
            <header>
                <span>Bem vindo {userName}</span>
                <Link className="button" to="/newproduct"> Cadastrar Produto</Link>
            </header>
            <button onClick={handleLogout} type="button">
                <FiPower  size={18} color="#E02041"/>
            </button>


        </div>
    )
}