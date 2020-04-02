import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

const Header = () =>(
    <Fragment>
        <header id="header">
            <div className="container-fluid">

            <div id="logo" className="pull-left">
                <h1><a href="#intro" className="scrollto">INZ INFORMÁTICA</a></h1>

            </div>

            <nav id="nav-menu-container">
                <ul className="nav-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#about">Sobre Nós</a></li>
                    <li><a href="#services">Serviços</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#contact">Contato</a></li>
                    <li><Link to="/album">Geração Album</Link></li>
                    <li><Link to="/firebase">Geração Firebase</Link></li>
                </ul>
            </nav>
            </div>
        </header>
    </Fragment>
)

export default Header