import React from 'react'
import {Link} from 'react-router-dom'

const About = () =>(
<section id="about">
      <div className="container">

        <header className="section-header">
          <h3>Sobre Nós</h3>
          <p>A INZ INFORMÁTICA tem experiências no mercado nacional, sempre com 
            intuito de oferecer serviços de excelência em infraestrutura de TI com foco em resultado e inovação.

            Sempre baseado em seus ideais de competência, criatividade, comprometimento, pontualidade e prazer no que fazem, 
            a INZ INFORMÁTICA oferece mais que uma consultoria: oferece uma verdadeira parceria na criação de soluções e execução de projetos tecnológicos.

            Nos dedicamos a localizar, com nossos clientes, suas principais necessidades e elaboramos todo o plano de solução. 
            Assim nossos clientes podem se dedicar ao seu negócio enquanto executamos esse plano mantendo a tecnologia atendendo às necessidades do negócio.

            Seja qual for seu desafio, desde peopleware até soluções inovadoras, contem com a INZ INFORMÁTICA para elaborar o plano de 
            ação e executar, sempre com o menor impacto e maior rendimento possível ao negócio.
          </p>
        </header>

        <div className="row about-cols">

          <div className="col-md-6 wow fadeInUp">
            <div className="about-col">
              <div className="img">
                <img src="assets/img/about-mission.jpg" alt="" className="img-fluid"/>
                <div className="icon"><i className="ion-ios-speedometer-outline"></i></div>
              </div>
              <h2 className="title"> <Link to="#"/> Nossa Missão </h2>
              <p>
                Prover Soluções de Tecnologia da Informação mais adequadas para o alcance dos 
                objetivos de empresas e o atendimento das necessidades dos clientes.
              </p>
            </div>
          </div>

          <div className="col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="about-col">
              <div className="img">
                <img src="assets/img/about-vision.jpg" alt="" className="img-fluid"/>
                <div className="icon"><i className="ion-ios-eye-outline"></i></div>
              </div>
              <h2 className="title"> <Link to="#"/> Nossa Visão</h2>
              <p>
                Ser referência nacional no segmento de Outsourcing pela eficiência, eficácia e inovação nas nossas Soluções de Tecnologia da Informação e sistemas.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
)

export default About