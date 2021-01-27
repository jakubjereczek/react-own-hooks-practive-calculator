import React, { useState } from 'react';
import { useInputsValueContext } from '../contexts/InputsValueContext'

const Input = (props) => {

    const [value, setValue] = useState("");
    const { newValue } = useInputsValueContext();

    const changeInputHandler = (event) => {
        setValue(event.target.value);
        const obj = {
            id: event.target.className,
            value: event.target.value
        }
        newValue(obj);
    };

    return (
        <input onChange={changeInputHandler} {...props} value={value} />
    )
}

export default Input;