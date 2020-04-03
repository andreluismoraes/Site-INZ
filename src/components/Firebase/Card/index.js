import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import ChangeUser from '../changeUser'

const Card = ({rest}) =>{

    return(
        <Fragment>
            <div className="item-firebase">
                <p>{rest.content}</p> 
                <Link to={`/firebase/user/${rest.id}`}><button>Alterar</button></Link>
            </div>
        </Fragment>
    )
    
}

export default Card