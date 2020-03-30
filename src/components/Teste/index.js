import React, { Fragment } from 'react'
import axios from 'axios'
import Header from '../Header'
import Footer from '../Footer'
import { useState } from 'react'
import { useEffect } from 'react'
import './style.css'

const Teste = () =>{
    const [album, setAlbum] = useState([])
    const [qtd, setQtd] = useState(1)

    const handleAlbum = async () =>{
        const limite = qtd + 5
        let partsAlbum = []
        for(let i = qtd; i < limite - 1; i++){
            const dados = await axios.get(`https://jsonplaceholder.typicode.com/photos/${i}`)
            partsAlbum = [...partsAlbum, dados.data]  
        }
        setAlbum([...album, ...partsAlbum])
        setQtd(qtd + 4)
    }

    useEffect(() =>{
        handleAlbum()
    },[])

    return(
        <Fragment>
            <Header/>
            <button onClick={handleAlbum}>Mostrar + 4 Albuns</button>
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