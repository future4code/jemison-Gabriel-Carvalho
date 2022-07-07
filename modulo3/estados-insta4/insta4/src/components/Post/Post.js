import React, {useState} from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import iconeWhiteBookMark from '../../img/white-bookmark.png'
import iconeBlackBookMark from '../../img/black-bookmark.png'
const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 10px;
  margin-left: 0 30px;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

function Post(props){
  const [state, setState] = useState({
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    valor: '',
    iconSave: '',
    numeroComentarios: 0
  })

  const [numeroCurtidas, setnumeroCurtidas] = useState (0)
  const [curtido, setCurtido] = useState(0)
  const [iconSave, setIconSave] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [valor, setValor] = useState('')
  const [numeroComentarios, setNumeroComentarios] = useState(0)

  const onClickCurtida = () => {
    console.log('curtido')
    setCurtido(!curtido)

    if(numeroCurtidas == 0){
      setnumeroCurtidas(numeroCurtidas + 1)
    }else{
      setnumeroCurtidas(numeroCurtidas - 1)
    }
   
  }

  const onClickIcon = () => {
    if(iconSave == 0){
      setIconSave(!iconSave)
    }else{
      setIconSave(!iconSave)
    }
  }
  
  const onClickComentario = () => {
    setComentando(!comentando)
    if(comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} onChange={onChangeComentario}/>
    }
    console.log(comentando)
  }

  const onChangeComentario = () => {
    setValor(comentando)
  }
  
  const aoEnviarComentario = () => {
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
  }
  

    let iconeCurtida

    if(curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeWhite

    if(iconSave == 1) {
      iconeWhite = iconeBlackBookMark
    } else{
      iconeWhite = iconeWhiteBookMark
    }

    let componenteComentario

    if(comentando) {
      componenteComentario = <SecaoComentario onChange ={onChangeComentario} aoEnviar={aoEnviarComentario}/>
    }
     
  return(
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />

        <IconeComContador
          icone={iconeWhite}
          onClickIcone={onClickIcon}
          valorContador={iconSave}
        />
      
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  )
}


export default Post