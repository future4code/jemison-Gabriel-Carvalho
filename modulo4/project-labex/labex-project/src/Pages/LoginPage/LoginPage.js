import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Principal, Titulo, Botoes} from '../HomePage/HomePageStyled'
import {Formulario} from '../ApplicationFormPage/ApplicationFormPageStyled'


function LoginPage () {
    const navigate = useNavigate();

    const voltar = () =>{
        navigate(-1)
    }

    const entrar = () =>{
        navigate("/adm")
    }

    return(
        <Principal>
            <Titulo>Administrador</Titulo>
            <Formulario>
                <label>
                    Email:
                    <input 
                        type="text"
                        placeholder="meuemail@exemplo.com"
                    />
                </label>

                <label>
                    Senha:
                    <input 
                        placeholder="insira sua senha"
                    />
                </label>
                <Botoes>
                    <button onClick={voltar}>voltar</button>
                    <button onClick={entrar}>entrar</button>
                </Botoes>
            </Formulario>
    </Principal>  
    )
}

export default LoginPage;