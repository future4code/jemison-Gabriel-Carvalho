import {useNavigate} from 'react-router-dom';
import React from 'react';
import { Botoes, Titulo } from '../HomePage/HomePageStyled';
import { ListContainer } from './ListTripsPageStyled';
import { useRequestData } from '../../hooks/useRequestData';
import { URL } from '../../constants/Url';

function ListTripsPage () {
    const navigate = useNavigate();
    const voltar = () =>{
        navigate(-1)
    }

    const navegar = useNavigate();


    const seInscrever = () =>{
        navegar("/trips/application")
    }

    const [tripsList, isLoading, error] = useRequestData(`${URL}/trips`)

    const listTrip = tripsList && tripsList.trips && tripsList.trips.map((usuario) => {
        return(
            <ListContainer key={usuario.id}>
                <p>{usuario.name}</p>
                <li>{usuario.planet}</li>
                <li>{usuario.description}</li>
            </ListContainer>
            
        )   
            
    })
     
    console.log(tripsList)
    
    return(
        <div>
            <Titulo>Lista de Viagens </Titulo>
            {isLoading && <Titulo>Carregando Viagens...</Titulo>}
            {!isLoading && error && <p>Ocorreu um erro ao carregar viagens</p>}
            {!isLoading && tripsList && tripsList.trips && tripsList.trips.length > 0 && listTrip}
            {!isLoading && tripsList && tripsList.trips && tripsList.trips.length === 0 && <p>Não há viagens</p>}       
            <Botoes>
                <button onClick={seInscrever}>Inscrever-se</button>
                <button onClick={voltar}>voltar</button>
            </Botoes>

        </div>
    )
}

export default ListTripsPage;