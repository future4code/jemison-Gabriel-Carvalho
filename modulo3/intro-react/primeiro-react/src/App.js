import imagem from './minha-foto.jpg';
import './App.css';

function App() {
  const nome = 'Gabriel'
  const mensagem = () => {
    alert('Boa noite')
  }
  return (
    <div className="App">
      <main className="principal">
        <h1>Olá, meu nome é {nome}</h1>
        <img src={imagem} className="minha-foto" alt={imagem}/>
        <p>Este é meu primeiro site com react.</p>
        <button onClick={mensagem} className="botao">Clique</button>
      </main>
    </div>
  );
}

export default App;
