import styled, { createGlobalStyle } from 'styled-components';

export const AppStyled = styled.div`
    display: flex;
    flex-direction:column;
    background-color: #F08080;
    width:400px;
    height:90vh;
    margin: 40px auto;
    align-items:center;
    justify-content:center;
    border-radius: 20px;

    .titulo{
        position: absolute;
        top: 45px;
       
    }
`

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }

`