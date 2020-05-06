import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'; //importa as rotas

import Login from './pages/login';
import Register from './pages/register';

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>{/*Garante que apenas uma rota seja executada por vez*/}
            <Route path="/" exact component={Login} />{/* a "/" siginifica que é a pág. inicial*/}
            <Route path="/register" component={Register} />{/* Página register*/}
        </Switch>
        </BrowserRouter>
    );
}