import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'; //importa as rotas

/*Importar rotas*/
import Login from './pages/login';
import Register from './pages/register';
import Perfil from './pages/perfil'
import NovoProduto from './pages/novoProduto';


export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>{/*Garante que apenas uma rota seja executada por vez*/}
            <Route path="/" exact component={Login} />{/* a "/" siginifica que é a pág. inicial*/}
            <Route path="/register" component={Register} />{/* Página register*/}
            <Route path="/perfil" component={Perfil}/>
            <Route path="/incidents/new" component={NovoProduto}/> {/*inncidents/ new para qualquer novo produto*/}
        </Switch>
        </BrowserRouter>
    );
}