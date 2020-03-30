import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../Home'
import Teste from '../Teste'

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/"  exact component={Home}/>
                <Route path="/teste"  exact component={Teste}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes