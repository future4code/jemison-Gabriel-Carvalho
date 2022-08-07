import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Card, ContainerMatch } from "./TelaMatchsStyled";

function TelaMatchs (props) {
    
    const [matchs, setMatchs] = useState([])

    const pegarMatchs = () =>{
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches')
        .then((response) => setMatchs(response.data.matches))
        .catch((error) => console.log(error.response.data))
    }

    useEffect(() =>{
        pegarMatchs()
    }, [])


    const limparMatchs = () => {
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear')
        .then((response) => pegarMatchs())
        .catch((error) => alert('error'))
    }
    
    return(
        <ContainerMatch>
            <h1>Seus Matchs</h1>
            {matchs.map((item) => {
                return (
                    <Card key={item.id}>
                        <h3>{item.name}</h3>  
                        <img src={item.photo}  alt={item.name}/>
                    </Card>

                )
            })}
            <button onClick={()=> props.rendererizar("inicial")}>Voltar</button>
            <button onClick={limparMatchs()}>Limpar</button>

        </ContainerMatch>
    )
}

export default TelaMatchs;