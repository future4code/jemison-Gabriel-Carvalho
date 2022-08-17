import axios from 'axios';
import { useEffect, useState} from 'react';
import { URL } from '../constants/Url';

function useCapturarViagens() {

    const [viagens, setViagens] = useState([])

    useEffect(() => {
        axios.get(`${URL}:aluno/trips`).then((response) => {setViagens(response.data)})
    })
    
    console.log(viagens)
    return viagens
}

export default useCapturarViagens;