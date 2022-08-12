import styled from 'styled-components';

export const Principal = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Botoes = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    height: 60px;
    flex-direction: row;
    button{
        padding: 6px;
        border-radius: 10px;
        margin: 15px 10px;
    }

    button:hover{
        cursor: pointer;
        background-color: darkgray;
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