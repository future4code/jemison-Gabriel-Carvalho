import './App.css'
import {Tela} from './AppStyled'
import React from 'react'
import TelaInicial from './components/TelaInicial/TelaInicial'

function App() {
 
 
  return(
    <main className="App">
      <Tela>
      
        <TelaInicial/>
      </Tela>
    </main>
  )
}

export default App;
