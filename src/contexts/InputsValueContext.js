import React, { useContext, useState } from 'react';

const InputsValuesConext = React.createContext(undefined);

export const useInputsValueContext = () => {
    return useContext(InputsValuesConext);
}

export const InputsValueProvider = ({ children }) => {

    const [inputValues, setInputValues] = useState(
        [
            {
                id: 0,
                value: 0
            }
        ]);

    const newValue = ({ id, value }) => {
        let exist = false;
        const newElement = {
            id: parseInt(id),
            value: parseInt(value)
        }
        let inputValuesCopy = inputValues;

        inputValuesCopy.forEach(element => {
            if (element.id == id) {
                exist = true;
                element.id = newElement.id;
                element.value = newElement.value;
            }
        });

        if (!exist) {
            inputValuesCopy.push(newElement);
        }
        setInputValues([...inputValuesCopy]);
    }

    const clearValue = (id) => {
        let inputValuesCopy = inputValues;
        inputValuesCopy.forEach(element => {
            if (element.id > id) {
                element.value = 0;
                console.log("USUWAM id: " + element.id)
            }
            console.log("id: " + element.id)
        });
        setInputValues([...inputValuesCopy]);

    }

    const values = {
        inputValues,
        setInputValues,
        newValue,
        clearValue
    }

    return <InputsValuesConext.Provider value={values}>
        {children};
    </InputsValuesConext.Provider>
};