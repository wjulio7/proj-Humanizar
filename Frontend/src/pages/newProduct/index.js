import React,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom'

import api from '../../services/api'

export default function NewProduct() {
    const[name, setName] = useState('')
    const[description, setDescription] = useState('')
    const[value, setProduct] = useState('')

    const usercpf = localStorage.getItem('userCpf')
    const history = useHistory()

    async function handleNewProduct(e) {
        e.preventDefault()

        const data = {
            name,
            description,
            value
        };
        try{
            await api.post('produtoController', data,{
                headers:{
                    Authorization: usercpf
                },
            })
            history.push('/profile')
            console.log(usercpf)
        }catch (err) {
            alert('Erro ao cadastrar, tente novamente')
            console.log(err)
        }
    }

    return(
        <div>
            <span>Cadastrar Produto</span>
            <form onSubmit={handleNewProduct}>
                <input placeholder="Nome do Produto"
                       value={name}
                       onChange={e=> setName(e.target.value)}
                />
                <input placeholder="Descrição do Produto"
                       value={description}
                       onChange={e=> setDescription(e.target.value)}
                />
                <input placeholder="Valor"
                       value={value}
                       onChange={e=> setProduct(e.target.value)}
                />
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    )
}
