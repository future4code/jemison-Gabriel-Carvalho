import React, {useState} from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  input{
    width: 200px;
    height: 20px;
    margin: 10px 10px;

  }

`


function App() {

 // estados <=
 
 const [inputNome, setInputNome] = useState('')
 const [inputFotoPerfil, setFotoPerfil] = useState('')
 const [inputFotoPost, setFotoPost] = useState('')
 const [Posts, setPosts] = useState([
    {
      nomeUsuario: 'Paulinha',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/200/150'
    },
    
    {
      nomeUsuario: 'Gabriel',
      fotoUsuario: 'https://i.pinimg.com/736x/06/ce/08/06ce084ae3f8f5825ab343d582150115.jpg',
      fotoPost: 'https://cdn.corporate.walmart.com/dims4/WMT/572511c/2147483647/strip/true/crop/1920x1066+0+7/resize/980x544!/quality/90/?url=https%3A%2F%2Fcdn.corporate.walmart.com%2F7b%2F66%2F142c151b4cd3a19c13e1ca65f193%2Fbusinessfornature-banner.png'
    },
    
    {
      nomeUsuario: 'Julia',
      fotoUsuario: 'https://s2.glbimg.com/CDxRN1MNzIrIZ7GXoTgIaPccMj8=/0x0:946x945/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/M/U/XJwwFYTv6ACahBnR9JCw/vitima.jpg',
      fotoPost: 'https://static.educalingo.com/img/en/800/nature.jpg'
    }

 ]
 )

 
 
 // eventos <=
 
 const handleInputNome = (e) =>{
  setInputNome(e.target.value)
 }

 const handleInputFotoPerfil = (e) =>{
  setFotoPerfil(e.target.value)
 }

 const handleInputFotoPost = (e) =>{
  setFotoPost(e.target.value)
 }

 
// renderizando <=

  const PostagensUsuarios = (e) =>{

    e.preventDefault();
    const novoPost = 
    {
      nomeUsuario: inputNome, 
      fotoUsuario: inputFotoPerfil,
      fotoPost: inputFotoPost
    }

    
    const novasPostagens = [...Posts, novoPost]
    setPosts(novasPostagens)
  }

  const PostUsuarios = Posts.map((item, index) =>{
    return (
      <Post key={index}
        nomeUsuario={item.nomeUsuario}
        fotoUsuario={item.fotoUsuario}
        fotoPost={item.fotoPost}
      />
      
    )
  })
  
  
  

  return(
    <MainContainer>

    <form>
        
        <label>Nome:</label>
        <input 
          placeholder='Seu Nome'
          value={inputNome}
          onChange={handleInputNome}
        />
        
        <label>Foto Perfil:</label>
        <input 
          placeholder='Insira o link da imagem'
          value={inputFotoPerfil}
          onChange={handleInputFotoPerfil}
        />
  
        <label>Foto do Post:</label>
        <input 
          placeholder='Insira um link'
          value={inputFotoPost}
          onChange={handleInputFotoPost}
        />
      
        <button onClick={PostagensUsuarios}>Postar</button>
      
      </form>
      
      {PostUsuarios}
      
      
    </MainContainer>
)

}


export default App;
