import React, {useState} from 'react';
import { AppStyled } from './AppStyled';
import TelaInicial from './components/TelaInicial/TelaInicial';
import TelaMatchs from './components/TelaMatchs/TelaMatchs';
import {GlobalStyle} from './AppStyled'

function App (props) {

    const [pagina, setPagina] = useState('inicial')

    const renderizar = (paginaRender) => {
        setPagina(paginaRender)
    }

    const paginaDeMatch = () => {
        switch(pagina){
            case 'inicial':
                return <TelaInicial renderizar={renderizar}/>
            case 'matches':
                return <TelaMatchs renderizar={renderizar} />
            default:
                return null;
        }
    }

    return(
        <AppStyled>
            <GlobalStyle/>
            <div className="titulo">
                <h1>AstroMatch</h1>
            </div>
            {paginaDeMatch()}
            
        </AppStyled>
    )
}

export default App;