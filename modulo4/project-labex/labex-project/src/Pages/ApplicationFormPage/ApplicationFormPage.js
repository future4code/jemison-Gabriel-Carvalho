import axios from "axios";
import React, { useEffect, useState } from "react"
import Select from 'react-select'
import { useNavigate } from "react-router-dom";
import { URL } from "../../constants/Url";
import useForm from "../../hooks/useForm";
import { Botoes, Main,Titulo } from "../HomePage/HomePageStyled";
import { Formulario, InputContainer, InputStyled, SelectContainer, SelectedContainer } from "./ApplicationFormPageStyled"
import { useRequestData } from "../../hooks/useRequestData";
import { ListContainer } from "../ListTripsPage/ListTripsPageStyled";
import {ListCountries} from '../../constants/Countries'

function ApplicationFormPage () {
    const navigate = useNavigate();

    

    const voltar = () =>{
        navigate(-1)
    }
    

    const [tripsS] = useRequestData(`${URL}/trips`)
    

    const [form, onChange] = useForm({
        name: "",
        age: Number(null),
        applicationText: "",
        profession: "",
        country: "",
    })

    const registerTrip = (e) =>{
        e.preventDefault();
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country
        }
        
        const headers = {
        
            "content-type": "application/json"
        }

        axios.post(`${URL}/trips/
        NoIFVcOiSgTKTIPVZwXS/apply`, body, headers)
        .then((response) => { alert("Viagem cadastrada!")})
        .catch((error) => {console.log(error)})
    }

    return (

        <Main>
            <Titulo>Se candidate para uma viagem</Titulo>
            <Formulario>

               
               <InputContainer>
                    <label htmlFor="name">
                        <InputStyled
                            id="name"
                            placeholder="Nome completo"
                            name="name"
                            type="text" 
                            value={form.name}
                            onChange={onChange}
                            pattern="(?=^.{3,60}$)^[A-Z][a-z]+(?:[ ][A-Z][a-z]+)*$" title="Please insert a valid name"
                            required
                        />
                    </label>
                </InputContainer>

                <InputContainer>
                    <label htmlFor="age">
                        <InputStyled
                            id="age"
                            placeholder="Idade"
                            name="age"
                            type="number"
                            value={form.age}
                            onChange={onChange}
                            required
                        />
                    </label>
                </InputContainer>

                <InputContainer>
                    <label htmlFor="applicationText">
                        <InputStyled
                            id="applicationText"
                            placeholder="Texto do candidato"
                            name="applicationText"
                            type="text"
                            pattern="^.{30,}"
                            title="minimum of 30 characters"
                            value={form.applicationText}
                            onChange={onChange}
                            required
                        />
                    </label>
                </InputContainer>
                
                <InputContainer>
                    <label htmlFor="profession">
                        <InputStyled
                            id="profession"
                            placeholder="Profissão"
                            name="profession"
                            type="text"
                            value={form.profession}
                            onChange={onChange}
                            pattern="^.{10,}"
                            title="minimum of 10 characters"
                            required
                        />
                    
                    </label>
                </InputContainer>


                <SelectedContainer>
                    <select name="country" onChange={onChange}>
                        {ListCountries}
                    </select>
                </SelectedContainer>

                <Botoes>
                    <button onClick={voltar}>voltar</button>
                    <button type="submit" onClick={registerTrip}>enviar</button>
                </Botoes>
            </Formulario>
        </Main>  
    )
}

export default ApplicationFormPage;