import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../Home'
import Album from '../Album'
import Firebase from '../Firebase'
import changeUser from '../Firebase/changeUser'

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/"  exact component={Home}/>
                <Route path="/album"  component={Album}/>
                <Route path="/firebase" exact component={Firebase}/>
                <Route path="/firebase/user/:id" component={changeUser}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes