import styled from 'styled-components';

export const Main = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #708090;
`

export const Botoes = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    height: 60px;
    flex-direction: row;
    button{
        width: 150px;
        height: 42px;
        padding: 10px;
        border-radius: 15px;
        margin: 20px 10px;
        background-color:#cd5c5c;
        color: white;
    }

    button:hover{
        cursor: pointer;
    }

`

export const Titulo = styled.h1`
    width: 100%;
    height: auto;
    margin: 20px;
    align-items: center;
    font-size: 35px;
    font-family: 'Times New Roman', Times, serif;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TituloSelect = styled.h4 `
    width: 100%;
    height: auto;
    margin: 20px;
    align-items: center;
    font-size: 15px;
    font-family: 'Arial', Times, serif;
    display: flex;
    align-items: center;
    justify-content: center;
` 