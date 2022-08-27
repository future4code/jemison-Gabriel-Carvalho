import {useNavigate} from 'react-router-dom';
import React from 'react';
import { Botoes, Main, Titulo } from '../HomePage/HomePageStyled';
import { ListContainer, MainList, TripsElements } from './ListTripsPageStyled';
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
                <TripsElements>
                    <p>Nome: {usuario.name}</p>
                    <p>Planeta: {usuario.planet}</p>
                    <p>Descrição: {usuario.description}</p>
                    <p>Data: {usuario.date}</p>
                    <p>Duração da Viagem: {usuario.durationInDays}</p>
                </TripsElements>
            </ListContainer>
            
        )   
            
    })
     
    console.log(tripsList)
    
    return(
        <MainList>
            <Titulo>Lista de Viagens </Titulo>
            {isLoading && <h3>Carregando Viagens...</h3>}
            {!isLoading && error && <p>Ocorreu um erro ao carregar viagens</p>}
            {!isLoading && tripsList && tripsList.trips && tripsList.trips.length > 0 && listTrip}
            {!isLoading && tripsList && tripsList.trips && tripsList.trips.length === 0 && <p>Não há viagens</p>}       
            <Botoes>
                <button onClick={seInscrever}>Inscrever-se</button>
                <button onClick={voltar}>Voltar</button>
            </Botoes>

        </MainList>
    )
}

export default ListTripsPage;