import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

const Team = () =>(
    <Fragment>
        <section id="team">
            <div className="container">
                <div className="section-header wow fadeInUp">
                <h3>Equipe</h3>
                <p>Nossa Equipe de Colaboradores</p>
                </div>

                <div className="row">

                    <div className="col-lg-3 col-md-6 wow fadeInUp">
                        <div className="member">
                        <img src="assets/img/team-1.jpg" className="img-fluid" alt=""/>
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>André Luis de Moraes</h4>
                                    <span>C.O. da INZ INFORMÁTICA</span>
                                    <div className="social">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="member">
                        <img src="assets/img/team-2.jpg" className="img-fluid" alt=""/>
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Cristiane Queiroz dos Santos</h4>
                                    <span>Gerente</span>
                                    <div className="social">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            </section>
    </Fragment>
)

export default Team