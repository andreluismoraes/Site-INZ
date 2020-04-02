import React, { Fragment } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import './style.css'
import firebase from '../../server/config'
import { useEffect } from 'react'
import { useState } from 'react'

const Firebase = () =>{
    const [content, setContent] = useState("")
    const [id, setId] = useState("")
    const [user, setUser] = useState([])

    const db = firebase.firestore()

    const showAll = async () =>{
        
        const dados = await db.collection('projects').get()
        let includeUser = []
        dados.forEach((doc) =>{
            includeUser = [...includeUser, doc.data()] 
        })
        setUser([...user, ...includeUser])
    }

    const handleCad = () =>{
        db.collection('projects').add({
            content,
            id
        })
    }

    const handleAlt = () =>{
        db.collection('projects').doc('AvW2EiSn6gidSqLDaoEl').update({
            content
        })
    }

    //content: "bla bla bla", firtsname: "andre", lastname: "moraes", title: "Projeto"

    useEffect(()=>{
        showAll()
    },[])

    return(
        <Fragment>
            <Header/>
                <button onClick={handleCad}>Cadastro</button>  
                <input type="text" placeholder="content" onChange={(content) => setContent(content.target.value)}/>
                <input type="text" placeholder="id" onChange={(id) => setId(id.target.value)}/>
                <button onClick={handleAlt}>Alterar</button>  
                <h1>Firebase</h1>
                <div className="firebase">  
                {user.map(itemUser => (
                        <div key={itemUser.SuperId} className="item-firebase">
                            <p>{itemUser.content}</p> 
                             {console.log(itemUser)}
                        </div>
                    ))}
                </div>
            <Footer/>
        </Fragment>
    )
}

export default Firebase