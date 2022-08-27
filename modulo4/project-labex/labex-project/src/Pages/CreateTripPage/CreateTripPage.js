import React from 'react';
import { Formulario, InputContainer, InputStyled, SelectedContainer } from '../ApplicationFormPage/ApplicationFormPageStyled';
import { Botoes, Main, Titulo } from '../HomePage/HomePageStyled';
import {useProtectedPage} from '../../hooks/useProtectedPage'
import useForm from '../../hooks/useForm';
import axios from 'axios';
import { URL } from '../../constants/Url';
import { ListPlanets } from '../../constants/Planets';
import { useNavigate } from 'react-router-dom';


function CreateTripPage () {
    useProtectedPage();

    const navigate = useNavigate();

    const [form, onChange] = useForm(
        {
        name: "",
        date: "",
        description: "",
        durationInDays: '',
        planet: ""
    })

    const createTrip = (e) => {
        e.preventDefault();

        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: Number(form.durationInDays)
        }


        const options = {
            method: 'POST',
            url: 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-carvalho/trips',
            headers: {
              'Content-Type': 'application/json',
              auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ikk0TDEzMDhwRFdRVFRrRTBON3hnIiwiZW1haWwiOiJnYWJyaWVsMTIzQGVtYWlsLmNvbSIsImlhdCI6MTY2MTQ3NDY3MH0.inKxAQWpYCi71UCTUgoNgR3fwaUVghEjugEpOdVMt6E'
            },
            data: body
          };
          
          axios.request(options).then(function (response) {
            console.log(response.data)
            alert('Viagem criada!');
          }).catch(function (error) {
            console.error(error);
          });
        
        
    }

    const voltar = () =>{
        navigate(-1)
    }

    console.log(form)
    return(
        <Main>
            <Titulo> Criar viagem</Titulo>
            <Formulario onSubmit={createTrip}>
                <InputContainer >
                    <label htmlFor="name">
                        <InputStyled 
                            placeholder='Nome'
                            name="name"
                            type="text" 
                            value={form.name}
                            onChange={onChange}
                            pattern={"^.{10,}"}
                            required
                        />
                    </label>
                </InputContainer>

                <InputContainer >
                    <label  name="date" htmlFor="date">
                        <InputStyled 
                            name="date"
                            type="date" 
                            onChange={onChange}
                            required
                        />
                    </label>
                </InputContainer>

                <InputContainer >
                    <label htmlFor="description">
                        <InputStyled 
                            placeholder='Descrição da viagem'
                            name="description"
                            type="text" 
                            value={form.description}
                            onChange={onChange}
                            required
                        />
                    </label>
                </InputContainer>

                <InputContainer >
                    <label htmlFor="durationInDays">
                        
                        <InputStyled 
                            placeholder='Duração em dias'
                            name="durationInDays"
                            type="number" 
                            value={form.durationInDays}
                            onChange={onChange}
                            required
                        />
                    </label>
                </InputContainer>

                <SelectedContainer> 
                    <select name="planet" onChange={onChange}>
                        {ListPlanets}
                    </select>
                </SelectedContainer>
                 
                 <Botoes>
                    <button onClick={voltar}>voltar</button>
                    <button>criar</button>
                </Botoes>
            
            </Formulario>


        </Main>
    )
}

export default CreateTripPage;