import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { URL } from "../../constants/Url";
import useForm from "../../hooks/useForm";
import { Botoes, Principal, Titulo } from "../HomePage/HomePageStyled";
import { Formulario, InputContainer, InputStyled, SelectStyled } from "./ApplicationFormPageStyled";
// import { URL } from "../../constants/Url";

function ApplicationFormPage () {
    const navigate = useNavigate();

    

    const voltar = () =>{
        navigate(-1)
    }
    
    const register = (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token")

        const headers = {
            auth: token
        }

        axios.post(`${URL}:darvas/trips`, body, headers)
        .then((response) => localStorage.setItem("token", response.data.token))
        .catch((error) => error)
    
    }

    const [body, onChange] = useForm({name: "", age: "", applicationText: "", profession: "", country: ""})

    return (

        <Principal>
            <Titulo>Se candidate para uma viagem</Titulo>
            <Formulario onSubmit={register}>

               
               <InputContainer>
                    <label htmlFor="name">
                        Nome:
                        <InputStyled
                            id="name"
                            name="name"
                            type="text" 
                            value={body.name}
                            onChange={onChange}
                            pattern="(?=^.{5,60}$)^[A-Z][a-z]+(?:[ ][A-Z][a-z]+)*$" title="digite um nome válido"
                            required
                        />
                    </label>
                </InputContainer>

                <InputContainer>
                    <label htmlFor="age">
                        Idade:
                        <InputStyled
                            id="age"
                            name="age"
                            value={body.age}
                            onChange={onChange}
                            required
                        />
                    </label>
                </InputContainer>

                <InputContainer>
                    <label htmlFor="applicationText">
                        Escreva o que te motiva:
                        <InputStyled
                            id="applicationText"
                            name="applicationText"
                            type="text"
                            pattern="^.{3,}"
                            value={body.applicationText}
                            onChange={onChange}
                        />
                    </label>
                </InputContainer>
                
                <InputContainer>
                    <label htmlFor="profession">
                        Profissão:
                        <InputStyled
                            id="profession"
                            name="profession"
                            type="text"
                            value={body.profession}
                            onChange={onChange}

                        />
                    
                    </label>
                </InputContainer>


                <SelectStyled> 
                    <select>
                        <option selected>Escolha um país</option>
                        <option>1</option>
                        <option>2</option>
                    </select>

                </SelectStyled>


            <Botoes>
                <button onClick={voltar}>voltar</button>
                <button type="submit">enviar</button>
            </Botoes>
            </Formulario>
        </Principal>  
    )
}

export default ApplicationFormPage;