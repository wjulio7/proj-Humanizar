import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './pages/login'
import Register from "./pages/register";
import Profile from "./pages/profile";
import NewProduct from "./pages/newProduct";
import alterarSenha from './pages/recuperarSenha'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch> //permite uma rota executada por momento
                <Route path="/" exact component={Login}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/profile" exact component={Profile}/>
                <Route path="/newproduct" exact component={NewProduct}/>
                <Route path="/alteracaodesenha" exact component={alterarSenha}/>

            </Switch>
        </BrowserRouter>
    )
}
