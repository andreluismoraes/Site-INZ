import React, { Fragment } from 'react'
import Header from '../../Header'
import Footer from '../../Footer'
import './style.css'

const changeUser = () =>(
    <Fragment>
        <Header/>
            <div className="user">
                <div className="item-user">
                    <h1>Ola mundo</h1>
                </div>
            </div>
        <Footer/>
    </Fragment>
)

export default changeUser