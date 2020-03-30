import React, { Fragment } from 'react'

const Section = () => (
    <Fragment>
        <section id="intro">
        <div className="intro-container">
          <div id="introCarousel" className="carousel  slide carousel-fade" data-ride="carousel">

            <ol className="carousel-indicators"></ol>

            <div className="carousel-inner" role="listbox">

              <div className="carousel-item active">
                <div className="carousel-background"><img src="assets/img/intro-carousel/1.jpg" alt=""/></div>
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2>Nós somos Profissionais</h2>
                    <p>
                      Usamos sempre as melhores tecnologias para atingir o seu sucesso!
                    </p>
                    <a href="#services" className="btn-get-started scrollto">Serviços</a>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="carousel-background"><img src="assets/img/intro-carousel/1.jpg" alt=""/></div>
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2>Equipe</h2>
                    <p>
                      Equipe totalmente desempenhada para ajudar você atingir o seu sucesso
                    </p>
                    <a href="#team" className="btn-get-started scrollto">Equipe</a>
                  </div>
                </div>
              </div>

            </div>

            <a className="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon ion-chevron-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>

            <a className="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon ion-chevron-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>

          </div>
        </div>
      </section>
    </Fragment>
)

export default Section

