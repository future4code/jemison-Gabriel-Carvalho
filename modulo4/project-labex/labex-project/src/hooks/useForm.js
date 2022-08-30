import { useState } from "react";

export default function useForm(initialState) {

    const [form, setForm] = useState(initialState)

    const onChange = (event) => {
        const newValue = event.target.value;
        const Name = event.target.name
        
        setForm({...form, [Name] : newValue})
    }

    return [form, onChange]

}