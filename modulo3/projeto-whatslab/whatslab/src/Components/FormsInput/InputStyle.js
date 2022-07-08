import styled from 'styled-components'

export const Forms = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45%;
    height: 150px;
    position: absolute;
    bottom: 0px;
    
    input{
        width: 200px;
        height: 60px;
        margin: 10px;
        border: 0.5px solid black;
        border-radius: 15px;
    }

    .icone_enviar{
        width: 30px;
        height: 20px;
       
        
    }

    .icone_enviar:hover{
        width: 40px;
        height: 25px;
    }

    button{
        border: none;
        background-color: lightblue;
    }
`

