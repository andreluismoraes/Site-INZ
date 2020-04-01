import React, { Fragment } from 'react'
import axios from 'axios'
import Header from '../Header'
import Footer from '../Footer'
import { useState } from 'react'
import { useEffect } from 'react'
import './style.css'
import firebase from '../../server/config'

const Teste = () =>{
    const [album, setAlbum] = useState([])
    const [qtd, setQtd] = useState(1)
    const [load, setLoad] = useState(false)
    const [carregando, setCarregando] = useState("Carregando")

    const handleAlbum = async () =>{
        const limite = qtd + 5
        let partsAlbum = []
        for(let i = qtd; i < limite - 1; i++){
            setLoad(true)
            const dados = await axios.get(`https://jsonplaceholder.typicode.com/photos/${i}`)
            partsAlbum = [...partsAlbum, dados.data]  
        }
        setLoad(false)
        setAlbum([...album, ...partsAlbum])
        setQtd(qtd + 4)
    }

    const teste = async () =>{
        const db = firebase.firestore()
        const dados = await db.collection('projects').get()
        dados.forEach((doc) =>{
            console.log(doc.data())
        })
    }

    useEffect(() =>{
        function efect(){
            if(load){
                return setCarregando('Carregando')
            }else{
                setCarregando('')
            }
        }
        efect()
    },[load])

    useEffect(() =>{
        handleAlbum()
    },[])

    return(
        <Fragment>
            <Header/>
            <button onClick={handleAlbum}>Mostrar + 4 Albuns</button> <h1>{carregando}</h1>
            <button onClick={teste}>Testar</button>
                <div className="user">
                    {album.map(itemAlbum => (
                        <div key={itemAlbum.id} className="item-user">
                            <p>{itemAlbum.title}</p>
                            <img src={itemAlbum.thumbnailUrl} alt={itemAlbum.title}/>
                        </div>
                    ))}
                </div>
            <Footer/>
        </Fragment>
    )
}

export default Teste