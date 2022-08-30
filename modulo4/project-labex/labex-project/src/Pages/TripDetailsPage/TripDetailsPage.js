import axios from 'axios';
import React, {useState} from 'react';
import { URL } from '../../constants/Url';
import useForm from '../../hooks/useForm';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { useRequestData } from '../../hooks/useRequestData';
import { Botoes, Titulo } from '../HomePage/HomePageStyled';
import { ListContainer, TripsElements } from '../ListTripsPage/ListTripsPageStyled';


function TripDetailsPage () {
    useProtectedPage();
    
    const headers = {
        auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ikk0TDEzMDhwRFdRVFRrRTBON3hnIiwiZW1haWwiOiJnYWJyaWVsMTIzQGVtYWlsLmNvbSIsImlhdCI6MTY2MTU1MTI4NX0.ZOZ7yij7_XM0zPO5WTuCfbLxJvqAuMduyGl7u-MVqZk"
    }


    const [tripsList, setTripsList] = useState([])

    axios.get(`${URL}/trip/I4L1308pDWQTTkE0N7xg`, headers)
    .then((response) => {setTripsList(response.data.trip)})
    .catch((error) => console.log(error))

    const listTripDetail = tripsList && tripsList.trip && tripsList.trip.map((usuario) => {
        return(
            <ListContainer  key={usuario.id}>
                <TripsElements>
                    <p>Nome: {usuario.name}</p>
                    <p>Idade: {usuario.age}</p>
                    <p>Descrição: {usuario.applicationText}</p>
                    <p>País: {usuario.country}</p>
                </TripsElements>
            </ListContainer>
            
        )   
            
    })
     
    console.log(tripsList)
    
    return(
        <div>
            <Titulo>Lista de Candidatos </Titulo>
                  {listTripDetail}
            <Botoes>
                <button>Aprovar</button>
                <button>Reprovar</button>
            </Botoes>

        </div>
    )
    
}

export default TripDetailsPage;