import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Principal, Titulo, Botoes} from '../HomePage/HomePageStyled'
import {Formulario} from '../ApplicationFormPage/ApplicationFormPageStyled'
import axios from 'axios';
import useForm from '../../hooks/useForm';



function LoginPage () {
    const navigate = useNavigate();

    const voltar = () =>{
        navigate('/')
    }
    
    const [loginUser, onChange] = useForm ({email: "", password: ""});
    
    
    // useEffect (() => {
    //     const token = localStorage.getItem("token")

    //     axios.post(`${URL}darvas/login`, login, token)
    //     .then((response) => {})
    //     .catch((error) => {console.log("não logou")})

    // })

        
    const Logar = (e) => {
        e.preventDefault();
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login",loginUser)
        .then(response => {
            localStorage.setItem("token", response.data.token)
            navigate("/adm")
        })
        .catch((error) => console.log(error.message))

    }
     
    return( 
        <Principal>
            <Titulo>Administrador</Titulo>
            <Formulario onSubmit={Logar}>
                <label htmlFor='email'>
                    Email:
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={loginUser.email}
                        onChange={onChange}
                        placeholder="meuemail@exemplo.com"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                        title="Please insert a valid email"
                        required
                    />
                </label>

                <label>
                    Senha:
                    <input 
                        id="password"
                        name="password"
                        type="password"
                        value={loginUser.password}
                        onChange={onChange}
                        placeholder="********"
                        pattern="^.{6,}" 
                        title='Minimo de 6 caracteres'
                        required
                    />
                </label>
                <Botoes>
                    <button onClick={voltar}>voltar</button>
                    <button type="submit">entrar</button>
                </Botoes>
            </Formulario>
    </Principal>  
    )
}

export default LoginPage;