import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Principal, Titulo, Botoes} from '../HomePage/HomePageStyled'
import {Formulario} from '../ApplicationFormPage/ApplicationFormPageStyled'
import axios from 'axios';
import { URL } from '../../constants/Url';
import useForm from '../../hooks/useForm';


function LoginPage () {
    const navigate = useNavigate();

    const voltar = () =>{
        navigate(-1)
    }
    
    const [login, onChange] = useForm ({email: "", password: ""});
    const entrar = () =>{
        navigate("/adm")
        axios.post(`${URL}darvas/login`, login)
        .then((response) => {console.log(response.data)})
        .catch((error) => {console.log(error)})

    }

    return(
        <Principal>
            <Titulo>Administrador</Titulo>
            <Formulario>
                <label htmlFor='email'>
                    Email:
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={login.email}
                        onChange={onChange}
                        placeholder="meuemail@exemplo.com"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        required
                    />
                </label>

                <label>
                    Senha:
                    <input 
                        id="password"
                        name="password"
                        type="password"
                        value={login.password}
                        onChange={onChange}
                        placeholder="********"
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