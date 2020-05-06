import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './pages/login'
import Register from "./pages/register";
import Profile from "./pages/profile";

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch> //permite uma rota executada por momento
                <Route path="/" exact component={Login}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/profile" exact component={Profile}/>

            </Switch>
        </BrowserRouter>
    )
}
