import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL } from "../../constants/Url";
import useForm from "../../hooks/useForm";
import { Botoes, Main,Titulo } from "../HomePage/HomePageStyled";
import { Formulario, InputContainer, InputStyled, SelectStyled } from "./ApplicationFormPageStyled"

function ApplicationFormPage () {
    const navigate = useNavigate();

    

    const voltar = () =>{
        navigate(-1)
    }
    
    const[trip, setTrip] = useState([]);

    useEffect(() => {
        axios.get(`${URL}gabriel/trips`).then((response) =>{ setTrip(response.data.trips)}) 
    })

    const [form, onChange] = useForm({
        name: "",
        age: 0,
        applicationText: "",
        profession: "",
        country: "",
        trip: null
    })

    
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
                            value={form['name']}
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
                            type="text"
                            value={form['age']}
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
                            value={form['applicationText']}
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
                            value={form['profession']}
                            onChange={onChange}
                            pattern="^.{10,}"
                            title="minimum of 10 characters"
                            required
                        />
                    
                    </label>
                </InputContainer>


                <SelectStyled> 
                    <select>
                        {trip.map((trips) => {
                            return(
                                <>
                                
                                    <label value={trips}>{trips.name}</label>
                               
                                </>
                                )})}
                    </select>
                </SelectStyled>

            <Botoes>
                <button onClick={voltar}>voltar</button>
                <button type="submit">enviar</button>
            </Botoes>
            </Formulario>
        </Main>  
    )
}

export default ApplicationFormPage;