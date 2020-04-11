import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

const Card = ({rest}) =>{

    return(
        <Fragment>
            <div className="item-album">
                <p>{rest.content}</p> 
                <Link to="/updateCard/teste"><button type="submit">Alterar</button></Link> 
            </div>
        </Fragment>
    )
    
}

export default Card