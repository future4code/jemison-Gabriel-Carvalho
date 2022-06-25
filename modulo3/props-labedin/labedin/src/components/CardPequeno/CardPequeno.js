import React from 'react'
import './CardPequeno.css'

function CardPequeno (props) {
    return(
        <div className="small-card-container">

            <img src={props.icone} />
            
            <div>
                <h4>{props.titulo} <p>{props.texto}</p></h4>
            </div>

        </div>
    )
}

export default CardPequeno