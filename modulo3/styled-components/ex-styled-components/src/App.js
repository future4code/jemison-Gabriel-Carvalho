import React from "react";
import './App.css'
import {Body, Principal, Header, Imagem, Titulo, Sessao, Footer, Descricao} from './Components/Styles/Styled.js'
import Logo from './labe-logo.jpg'
import Inputs from './Components/FormsInput/Inputs.js'


function App() {
  return (
    <Body>
      
      <Principal>
        
        <Header>
          
          <Imagem src={Logo} alt="logo da labenu"/>
          <Titulo>LabZap</Titulo>
    
        </Header>

        <Sessao>
          
          <Inputs
            type="text"
            name="remetente"
            button="submit"
          />
        
        </Sessao>
      
      </Principal>
      
      <Footer>
        
        <Descricao>Copyright &copy; 2022 </Descricao>
      
      </Footer>
    
    </Body>
  );
}

export default App;
