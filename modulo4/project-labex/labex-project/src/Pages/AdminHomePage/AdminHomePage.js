import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import {Botoes, Principal, Titulo} from '../HomePage/HomePageStyled'

function AdminHomePage () {
    useProtectedPage();
    const navigate = useNavigate();
    
    const voltar = () =>{
        navigate(-1)
    }

    const inicio = () =>{
        navigate(-1)
        localStorage.clear()
    }

    const CriarViagem = () => {
        navigate('/adm/trips/create')
    }

    return(
        <Principal>
            <Titulo> Painel de Viagens</Titulo>
            <Botoes>
                <button onClick={voltar}>Voltar</button>
                <button onClick={CriarViagem}>Criar Viagem</button>
                <button onClick={inicio}>Logout</button>
            </Botoes>

        </Principal>
    )
}

export default AdminHomePage;