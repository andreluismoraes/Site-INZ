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
                    <li className="menu-active"><a href="#home">Home</a></li>
                    <li><a href="#about">Sobre Nós</a></li>
                    <li><a href="#services">Serviços</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#contact">Contato</a></li>
                    <li><Link to="/teste">Geração Album</Link></li>
                </ul>
            </nav>
            </div>
        </header>
    </Fragment>
)

export default Header