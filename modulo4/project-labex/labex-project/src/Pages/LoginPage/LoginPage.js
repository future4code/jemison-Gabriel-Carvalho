import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Titulo, Botoes, Main} from '../HomePage/HomePageStyled'
import {Formulario, InputStyled} from '../ApplicationFormPage/ApplicationFormPageStyled'
import axios from 'axios';
import useForm from '../../hooks/useForm';
import { useProtectedPage } from '../../hooks/useProtectedPage';



function LoginPage () {
    useProtectedPage();

    const navigate = useNavigate();

    const voltar = () =>{
        navigate('/')
    }
    
    const [loginUser, onChange] = useForm ({email: "", password: ""});
        
    const Logar = (e) => {
        e.preventDefault();

        const options = {
            method: 'POST',
            url: 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-carvalho/login',
            headers: {'Content-Type': 'application/json'},
            data: loginUser
          };
          
          axios.request(options).then(function (response) {
            localStorage.setItem("token", response.data.token)
            navigate("/adm")
          }).catch(function (error) {
            console.error(error);
          });

    }
     
    return( 
        <Main>
            <Titulo>Administrador</Titulo>
            <Formulario onSubmit={Logar}>
                <label htmlFor='email'>
                    <InputStyled
                        id="email"
                        name="email"
                        type="email"
                        value={loginUser.email}
                        onChange={onChange}
                        placeholder="Meuemail@exemplo.com"
                        
                        title="Please insert a valid email"
                        
                    />
                </label>

                <label htmlFor="password">
                    <InputStyled
                        id="password"
                        name="password"
                        type="password"
                        value={loginUser.password}
                        onChange={onChange}
                        placeholder="********"
                        pattern="^.{6,}" 
                        title='Minimo de 6 caracteres'
                        
                    />
                </label>
                <Botoes>
                    <button onClick={voltar}>voltar</button>
                    <button onClick={Logar}>entrar</button>
                </Botoes>
            </Formulario>
    </Main>  
    )
}

export default LoginPage;