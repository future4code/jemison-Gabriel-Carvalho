import React, {useState} from "react"
import './InputStyle.js'
import {Forms} from './InputStyle.js'

function Inputs(){


    // Lógica da aplicação
    
     const [InputName, setInputName] = useState('')
     const [InputMessage, setInputMessage] = useState('')
    //  const [Dados, setDados] = [{
    //     nome: InputName,
    //     mensagem: InputMessage
    //  }] = useState()



    // Funções de eventos

    const handleInputName = (e) => {
        setInputName(e.target.value)
    }

    const handleInputMessage = (e) => {
        setInputMessage(e.target.value)
    }

    const Enviar = 

    return(
        <Forms>
            <label></label>
            <input 
                placeholder="Seu Nome"
                value={InputName}
                onChange={handleInputName}
            />

            <label></label>
            <input 
                placeholder="Mensagem"
                value={InputMessage}
                onChange={handleInputMessage}
            />

            <button ><img className="icone_enviar"src="https://img.icons8.com/ios/500/sent.png"/></button>
        </Forms>
    )
}

export default Inputs