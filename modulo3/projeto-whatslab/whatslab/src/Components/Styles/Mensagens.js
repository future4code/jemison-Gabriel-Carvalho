import styled from "styled-components";

export const Tela = styled.div `
    display: flex;
    width: 70%;
    height: 530px;
    background-color: white;
    align-items: flex-end;
    margin: 0 auto;
    border-radius: 20px;
` 

export const Fundo = styled.div `
    display: flex;
    flex-wrap: wrap;
    align-items:flex-end ;
    justify-content: center ;
    width: 40%;
    height: 100%;
    background-color: lightblue;
`


export const Texto = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: center ;
    width: 140px;
    height: 60px;
    background-color: white;
    border-radius: 12px ;
    margin: 10px;

    .nome{
        margin: 10px;
        text-align: left;
        font-weight: bolder ;
    }
`