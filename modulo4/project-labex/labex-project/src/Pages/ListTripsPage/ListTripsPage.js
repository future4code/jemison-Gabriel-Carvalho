import {useNavigate} from 'react-router-dom';
import React from 'react';
import { Botoes, Titulo } from '../HomePage/HomePageStyled';

function ListTripsPage () {
    const navigate = useNavigate();
    const voltar = () =>{
        navigate(-1)
    }

    const navegar = useNavigate();


    const seInscrever = () =>{
        navegar("/trips/application")
    }

    return(
        <div>
            <Titulo>Viagens </Titulo>       
            <Botoes>
                <button onClick={seInscrever}>Inscrever-se</button>
                <button onClick={voltar}>voltar</button>
            </Botoes>

        </div>
    )
}

export default ListTripsPage;