import React,{useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';//importa o botão de voltar
import './styles.css';
import api from '../../services/api';
import logoImg from '../../assets/bar.png';
import Axios from 'axios';
import Select from 'react-select'

export default function Register() {
    const[cpf, setCpf] = useState(null)
    const[urlImgVend,seturlImgVend] = useState('https://firebasestorage.googleapis.com/v0/b/webell.appspot.com/o/defaultimg%2Fdefaultperfilimage.jpg?alt=media&token=f7afd2c7-0f73-4761-ad20-7db777d009f7')
    const[imgVendName,setimgVendName] = useState('defaultperfilimage.jpg')
    const[nameVend, setnameVend] = useState(null)
    const[password, setPassword] = useState(null)
    const[confirmPassword,setConfirmPassword]=useState(null)
    const[rg, setRg] = useState(null)
    const[email, setEmail] = useState(null)
    const[whatsapp, setWhatsapp] = useState(null)
    const[city, setCity] = useState(null)
    const[uf, setUf] = useState(null)

    const history = useHistory()

    //const[selectedOption, setselectedOption] = useState([])
    const[selectedcity, setselectedcity] = useState([])
    const[localidades, setlocalidades] = useState([])

    useEffect(() => {
      console.log(city)
      teste()
   }, [uf]);
  async function teste(){
       await Axios.get( `/api/cidades/${uf}`).then(res => {
           const dados = res.data
           setlocalidades(dados)
       })
  }
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
    const options2 = localidades.map(v => ({
             label: v.slice(8),
             value: v.slice(8)
           }));
    const options = [
        { value: 'AC', label: 'AC' },{ value: 'AL', label: 'AL' },
        { value: 'AP', label: 'AP' },{ value: 'AM', label: 'AM' },
        { value: 'BA', label: 'BA' },{ value: 'CE', label: 'CE' },
        { value: 'DF', label: 'DF' },{ value: 'ES', label: 'ES' },
        { value: 'GO', label: 'GO' },{ value: 'MA', label: 'MA' },
        { value: 'MT', label: 'MT' },{ value: 'MS', label: 'MS' },
        { value: 'MG', label: 'MG' },{ value: 'PA', label: 'PA' },
        { value: 'PB', label: 'PB' },{ value: 'PR', label: 'PR' },
        { value: 'PE', label: 'PE' },{ value: 'PI', label: 'PI' },
        { value: 'RJ', label: 'RJ' },{ value: 'RN', label: 'RN' },
        { value: 'RS', label: 'RS' },{ value: 'RO', label: 'RO' },
        { value: 'RR', label: 'RR' },{ value: 'SC', label: 'SC' },
        { value: 'SP', label: 'SP' },{ value: 'SE', label: 'SE' },
        { value: 'TO', label: 'TO' },
    ]
    async function handleRegistrer(e) {
        e.preventDefault()//previnindo o comportamento do load do submit
         if(nameVend == null || nameVend.trim() == "" ){
            alert('Voce não informou o sue Nome')
          }else if(cpf == null || cpf.trim() == "" ){
            alert('Você não preencheu o campo CPF')
          }else if (password == null || password.trim() == ""  || confirmPassword == null || confirmPassword.trim() == ""  ) {
            alert('Voce precisa informar sua Senha')
        }else if (confirmPassword != password ) {
            alert('As senhas não conhecidem')
        }else if(rg == null || rg.trim() == "" ){
            alert('Voce não preencheu o campo Rg')
          }else if(email == null || email.trim() == "" ){
              alert('Voce não preencheu o campo Email')
            }else if(whatsapp == null || whatsapp.trim() == "" ){
                alert('Voce não preencheu o campo WhatsApp')
              }
        else{
          const data = {
              cpf,
              urlImgVend,
              imgVendName,
              nameVend,
              password,
              confirmPassword,
              rg,
              email,
              whatsapp,
              city,
              uf,
          };
          try{//enviando dados, o response e a resposta que foi cadastrado
              const response = await api.post('cadastroVendedorController',data)
              alert(`Bem Vindo ${response.data.nameVend}`)
              history.push('/')
          }catch (err) {
            if (err.response) {
                alert(err.response.data.message);
              }
              console.log(err)
            }
          }
        }
    return(
        <div className="register-container">
            <div className="content">
            <section>
            <img src={logoImg} alt="Barganhar" />
            <h1>Cadastro</h1>
            <p>Realize aqui o seu cadastro como vendedor.</p>
            <Link className="back-link" to="/">{/*Chamando o estilo da class back-link*/}
                <FiArrowLeft size={16} color="#E02041"/>
                Não, já possuo cadastro
            </Link>
        </section>
            <form onSubmit={handleRegistrer}>
                <input placeholder="Nome"
                       value={nameVend} // função reduzida
                       onChange={e=> setnameVend(e.target.value)}//e é o evento de mudança
                    //o target e o valor do input,
                    //o e é o parametro da função
                    maxLength="42"
                />
                <input placeholder="Senha"
                       value={password} // função reduzida
                       type="password"
                       onChange={e=> setPassword(e.target.value.trim())}
                       maxLength="25"
                />
                <input placeholder="Confrimar Senha"
                       value={confirmPassword} // função reduzida
                       type="password"
                       onChange={e=> setConfirmPassword(e.target.value.trim())}
                       maxLength="25"
                />
                <input placeholder="Cpf"
                    type="number"
                       value={cpf} // função reduzida
                       onChange={e=> setCpf(e.target.value.trim())}
                       maxLength="11"
                />
                <input placeholder="Rg"
                type="number"
                       value={rg} // função reduzida
                       onChange={e=> setRg(e.target.value.trim())}
                       maxLength="7"
                />
                <input type="email" placeholder="E-mail"
                       value={email}
                       onChange={e=> setEmail(e.target.value.trim())}/>
                <input placeholder="WhatsApp"
                    type="number"
                       value={whatsapp}
                       onChange={e=> setWhatsapp(e.target.value.trim())}
                       maxLength="11"
                       />
                <div className="input-group">
                <Select options={options}
                theme={customTheme}
                onChange={e => setUf(e.value)}
                autoFocus
                placeholder="UF"
                isSearchable
               />
               <Select options={options2}
               theme={customTheme}
               placeholder="Cidade"
               onChange={e => setCity(e.value)}
               isSearchable
               noOptionsMessage={()=>'Selecione o UF desejado'}/>
                </div>
                <button className="button" type="submit">Cadastrar</button>
            </form>
            </div>
        </div>
    )
}
