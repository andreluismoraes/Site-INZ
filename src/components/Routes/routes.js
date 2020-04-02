import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../Home'
import Album from '../Album'
import Firebase from '../Firebase'
import Alter from '../Firebase/Alter'

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/"  exact component={Home}/>
                <Route path="/album"  component={Album}/>
                <Route path="/firebase" exact component={Firebase}/>
                <Route path="/firebase/alterar" component={Alter}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes