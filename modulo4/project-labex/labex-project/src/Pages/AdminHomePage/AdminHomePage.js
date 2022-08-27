import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { URL } from '../../constants/Url';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import {Botoes, Main, Titulo} from '../HomePage/HomePageStyled'
import ListTripsPage from '../ListTripsPage/ListTripsPage';
import TripDetailsPage from '../TripDetailsPage/TripDetailsPage';

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
        <Main>
            <Titulo> Painel de Viagens</Titulo>

            <Botoes>
                <button onClick={voltar}>Voltar</button>
                <button onClick={CriarViagem}>Criar Viagem</button>
                <button onClick={inicio}>Logout</button>
            </Botoes>

            <TripDetailsPage/>
        </Main>
    )
}

export default AdminHomePage;