import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { Botoes, Principal, Titulo } from "../HomePage/HomePageStyled";
import { Formulario } from "./ApplicationFormPageStyled";
import axios from 'axios';
import { URL } from "../../constants/Url";

function ApplicationFormPage () {
    const navigate = useNavigate();

    

    const voltar = () =>{
        navigate(-1)
    }
    
    const headers = {
        "content-type": "application/json",
        "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T2g5ZWo2bW50akZqNUNRMVB4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1ODk1NjI5MDh9.aB4dNbTCkToXB7pdzEa-tuMa-QbRQDUd93eva4-cec0"
    }
    
    const criarViagem = (e) => {
        e.preventDefault();
        axios.post(`${URL}aluno/trips`, body, headers)
        .then((response) =>{console.log(response.data)})
        .catch((error) => {console.log(error)})
    }

    const [body, onChange] = useForm({name: "", age: "", profession: "", description: "", country: ""})

    return (

        <Principal>
            <Titulo>Se candidate para uma viagem</Titulo>
            <Formulario>


                <label htmlFor="name">
                    Nome:
                    <input
                        id="name"
                        name="name"
                        type="text" 
                        pattern="(?=^.{5,60}$)^[A-Z][a-z]+(?:[ ][A-Z][a-z]+)*$"
                        value={body.name}
                        onChange={onChange}
                        required
                    />
                </label>

                <label htmlFor="age">
                    Idade:
                    <input
                        id="age"
                        name="age"
                        type="age"
                        value={body.age}
                        onChange={onChange}
                        required
                    />
                </label>

                <label htmlFor="profession">
                    Profissão:
                    <input 
                        id="profession"
                        name="profession"
                        type="text"
                        value={body.profession}
                        onChange={onChange}

                    />
                
                </label>
               

                <label htmlFor="description">
                    Descrição:
                    <input
                        id="description"
                        name="description"
                        type="text"
                        pattern="^.{3,}"
                        value={body.description}
                        onChange={onChange}
                    />
                </label>

                <select> 
                    <option>Países</option>

                </select>


            <Botoes>
                <button onClick={voltar}>voltar</button>
                <button onClick={criarViagem}>enviar</button>
            </Botoes>
            </Formulario>
        </Principal>  
    )
}

export default ApplicationFormPage;