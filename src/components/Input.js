import React, { useState, useEffect } from 'react';
import { useInputsValueContext } from '../contexts/InputsValueContext'

const Input = (props) => {

    const id = props.class;

    const [value, setValue] = useState("");
    const { newValue, inputValues } = useInputsValueContext();

    const changeInputHandler = (event) => {
        let value = event.target.value;
        setValue(value);
        const obj = {
            id: event.target.className,
            value: value
        }
        newValue(obj);
    };

    // hmm
    useEffect(() => {
        inputValues.forEach(element => {
            if (element.id == id) {
                console.log('zwracam ' + element.value);
                return setValue(element.value);
            }
        });
        //setValue(0);

    }, []);

    return (
        <input onChange={changeInputHandler} {...props} value={value} />
    )
}

export default Input;