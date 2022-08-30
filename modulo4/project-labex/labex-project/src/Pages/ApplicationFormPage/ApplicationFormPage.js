import axios from "axios";
import { useNavigate } from "react-router-dom";
import { URL } from "../../constants/Url";
import useForm from "../../hooks/useForm";
import { Botoes, Main,Titulo } from "../HomePage/HomePageStyled";
import { Formulario, InputContainer, InputStyled, SelectContainer, SelectedContainer } from "./ApplicationFormPageStyled"
import { useRequestData } from "../../hooks/useRequestData";
import { ListContainer } from "../ListTripsPage/ListTripsPageStyled";
import {ListCountries} from '../../constants/Countries'

function ApplicationFormPage () {
    const navigate = useNavigate();

    

    const voltar = () =>{
        navigate(-1)
    }
    

    

    const [form, onChange] = useForm({
        id: "",
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: "",
    })

    const [tripsList] = useRequestData(`${URL}/trips`)

    const tripSelect = tripsList && tripsList.trips.map((viagem, index) => {
        return <option value={viagem.id}>{viagem.name}</option>

    })

    const registerTrip = (e) =>{
        e.preventDefault();
        const body = {
            id: form.id,
            name: form.name,
            age: Number(form.age),
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country
        }
        
        const headers = {
        
            "Content-Type": "application/json"
        }

        axios.post(`${URL}/trips/${form.id}/apply`, body)
        .then((response) => { alert("Viagem cadastrada!")})
        .catch((error) => {console.log(error)})
        console.log(body)
        console.log(form)
    }

    

    return (

        <Main>
            <Titulo>Se candidate para uma viagem</Titulo>
            <Formulario onSubmit={registerTrip}>

                <SelectedContainer>
                    <select name="id" onChange={onChange}>
                        {tripSelect}
                    </select>
                </SelectedContainer>
                
                <InputContainer>
                    <label htmlFor="name">
                        <InputStyled
                            id="name"
                            placeholder="Nome completo"
                            name="name"
                            type="text" 
                            value={form.name}
                            onChange={onChange}
                            pattern="(?=^.{3,60}$)^[A-Z][a-z]+(?:[ ][A-Z][a-z]+)*$" 
                            title="Please insert a valid name"
                            required
                        />
                    </label>
                </InputContainer>

                <InputContainer>
                    <label htmlFor="age">
                        <InputStyled
                            id="age"
                            placeholder="Idade"
                            name="age"
                            type="number"
                            value={form.age}
                            onChange={onChange}
                            required
                        />
                    </label>
                </InputContainer>

                <InputContainer>
                    <label htmlFor="applicationText">
                        <InputStyled
                            id="applicationText"
                            placeholder="Texto do candidato"
                            name="applicationText"
                            type="text"
                            pattern="^.{30,}"
                            title="minimum of 30 characters"
                            value={form.applicationText}
                            onChange={onChange}
                            required
                        />
                    </label>
                </InputContainer>
                
                <InputContainer>
                    <label htmlFor="profession">
                        <InputStyled
                            id="profession"
                            placeholder="Profissão"
                            name="profession"
                            type="text"
                            value={form.profession}
                            onChange={onChange}
                            pattern="^.{10,}"
                            title="minimum of 10 characters"
                            required
                        />
                    
                    </label>
                </InputContainer>


                <SelectedContainer>
                    <select name="country" onChange={onChange}>
                        {ListCountries}
                    </select>
                </SelectedContainer>

                <Botoes>
                    <button onClick={voltar}>Voltar</button>
                    <button>Enviar</button>
                </Botoes>
            </Formulario>
        </Main>  
    )
}

export default ApplicationFormPage;