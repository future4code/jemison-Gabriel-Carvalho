import axios from "axios";
import React, { useEffect, useState } from "react";
import {TelaUsuarios} from './Styled'


function Cadastro () {
    const [renderizar, setRenderizar] = useState([])
    const [inputNome, setInputNome] = useState('')
    const [inputEmail, setInputEmail] = useState('')

    const ListaUsuarios = renderizar.map((usuario, index) => {
        return (
        
            <TelaUsuarios key={index}>
                {usuario.name}
            </TelaUsuarios>
        )
    })

    useEffect(() =>{
        todosUsuarios()
    }, [])

    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

    const serviceHeaders = {
        headers :{
            Authorization: "gabriel-carvalho-jemison"
        }
    }

    const body = {
        "name": inputNome,
        "email": inputEmail
    }

    const postUsuario = (e) => {
        e.preventDefault();

        axios.post(url, body, serviceHeaders)
        .then((response) => {
            alert(`${inputNome} cadastrado(a) com sucesso`)
            todosUsuarios()
        })
        .catch((error) =>{
            console.log(error.response)
            alert('Ocorreu um erro, tente novamente')
        })

        setInputNome('')
        setInputEmail('')
    }

    const todosUsuarios = () =>{
    
        axios.get(url, serviceHeaders)
        .then((response) =>{
           setRenderizar(response.data)
        })
        .catch((error) => {
           console.log(error.response)
        })
    }

    return(
        <div>
            <form>
                <h1>Preencha seus dados abaixo</h1>
                <input
                    type="text"
                    placeholder="nome completo"
                    value={inputNome}
                    onChange={((e) =>{setInputNome(e.target.value)})}
                />
                <input
                    type="email"
                    placeholder="meuemail@hotmail.com"
                    value={inputEmail}
                    onChange={((e) =>{setInputEmail(e.target.value)})}
                />
                
                <button onClick={postUsuario}>Cadastrar</button>
            </form>
            {ListaUsuarios}
            
        </div>
    )
}

export default Cadastro;