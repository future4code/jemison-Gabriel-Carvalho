import styled from "styled-components";

export const ListContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    color: black;
    p{
        display: inline;
    }
    width: 40%;
    height: 200px;
    background-color: white;
    margin: 15px;
    border-radius: 10px;
`

export const TripsElements = styled.div `
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 55%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 10px;
`

export const MainList = styled.div `
    display: flex;
    height: 105vh;
    background-color:#708090;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`