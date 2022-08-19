import {useNavigate} from 'react-router-dom';
import React from 'react';
import { Botoes, Titulo } from '../HomePage/HomePageStyled';
import useGetTrips from '../../hooks/useGetTrips';
import { ListContainer } from './ListTripsPageStyled';

function ListTripsPage () {
    const navigate = useNavigate();
    const voltar = () =>{
        navigate(-1)
    }

    const navegar = useNavigate();


    const seInscrever = () =>{
        navegar("/trips/application")
    }

    const viagens = useGetTrips();

    
    

    return(
        <div>
            <Titulo>Lista de Viagens </Titulo>       
            {/* {[viagens].map((usuario, key) => {
                return (
                <ListContainer key={key}>
                    <li>{viagens.trips.name}</li>
                   
                </ListContainer>
                )
            })} */}
            <Botoes>
                <button onClick={seInscrever}>Inscrever-se</button>
                <button onClick={voltar}>voltar</button>
            </Botoes>

        </div>
    )
}

export default ListTripsPage;