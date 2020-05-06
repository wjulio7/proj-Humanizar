import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './pages/login'
import Register from "./pages/register";

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch> //permite uma rota executada por momento
                <Route path="/" exact component={Login}/>
                <Route path="/register" exact component={Register}/>

            </Switch>
        </BrowserRouter>
    )
}
