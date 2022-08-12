import React from "react";
import { useNavigate } from "react-router-dom";
import { Botoes, Principal, Titulo } from "../HomePage/HomePageStyled";
import { Formulario } from "./ApplicationFormPageStyled";

function ApplicationFormPage () {
    const navigate = useNavigate();

    const enviar = () =>{
        alert('cadastrado')
    }

    const voltar = () =>{
        navigate(-1)
    }


    return (
        <Principal>
            <Titulo>Formulário</Titulo>
            <Formulario>
                <label>
                    Nome:
                    <input 
                        type="text"
                        placeholder="nome"
                    />
                </label>

                <label>
                    Idade:
                    <input 
                        placeholder="insira sua idade"
                    />
                </label>

                <label>
                    Paises:
                    <input 
                        
                    />
                </label>
                <Botoes>
                <button onClick={voltar}>voltar</button>
                <button onClick={enviar}>enviar</button>
            </Botoes>
            </Formulario>
        </Principal>  
    )
}

export default ApplicationFormPage;