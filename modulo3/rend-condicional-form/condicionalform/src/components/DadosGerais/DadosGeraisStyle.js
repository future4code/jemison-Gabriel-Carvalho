import styled from "styled-components";


export const Principal = styled.div `
    display: flex ;
    width: 100% ;
    height: 100vh;
    align-items: center ;
    background-color:#9400D3;
   

    

`

export const Titulo = styled.h1`
    position:  absolute;
    top: 0%;
    margin-left: 40%;
   
    
    font-weight: bold;
    color: black;

`

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 80%;
    max-width: 600px ;
    height: 500px;
    max-height: 600px;
    margin: 0 auto;
    background-color: white;
    border-radius: 10px ;

    div{
        margin: 10px 20px;
    }

    input{
        height: 20px;
        margin: 3px;
        border: 1px solid black;
        border-radius: 5px;
    }

    .nome{
        input{
            width: 200px ;
        }
    }

    .idade{
        input{
            width: 30px ;
        }
    }

    .email {
        input{
            width: 200px;
        }
    }

`