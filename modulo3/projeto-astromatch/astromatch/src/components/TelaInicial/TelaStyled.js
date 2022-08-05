import styled from 'styled-components';

export const Card = styled.div `
    display: flex;
    width: 340px;
    height: 340px;
    margin-top: 60px;
    flex-direction:column;
    justify-content: center;
    div {
        background-color:#F08080;
    }
`


export const Imagem = styled.img`
    width:320px;
    height:300px;
    border-radius:5px;
    box-shadow:5px 1px 5px black;
`

export const Descricao = styled.div `
    text-align:center;
    margin: 10px;
`

export const Botao = styled.div `
    display: flex;
    justify-content: space-around;
    button {
        border: none;
        background-color:#F08080;
    }

    button:hover{
        cursor: pointer;
    }
`

export const Icone = styled.img `
    width: 40px;
    height: 40px;
    background-color:#F08080;
`

