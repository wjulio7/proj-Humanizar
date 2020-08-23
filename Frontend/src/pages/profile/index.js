import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiPower, FiTrash2} from "react-icons/fi";

import {storage} from '../../firebase/index'
import logoImg from '../../assets/bar.png';
import api from '../../services/api';
import './styles.css';

export default function Profile() {

    const userCpf = localStorage.getItem('userCpf')
    const userName = localStorage.getItem('userName')
    const [userUrl, setUserurl] = useState(localStorage.getItem('userurl'));
    const [actualNameProfilePicture, setactualNameProfilePicture] = useState(localStorage.getItem('actualNameProfilePicture'));

    const [produtos, setProdutos] = useState([]);

    const [image, setImage] = useState("");

    const history = useHistory()
    const storageRef = storage.ref();

    useEffect(() => {
        api.get('produtoslistar',{
            headers:{
                Authorization: userCpf,
            }
        }).then(response => {
            setProdutos(response.data);
        })
    }, [userCpf]);//vazio executa uma unica vez

    function handleDeleteOldPicture(){
        const desertRef = storageRef.child(`images/${actualNameProfilePicture}`);
        desertRef.delete().then(function() {
            // File deleted successfully
        }).catch(function(error) {
            // Uh-oh, an error occurred!
        })
    }

    async function handleDeleteIncident(id, imgProdName){
        try{
            const desertRef = storageRef.child(`images/${imgProdName}`);
            desertRef.delete().then(function() {
                // File deleted successfully
            }).catch(function(error) {
                // Uh-oh, an error occurred!
            })
            await api.delete(`/produtos/${id}`,{
                headers:{
                    Authorization: userCpf,
                }
            })
            //pega todos os incidents e filtra, mostrando os ids que sao diferentes dos que foram deletados
            //fazendo sumir para o usuario os incidents deletados
            setProdutos(produtos.filter(produto => produto.id !== id));
        }catch (err) {
            alert('Erro ao deletar caso, tente novamente.')
        }
    }
    function handleLogout() {
        localStorage.clear()
        history.push('/')
    }

//pega mudanças na imagem selecionada
    const handleChange = e => {
        if (e.target.files[0]){
            setImage(e.target.files[0]);
        }
    }
    async function handleNewProfilePicture(e) {
        handleDeleteOldPicture()
        const imgVendName = Math.random()+image.name
        const UploadTask = storage.ref(`images/${imgVendName}`).put(image)//put faz o upload
        UploadTask.on("state_changed",
            snapshot => {},//this basicaly indicate the current progress of file upload
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(imgVendName)
                    .getDownloadURL()//the url of thefile that we uploaded to firebase
                    .then(url =>{
                        console.log(url)
                        localStorage.setItem('userurl', url)
                        localStorage.setItem('actualNameProfilePicture', imgVendName)
                        setactualNameProfilePicture(imgVendName)
                        setUserurl(url)
                        const data = {
                            url,                            
                            imgVendName
                        };
                        api.post('vendedorinfoalter', data,{
                            headers: {
                                Authorization: userCpf
                            }
                        })
                        history.push('/profile')
                    })
            })
    }
    return (
        <html>
        <div className="profile-container">
            <header>
                <img src={userUrl} width={100} height={100}/>
                <span>Bem vindo <p><h4>{userName}</h4></p> </span>
                <Link className="button" to="/newproduct">Cadastrar Produto</Link>
            <button className="buttonPower"> <Link to="/"><FiPower size={18}  color="#003d74"/> </Link></button>  
            </header>
            <section className="rec">
            <input  type="file" className="foto" accept="image/*"  onChange={handleChange}/>
            <button className="alterar" type="submit" onClick={handleNewProfilePicture}>Alterar</button>
            </section>
            
            <ul>
                {produtos.map(produto => (
                    <li key={produto.id}>
                        <strong>{produto.nameProd} </strong>
                        <img src={produto.urlImgProd}/>
                        
                        <p>{produto.title}</p>
                        <strong> Categoria</strong>
                        <p>{produto.categoriaProd}</p>
                        <strong>Valor</strong>
                        <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(produto.value)}</p>
                        <strong>Contato do Vendedor</strong>
                        <p>Email: {produto.email}</p>
                        <p>Whatsapp: {produto.whatsapp}</p>
                        <p>Cidade: {produto.city}</p>
                        <p>Uf: {produto.uf}</p>
                        
                        <strong>Descrição:</strong>
                        <textarea>{produto.description}</textarea>
                        
                        <button onClick={() => handleDeleteIncident(produto.id, produto.imgProdName) } type="button">
                            <FiTrash2 size={20} color="#003d74"/>
                        </button>
                    </li>
                ))}
            </ul>
            </div>
            </html>
    )
}