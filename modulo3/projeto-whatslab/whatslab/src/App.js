import React from "react";
import './App.css'
import Logo from './Img/labe-logo.jpg'
import Inputs from './Components/FormsInput/Inputs.js'
import { Body, Principal, Header, Imagem, Titulo, Sessao, Footer, Descricao } from './Components/Styles/Styled.js'
import { Tela } from './Components/Mensagens/Mensagens.js'

function App() {
  return (
    <Body>

      <Principal>

        <Header>
          <Imagem src={Logo} alt="Logo da Labenu" />
          <Titulo>LabZap</Titulo>
        </Header>

        <Sessao>

          <Tela>
            <p>ALOU</p>
          </Tela>

          <Inputs />



        </Sessao>

      </Principal>

      <Footer>

        <Descricao>Copyright &copy; 2022 </Descricao>

      </Footer>

    </Body>
  );
}

export default App;
