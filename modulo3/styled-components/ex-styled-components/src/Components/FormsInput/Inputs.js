import React from "react"
import './Input.css'

function Inputs(props){
    return(
        <div className="forms">
            <p> Remetente: </p>
            <label>
                <input type={props.type} name={props.name} />
            </label>
            
            <p> Msg: </p>
            <label>
                <input type={props.type} name={props.name} />
            </label>

            <button type={props.button}>Enviar Mensagem</button>
        </div>
    )
}

export default Inputs