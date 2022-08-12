import { useNavigate } from 'react-router-dom'
import React from 'react';
import {Botoes, Principal, Titulo} from './HomePageStyled'

function HomePage () {
    const navigate = useNavigate();
    const lista = () =>{
        navigate("/trips/list");
    }

    const login = () =>{
        navigate("/login")
    }


    return(
        <Principal>
            <Titulo>LabeX</Titulo>
            <Botoes>
                <button onClick={login}>Área Administrativa</button>
                <button onClick={lista}>Lista de viagens</button>
            </Botoes>
        </Principal>
    )
}

export default HomePage;