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

export const SelectedContainer = styled.div`
    width: 500px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    select{
        width: 100%;
        height: 30px;
        border-radius: 5px;
    }

    select:hover{
        cursor: pointer;
        border: 1px solid red;
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