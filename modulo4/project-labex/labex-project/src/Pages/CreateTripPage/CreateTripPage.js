import React from 'react';
import { Formulario, InputContainer, InputStyled } from '../ApplicationFormPage/ApplicationFormPageStyled';
import { Botoes, Main, Titulo } from '../HomePage/HomePageStyled';
import {useProtectedPage} from '../../hooks/useProtectedPage'
import useForm from '../../hooks/useForm';


function CreateTripPage () {
    useProtectedPage();

    const [body, onChange] = useForm({name: "", date: "", description: "", durationInDays: ""})

    return(
        <Main>
            <Titulo> Criar viagem</Titulo>
            <Formulario onSubmit="">
                <InputContainer >
                    <label htmlFor="name">
                        Nome:
                        <InputStyled 
                            id="name"
                            name="name"
                            type="text" 
                            value={body.name}
                            onChange={onChange}
                            required
                        />
                    </label>
                </InputContainer>

                {/*select com planetas*/}

                <InputContainer >
                    <label htmlFor="date">
                        Data
                        <InputStyled 
                            id="date"
                            name="date"
                            type="date" 
                            value={''}
                            onChange={''}
                            required
                        />
                    </label>
                </InputContainer>

                <InputContainer >
                    <label htmlFor="description">
                        Descrição:
                        <InputStyled 
                            id="name"
                            name="name"
                            type="text" 
                            value={''}
                            onChange={''}
                            required
                        />
                    </label>
                </InputContainer>

                <InputContainer >
                    <label htmlFor="durationInDays">
                        Duração em dias:
                        <InputStyled 
                            id="durationInDays"
                            name="durationInDays"
                            type="text" 
                            value={''}
                            onChange={''}
                            required
                        />
                    </label>
                </InputContainer>

                <Botoes>
                    <button>criar</button>
                </Botoes>
            </Formulario>
        </Main>
    )
}

export default CreateTripPage;