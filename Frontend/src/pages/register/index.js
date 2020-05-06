import React,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom'

import api from '../../services/api'

export default function Register() {
    const[name, setName] = useState('')
    const[password, setPassword] = useState('')
    const[cpf, setCpf] = useState('')
    const[rg, setRg] = useState('')
    const[email, setEmail] = useState('')
    const[whatsapp, setWhatsapp] = useState('')
    const[city, setCity] = useState('')
    const[uf, setUf] = useState('')

    const history = useHistory()

    async function handleRegistrer(e) {
        e.preventDefault()//previnindo o comportamento do load do submit

        const data = {
            name,
            password,
            cpf,
            rg,
            email,
            whatsapp,
            city,
            uf,
        };
        try{//enviando dados, o response e a resposta que foi cadastrado
            const response = await api.post('cadastroVendedorController',data)
            alert(`Bem Vindo ${response.data.name}`)
            history.push('/')
        }catch (err) {
            alert('Erro no cadastro, tente novamente')
        }
    }

    return(
        <div>
            <form onSubmit={handleRegistrer}>
                <input placeholder="Nome"
                       value={name} // função reduzida
                       onChange={e=> setName(e.target.value)}//e é o evento de mudança
                    //o target e o valor do input,
                    //o e é o parametro da função
                />
                <input placeholder="Senha"
                       value={password} // função reduzida
                       onChange={e=> setPassword(e.target.value)}
                />
                <input placeholder="Cpf"
                       value={cpf} // função reduzida
                       onChange={e=> setCpf(e.target.value)}
                />
                <input placeholder="Rg"
                       value={rg} // função reduzida
                       onChange={e=> setRg(e.target.value)}
                />
                <input type="email" placeholder="E-mail"
                       value={email}
                       onChange={e=> setEmail(e.target.value)}/>
                <input placeholder="WhatsApp"
                       value={whatsapp}
                       onChange={e=> setWhatsapp(e.target.value)}/>

                <div className="input-group">
                    <input placeholder="Cidade"
                           value={city}
                           onChange={e=> setCity(e.target.value)}/>
                    <input placeholder="UF" style={{width:80}}
                           value={uf}
                           onChange={e=> setUf(e.target.value)}/>
                </div>

                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    )
}
