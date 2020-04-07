import React, { Fragment } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import Header from '../../Header'
import Footer from '../../Footer'
import firebase from '../../../server/config'
import Card from '../Card'

const AllCard = () =>{
    const [content, setContent] = useState("")
    const [user, setUser] = useState([])
    const [change, setChange] = useState(false)

    const db = firebase.firestore()

    const showAll = async () =>{
        let includeUser = []
        const dados = await db.collection('projects').get()
        dados.forEach((doc) =>{
            includeUser.push({...doc.data(), id: doc.id})
        })
        setUser([...user, ...includeUser])
    }

    const handleCad = () =>{
        setUser([])
         db.collection('projects').add({
            content
        })
        setChange(true)
        setContent("")
    }

    useEffect(()=>{
        showAll()
        setChange(false)
    },[change])

    return(
        <Fragment>
            <Header/>
                <button onClick={handleCad}>Cadastro</button>  
                <input type="text" placeholder="content" onChange={(content) => setContent(content.target.value)}/>
                <h1>Firebase</h1>
                <div className="firebase">  
                {user.map(itemUser => (
                        <div key={itemUser.id}>
                            <Card id={itemUser.id} rest={itemUser}/>
                        </div>  
                    ))}
                </div>
            <Footer/>
        </Fragment>
    )
}

export default AllCard