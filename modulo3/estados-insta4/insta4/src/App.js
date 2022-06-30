import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import imagem from './img/minha-foto.jpg'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {
return(
  <MainContainer>
    <Post
      nomeUsuario={'Paulinha'}
      fotoUsuario={'https://picsum.photos/50/50'}
      fotoPost={'https://picsum.photos/200/150'}
    />
    
    <Post
      nomeUsuario={'Gabriel'}
      fotoUsuario={imagem}
      fotoPost={'https://cdn.corporate.walmart.com/dims4/WMT/572511c/2147483647/strip/true/crop/1920x1066+0+7/resize/980x544!/quality/90/?url=https%3A%2F%2Fcdn.corporate.walmart.com%2F7b%2F66%2F142c151b4cd3a19c13e1ca65f193%2Fbusinessfornature-banner.png'}
    />

    <Post
      nomeUsuario={'Julia'}
      fotoUsuario={'https://www.ifsudestemg.edu.br/noticias/reitoria/mais-do-que-existir-ser-mulher-e-resistir/KamilaMagno.png/@@images/f557f0e1-8007-480b-b883-20c16ce35259.png'}
      fotoPost={'https://www.birdlife.org/wp-content/uploads/2021/09/Nature_positive_shutterstock_1451653292_1_1-1024x494.jpg'}
    />
  </MainContainer>
)

}


export default App;
