import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

const Footer = () =>(
    <Fragment>
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6 footer-info">
                            <h3>Inz Informática</h3>
                            <p>
                                Conte, sempre conosco!
                            </p>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Links</h4>
                            <ul>
                            <li><i className="ion-ios-arrow-right"></i> <Link to="#"/>Home</li>
                            <li><i className="ion-ios-arrow-right"></i> <Link to="#"/>Sobre nós</li>
                            <li><i className="ion-ios-arrow-right"></i> <Link to="#"/>Serviços</li>
                            <li><i className="ion-ios-arrow-right"></i> <Link to="#"/>Equipe</li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h4>Contato</h4>
                            <p>
                            Rua: Dr. João Pereira da Cunha, 556 <br/>
                            Itapira - SP<br/>
                            <strong>Celular:</strong>(19) 9-8443-0891<br/>
                            <strong>Email:</strong> inzinformatica@gmail.com<br/>
                            </p>

                            <div className="social-links">
                                <Link to="#" className="facebook"><i className="fa fa-facebook"></i></Link>
                                <Link to="#" className="instagram"><i className="fa fa-instagram"></i></Link>
                            </div>

                        </div>

                    </div>
                </div>
                </div>

                <div className="container">
                <div className="copyright">
                    &copy; Copyright <strong>INZ INFORMÁTICA</strong>
                </div>
                <div className="credits">
                    Site desenvolvido com a ferramenta <a href="https://getbootstrap.com/">Bootstrap </a>
                </div>
            </div>
        </footer>
    </Fragment>
)

export default Footer