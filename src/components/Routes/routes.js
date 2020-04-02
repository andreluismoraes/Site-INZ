import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../Home'
import Album from '../Album'
import Firebase from '../Firebase'

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/"  exact component={Home}/>
                <Route path="/album"  component={Album}/>
                <Route path="/firebase" component={Firebase}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes