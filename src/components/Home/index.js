import React, { Fragment } from 'react'
import Header from '../Header'
import Section from '../Section'
import About from '../About'
import Main from '../Main'
import Team from '../Team'
import Contato from '../Contato'
import Footer from '../Footer'

const Home = () =>(
    <Fragment>
        <Header/>
        <Section/>
        <About/>
        <Main/>
        <Team/>
        <Contato/>
        <Footer/>
    </Fragment>
    

)

export default Home