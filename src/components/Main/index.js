import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

const Main = () =>(
    <Fragment>
        <section id="services">
            <div className="container">

                <header className="section-header wow fadeInUp">
                <h3>Serviços</h3>
                <p>
                    Desenvolvemos Sites, vendas de peças e acessórios, manutenção de computadores, configuração e instalação de servidores.
                </p>
                </header>

                <div className="row">

                    <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
                        <div className="icon"><i className="ion-ios-analytics-outline"></i></div>
                        <h4 className="title"> <Link to='#'/>Desenvolvimento de Sites</h4>
                        <p className="description">Usamos sempre as melhores Tecnologias de Desenvolvimento com Bootstrap </p>
                    </div>

                    <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
                        <div className="icon"><i className="ion-ios-bookmarks-outline"></i></div>
                        <h4 className="title"> <Link to='#'/>Vendas</h4>
                        <p className="description">Vendas de peças e acessórios</p>
                        <p className="description"><a href='https://lista.mercadolivre.com.br/_CustId_242414926'>Consulte nossos preços</a></p>
                    </div>

                    <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
                        <div className="icon"><i className="ion-ios-paper-outline"></i></div>
                        <h4 className="title"><Link to='#'/>Manutenção</h4>
                        <p className="description">Fazemos a manutenção de Desktops e Notebooks e instalção de softwares</p>
                    </div>

                    <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                        <div className="icon"><i className="ion-ios-speedometer-outline"></i></div>
                        <h4 className="title"><Link to='#'/>Infraestrutura</h4>
                        <p className="description">Instalação e configuração de Servidores Proxy, e Windows Server</p>
                    </div>

                </div>

            </div>
        </section>
    </Fragment>
)

export default Main