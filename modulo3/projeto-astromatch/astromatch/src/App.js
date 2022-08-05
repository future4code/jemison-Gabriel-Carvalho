import React from 'react';
import { AppStyled } from './AppStyled';
import TelaInicial from './components/TelaInicial/TelaInicial';
import {GlobalStyle} from './AppStyled'

function App () {
    return(
        <AppStyled>
            <GlobalStyle/>
            <div className="titulo">
                <h1>AstroMatch</h1>
            </div>
            <TelaInicial/>
            
        </AppStyled>
    )
}

export default App;