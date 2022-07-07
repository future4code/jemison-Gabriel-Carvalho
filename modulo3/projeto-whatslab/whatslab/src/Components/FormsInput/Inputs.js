import React, {useState} from "react"
import './InputStyle.js'
import {Forms, Nome, InputNome, InputMensagem, Mensagem, Enviar, Botao} from './InputStyle.js'

function Inputs(props){


    // Lógica da aplicação
    
     const [InputName, setInputName] = useState('')
     const [InputMessage, setInputMessage] = useState('')



    // Funções de eventos

    const handleInputName = (e) => {
        setInputName(e.target.value)
    }

    const handleInputMessage = (e) => {
        setInputMessage(e.target.value)
    }

    return(
        <Forms>
            <label>Remetente:</label>
            <input 
                placeholder="Seu Nome"
                value={InputName}
                onChange={handleInputName}
            />

            <label>Mensagem:</label>
            <input 
                placeholder="Mensagem"
                value={InputMessage}
                onChange={handleInputMessage}
            />
        </Forms>
    )
}

export default Inputs