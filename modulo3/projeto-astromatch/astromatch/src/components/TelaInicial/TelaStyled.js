import styled from 'styled-components';

export const Card = styled.div `
    display: flex;
    width: 400px;
    height: 400px;
    margin-top: 60px;
    flex-direction:column;
    justify-content: center;
    background-color: #F08080;
`

export const ImagemCard = styled.div `
    display: flex;
    width: 100%;
    align-items:center;
    justify-content:center;
` 

export const Imagem = styled.img`
    display: flex;
    width:300px;
    height:250px;
    align-items:center;
    justify-content:center;
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

export const IconeX = styled.img `
    width: 60px;
    height: 60px;
    background-color:#F08080;
`

export const IconeCoracao = styled.img` 
    width: 40px;
    height: 40px;
`

