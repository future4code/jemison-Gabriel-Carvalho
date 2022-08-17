import { useState } from "react";

export default function useForm(initialState) {

    const [formulario, setFormulario] = useState(initialState)

    const onChange = (event) => {
        const {name, value} = event.target;
        setFormulario({...formulario, [name]: value})
    }

    return [formulario, onChange]

}