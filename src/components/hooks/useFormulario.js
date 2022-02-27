import React, { useState } from 'react'

export const useFormulario = (initialState = {}) => {

    const [inputs, setInputs] = useState(initialState)

    // funcion para interactuar los botones input y el estado capturamos en el estado lo ingresado en los input
    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;

        // se coloca parentesis antes de iniciar la funcion para que el return quede implisito

        setInputs((old) => ({
            ...old,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const reset = () => {
        setInputs(initialState)
    }


    return [inputs, handleChange, reset];
}
