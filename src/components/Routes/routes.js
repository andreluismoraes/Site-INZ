import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../Home'
import Album from '../Album'
import AllCard from '../Firebase/AllCard'
import UpdateCard from '../Firebase/UpdateCard'

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/"  exact component={Home}/>
                <Route path="/album" component={Album}/>
                <Route path="/firebase" component={AllCard}/>
                <Route path="/updateCard/teste/" component={UpdateCard}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes