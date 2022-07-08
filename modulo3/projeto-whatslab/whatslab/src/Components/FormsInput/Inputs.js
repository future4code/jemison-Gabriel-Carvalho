import React, {useState} from "react"
import './InputStyle.js'
import {Forms} from './InputStyle.js'
import {Texto} from '../Mensagens/Mensagens'

function Chat(){


    // Lógica da aplicação
    
     const [InputName, setInputName] = useState('')
     const [InputMessage, setInputMessage] = useState('')
     const [Dados, setDados] = useState( 
        [{
            nome: 'Gabriel',
            mensagem: 'Olá'
     }])

    
     const Enviar = () =>{
        const novoDado = [{nome: InputName, mensagem: InputMessage} ]
        const mensagens = [...Dados, novoDado]
        setDados(mensagens)
    }
    
    const renderizar = Dados.map((item, key) => {
        return (
            <Texto key={key}>
                <p>{item.nome}</p>
                <p>{item.mensagem}</p>
            </Texto>
        )
    })


    // Funções de eventos

    const handleInputName = (e) => {
        setInputName(e.target.value)
    }

    const handleInputMessage = (e) => {
        setInputMessage(e.target.value)
    }

    

    return(
        <main>
            {renderizar}
            <Forms>
                
                <input
                    placeholder="Seu Nome"
                    value={InputName}
                    onChange={handleInputName}
                />
                <input
                    placeholder="Mensagem"
                    value={InputMessage}
                    onChange={handleInputMessage}
                />
                <button onClick={Enviar}>
                    <img className="icone_enviar" src="https://img.icons8.com/ios/500/sent.png"/>
                </button>
            
            </Forms>
        </main>
    )
}

export default Chat