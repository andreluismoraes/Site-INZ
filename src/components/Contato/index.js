import React, { Fragment } from 'react'

const Contato = () =>(
    <Fragment>
        <section id="contact" className="section-bg wow fadeInUp">
            <div className="container">

                <div className="section-header">
                <h3>Contato</h3>
                <p>Entre em contato conosco através destes canais</p>
                </div>

                <div className="row contact-info">

                <div className="col-md-4">
                    <div className="contact-address">
                    <i className="ion-ios-location-outline"></i>
                    <h3>Endereço</h3>
                    <address>Rua: Dr. João Pereira da Cunha, 556</address>
                    <address>Itapira - SP</address>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="contact-phone">
                    <i className="ion-ios-telephone-outline"></i>
                    <h3>Celular</h3>
                    <p><a href="tel:+155895548855">(19) 9-8443-0891</a></p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="contact-email">
                    <i className="ion-ios-email-outline"></i>
                    <h3>Email</h3>
                    <p><a href="mailto:info@example.com">inzinformatica@gmail.com</a></p>
                    </div>
                </div>

                </div>

                <div className="form">
                <form action="forms/contact.php" method="post" className="php-email-form">
                    <div className="form-row">
                    <div className="form-group col-md-6">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Nome" data-rule="minlen:4" data-msg="Por favor, coloque seu nome completo" />
                        <div className="validate"></div>
                    </div>
                    <div className="form-group col-md-6">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Email" data-rule="email" data-msg="Por favor coloque um e-mail válido" />
                        <div className="validate"></div>
                    </div>
                    </div>
                    <div className="form-group">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Assunto" data-rule="minlen:4" data-msg="Por favor, coloque um assunto maior" />
                    <div className="validate"></div>
                    </div>
                    <div className="form-group">
                    <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Por favor, escreva para nós" placeholder="Mensagem"></textarea>
                    <div className="validate"></div>
                    </div>
                    <div className="mb-3">
                    <div className="loading">Carregando</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Sua mensagem foi enviada com sucesso! Muito obrigado</div>
                    </div>
                    <div className="text-center"><button type="submit">Enviar Mensagem</button></div>
                </form>
                </div>

            </div>
            </section>
    </Fragment>
)

export default Contato