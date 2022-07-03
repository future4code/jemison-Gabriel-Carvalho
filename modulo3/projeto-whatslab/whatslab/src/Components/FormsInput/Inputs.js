import React from "react"
import './Input.css'

function Inputs(props){
    return(
        <div className="forms">
            <p> Remetente: </p>
            <label for="nome">
                <input type={props.type} name={props.name} />
            </label>
            
            <p> Msg: </p>
            <label for="mensagem">
                <input type={props.type} name={props.mensagem} />
            </label>

            <button type={props.button} onClick={props.onClick}>Enviar Mensagem</button>
        </div>
    )
}

export default Inputs