import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import imagem from './components/CardGrande/minhafoto.jpg'
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'
import icone from './components/CardPequeno/emailicon.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={imagem} 
          nome="Gabriel Marcelino" 
          descricao="Olá, sou o Gabriel, tenho 21 anos. atualmente estudante na Labenu, entrei no mundo da programação recentemente, porém é algo que sempre tive vontade de aprender, decidi focar nos estudos para essa área de desenvolvimento web."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          icone={icone}
          titulo="Email:"
          texto="perfilteste@hotmail.com"
        />

        <CardPequeno
          icone="https://cdn-icons-png.flaticon.com/128/6948/6948648.png"
          titulo="Endereço:"
          texto="Rua da Disney 130"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Sign-check-icon.png/800px-Sign-check-icon.png" 
          nome="Lorem" 
          descricao="
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga veniam necessitatibus ipsa. Corporis doloribus dolore temporibus atque deserunt, repellat voluptatum dolorem nam optio eos voluptatem corrupti aspernatur. Accusantium, delectus quas?" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;