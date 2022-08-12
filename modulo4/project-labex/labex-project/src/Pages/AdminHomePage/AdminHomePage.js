import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Botoes, Principal, Titulo} from '../HomePage/HomePageStyled'

function AdminHomePage () {
    const navigate = useNavigate();
    
    const voltar = () =>{
        navigate(-1)
    }

    const inicio = () =>{
        navigate(-1)
    }

    return(
        <Principal>
            <Titulo> Painel de Viagens</Titulo>
            <Botoes>
                <button onClick={voltar}>Voltar</button>
                <button>Criar Viagem</button>
                <button onClick={inicio}>Logout</button>
            </Botoes>

        </Principal>
    )
}

export default AdminHomePage;