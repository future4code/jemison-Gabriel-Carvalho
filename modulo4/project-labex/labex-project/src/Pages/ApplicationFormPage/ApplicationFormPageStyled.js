import styled from "styled-components";

export const Formulario = styled.form`
    display: flex;
    width: 50%;
    height: 60%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
`

export const InputStyled = styled.input`
    display: flex;
    width: 500px;
    height: 30px;
    border-radius: 5px;
    padding: 5px;
    margin: 8px;
`

export const SelectStyled = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    select{
        width: 200px;
        height: 30px;
        border-radius: 10px;
    }

    select:hover{
        cursor: pointer;
        background-color: darkgray;
    }
`

export const InputContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 100px;
    margin:5px;

    input:hover{
        border: 1px solid red;
    }
`