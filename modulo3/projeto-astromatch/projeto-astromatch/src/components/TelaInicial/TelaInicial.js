import React, { useEffect, useState } from "react";
import {Card} from './TelaStyled';
import axios from 'axios';

function TelaInicial () {

    const [perfil, setPerfis] = useState([])

    const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person'



    function ProfileChoose () {
        axios.get(url)
        .then((response) => {
            setPerfis(response.data)
            
            
        })
        .catch((error) => {
            console.log(error.response)
        })
    }


    useEffect (() => {
        ProfileChoose()
    }, [])
    
    


   

    return(
        <div>
            
            <Card>
                <h1>aa</h1>
            </Card>
       </div>
        
    )
}

export default TelaInicial;