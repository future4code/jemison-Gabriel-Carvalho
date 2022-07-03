import styled from 'styled-components'


export const Forms = styled.div `
    width: 70%;
    height: 15%;
    position: absolute;
    bottom: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const Nome = styled.div `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100px;
    height: 60px;
    margin: 0 30px;
    
`
export const InputNome = styled.input  `
    width: 90px;
`

export const Mensagem = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100px;
    height: 60px;
    margin: 0 30px;
    
`

export const InputMensagem = styled.input `
    width: 200px;
    height: 20px;
`

export const Enviar = styled.div `
    width: 150px;
    height: 30px;
    display: flex;
    align-items: right;
    margin: 0 15%;
`
export const Botao = styled.button `
    background-color: lightgray;
    color: black;
    border: 1px solid white;
    padding: 5px;
    border-radius: 10px;
`