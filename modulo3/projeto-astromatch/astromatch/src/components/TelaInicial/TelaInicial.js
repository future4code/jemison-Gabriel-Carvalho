import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Botao, Card, Descricao, Imagem, IconeX, IconeCoracao, ImagemCard } from "./TelaStyled";
import x_Icon from '../../icon/x_icon.png'
import heart_Icon from '../../icon/heart_icon.png'

function TelaInicial(props) {

    const [perfil, setPerfil] = useState({})
    
    const pegarPerfil = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person')
        .then((response) => setPerfil(response.data))
        .catch((error) => console.log(error.response))
    }


    useEffect(() => {
        pegarPerfil()
    }, [])

    
    function escolha(escolha) {
        
        const body = {
            id: perfil.profile.id,
            choice: escolha
        }

        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person', body)
        .then((response) => pegarPerfil())
        .catch((error) => console.log(error))
        
    } 

    const match = () => {
        escolha(true)
        
    }

    const dismatch = () => {
        escolha(false)
    }



    return (
        <div>
            <Card key={perfil.profile?.id}>

                <ImagemCard>
                    <Imagem src={perfil.profile?.photo} alt={perfil.profile?.photo_alt} />
                </ImagemCard>

                <Descricao>
                    <p>{perfil.profile?.name}, {perfil.profile?.age} anos</p>
                    <br />
                    <p>{perfil.profile?.bio}</p>
                </Descricao>

                <Botao>
                    <button onClick={dismatch}>
                        <IconeX src={x_Icon} alt='icone de x' />
                    </button>

                    <button onClick={match}>
                        <IconeCoracao className="heart" src={heart_Icon} alt='coração simbolizado um match' />
                    </button>
                </Botao>
            </Card>


        </div>

    )
}

export default TelaInicial;