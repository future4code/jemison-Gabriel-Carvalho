import axios from 'axios';
import { useEffect, useState} from 'react';
import { URL } from '../constants/Url';

function useGetTrips() {

    const [viagens, setViagens] = useState([])

    useEffect(() => {
        axios.get(`${URL}:aluno/trips`)
        .then((response) => { setViagens(response.data)})
        .catch((error) => {console.log(error)})
    }, [])
    
    return viagens
}

export default useGetTrips;