import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Botao, Card, Descricao, Imagem, Icone } from "./TelaStyled";
import x_Icon from '../../icon/x_icon.png'
import heart_Icon from '../../icon/heart_icon.png'

function TelaInicial() {

    const [perfil, setPerfil] = useState({})
    const [proximoPerfil, setProximoPerfil] = useState(false)



    useEffect(() => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person')
            .then((response) => setPerfil(response.data))
    }, [])





    function Escolhido() {
        setProximoPerfil(!false)
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person')
        .then((response) => setPerfil(response.data))

        const escolha = true

        const body = {
            id: perfil.profile.id,
            choice: escolha
        }

        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person', body).then((response) => console.log(response.data))
    }

   

    function Rejeitado () {
        setProximoPerfil(!false)
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person')
        .then((response) => setPerfil(response.data))

        const escolha = false

        const body = {
            id: perfil.profile.id,
            choice: escolha
        }

        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person', body).then((response) => false)

        console.log(perfil.profile)
    }


    return (
        <div>

            <Card>
                <div>
                    <Imagem src={perfil.profile?.photo} alt={perfil.profile?.photo_alt}/>
                </div>

                <Descricao>
                    <p>{perfil.profile?.name}, {perfil.profile?.age} anos</p>
                    <br />
                    <p>{perfil.profile?.bio}</p>
                </Descricao>

                <Botao>
                    <button onClick={Rejeitado}>
                        <Icone src={x_Icon} alt='icone de x' />
                    </button>

                    <button onClick={Escolhido}>
                        <Icone src={heart_Icon} alt='coração simbolizado um match' />
                    </button>
                </Botao>
            </Card>


        </div>

    )
}

export default TelaInicial;