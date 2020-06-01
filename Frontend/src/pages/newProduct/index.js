import React,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {storage} from '../../firebase/index'
import logoImg from '../../assets/bar.png';
import {FiArrowLeft} from 'react-icons/fi';
import './styles.css';
import Select from 'react-select';

import api from '../../services/api'

export default function NewProduct() {

    const[nameProd, setnameProd] = useState(null)
    const[description, setDescription] = useState(null)
    const[value, setValue] = useState(null)
    const[categoriaProd, setCategoriaProd] = useState(null)
    //const [urlImgProd, seturlImgProd] = useState("")
    const [image, setImage] = useState(null);
    const usercpf = localStorage.getItem('userCpf')
    const history = useHistory()

    const options = [
        { value: 'Alimentos', label: 'Alimentos' },{ value: 'Eletrônicos', label: 'Eletrônicos' },
        { value: 'Informática', label: 'Informática' },{ value: 'Outros', label: 'Outros' },
        { value: 'Serviços', label: 'Serviços' },{ value: 'Utensílios', label: 'Utensílios' }
    ]
    function customTheme(theme){
        return{
          ...theme,
          colors:{
            ...theme.colors,
            primary25: 'Lightskyblue',
            primary:'Lightskyblue'
          }
        }
      }

    //pega mudanças na imagem selecionada
    const handleChange = e => {
        if (e.target.files[0]){
            setImage(e.target.files[0]);
        }}
    async function handleNewProduct(e) {
        e.preventDefault()
        if(nameProd == null || nameProd.trim() == "" ){
            alert('Informe o nome do produto')
          }else if(description == null || description.trim() == "" ){
            alert('Informe a descrição do produto')
          }else if(value== null || value.trim() == "" ){
                alert('Informe o valor do produto')
            }else if(image== null ){
                alert('Selecione uma imagem para o seu produto')
            }else{
            const imgProdName = Math.random()+image.name
            const UploadTask = storage.ref(`images/${imgProdName}`).put(image)//put faz o upload
            UploadTask.on("state_changed",
                snapshot => {},//this basicaly indicate the current progress of file upload
                error => {
                    console.log(error);
                },() => {
                    storage
                        .ref("images")
                        .child(imgProdName)
                        .getDownloadURL()//the url of thefile that we uploaded to firebase
                        .then(urlImgProd =>{
                            const data = {
                                nameProd,
                                description,
                                value,
                                urlImgProd,
                                categoriaProd,
                                imgProdName
                            };
                            api.post('produtoController', data,{
                                headers: {
                                    Authorization: usercpf
                                }
                            })
                            history.push('/profile')
                        })
                })
        }}
    return(
        <html>
        <div className="new-incident-container">
            <div className="content">
            <section>
        <img src={logoImg} alt="Barganhar" />
        <h1>Cadastrar novo produto</h1>
        <p>Cadastre aqui um produto que deseje oferecer.</p>
        <Link className="back-link" to="/profile">{/*Chamando o estilo da class back-link*/}
                <FiArrowLeft size={16} color="#E02041"/>
                Voltar para página de cadastro de produtos.
            </Link>
        </section>
            <form onSubmit={handleNewProduct}>
                <input placeholder="Nome do Produto"
                       value={nameProd}
                       onChange={e=> setnameProd(e.target.value)} maxLength="30"/>
                <textarea placeholder="Descrição do Produto"
                       value={description}
                       onChange={e=> setDescription(e.target.value)} maxLength="160"/>
                <input placeholder="Valor"
                        type="number"
                       value={value}
                       onChange={e=> setValue(e.target.value)} maxLength="9"/>
                <Select className="Selection" options={options}
                theme={customTheme}
                onChange={e => setCategoriaProd(e.value)}
                autoFocus
                placeholder="Categoria do Produto"
                isSearchable
               />
               <form>     
                <input   className="fotoProd" id="fotoProd"  type="file"  accept="image/*"  onChange={handleChange}></input>
                </form>  
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    <footer className="Desenvolvedores">
            Desenvolvido por : Alexandro,Breno, Ronni, Túlius Alves e Wolgran Julio
        </footer>
    </html>
    )
}