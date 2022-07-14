import React, {useState} from "react";
import './App.css'
import Logo from './Img/labe-logo.jpg'
import { Body, Header, Imagem, Titulo, Sessao} from './Components/Styles/Styled.js'
import {Fundo, Tela, Texto} from './Components/Styles/Mensagens.js'
import {Forms} from './Components/Styles/InputStyle.js'

function App() {

  const [InputName, setInputName] = useState('')
  const [InputMessage, setInputMessage] = useState('')
  const [Dados, setDados] = useState( 
        [{
            nome: '',
            mensagem: ''
     }])

    
     const Enviar = () =>{
        const novoDado ={nome: InputName, mensagem: InputMessage}
        const mensagens = [...Dados, novoDado]
        setDados(mensagens)
    }
    
    const renderizar = Dados.map((item, key) => {
      return (
      
        <Texto key={key}>
          
          <span className="nome">{item.nome}:</span>
          <span>{item.mensagem}</span>
            
        </Texto>
            
        )
    })

    const mudarCor = () =>{
      <Tela>

      </Tela>
    }


    // Funções de eventos
    

    const handleInputName = (e) => {
        setInputName(e.target.value)
    }

    const handleInputMessage = (e) => {
        setInputMessage(e.target.value)
    }

    
  return (
    <Body>

      

        <Header>
          <Imagem src={Logo} alt="Logo da Labenu" />
          <Titulo>LabZap</Titulo>
        </Header>

        <Sessao onClick={mudarCor}>
          
          <Tela>
              <Fundo>
                {renderizar}
              </Fundo>
              
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
              
          </Tela>
          
        
        </Sessao>

      

    </Body>
  );
}

export default App;
