import React, { Fragment } from 'react'
import axios from 'axios'
import Header from '../Header'
import Footer from '../Footer'
import { useState } from 'react'
import { useEffect } from 'react'

const Album = () =>{
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
            <h1>Geração de Albuns do JsonPlaceholder</h1>
                <div className="album">
                    {album.map(itemAlbum => (
                        <div key={itemAlbum.id} className="item-album">
                            <p>{itemAlbum.title}</p>
                            <img src={itemAlbum.thumbnailUrl} alt={itemAlbum.title}/>
                        </div>
                    ))}
                </div>
            <Footer/>
        </Fragment>
    )
}

export default Album