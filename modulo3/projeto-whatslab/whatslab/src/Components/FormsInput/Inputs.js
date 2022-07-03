import React, {useState} from "react"
import './InputStyle.js'
import {Forms, Nome, InputNome, InputMensagem, Mensagem, Enviar, Botao} from './InputStyle.js'

function Inputs(props){


    // Lógica da aplicação
    
     const [name, setName] = useState('')
     const [message, setMessage] = useState('')



    return(
        <Forms>
            
            <Nome>
                Remetente:
                <label htmlfor="nome">
                    <InputNome className="nome" type={props.type} name={props.nome} />
                </label>
            </Nome>
            
            
            <Mensagem>
                Msg:
                <label htmlfor="mensagem">
                    <InputMensagem type={props.type} name={props.mensagem} />
                </label>
            </Mensagem>

            <Enviar>
                <Botao type="button" value="submit" onClick={props.enviar}>Enviar Mensagem</Botao>
            </Enviar>
        </Forms>
    )
}

export default Inputs