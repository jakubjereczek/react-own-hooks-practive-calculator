import { useEffect, useState } from 'react';

import { useInputsValueContext } from '../contexts/InputsValueContext';

export default function useTotalSum(activeInputs, selectedOperation) {

    const [totalSum, setTotalSum] = useState(0);
    const [activeInputsCount, setActiveInputsCount] = useState(activeInputs);

    const { inputValues } = useInputsValueContext();

    function countTheSum() {
        let sum = 0;
        console.log(inputValues)
        if (selectedOperation != null) {
            switch (selectedOperation.name) {
                case "dodawanie":
                    inputValues.forEach(input => {
                        sum += input.value;
                    });
                    break;
                case "odejmowanie":
                    for (let i = 0; i < Object.keys(inputValues).length; i++) {
                        if (i == 0) sum = inputValues[i].value;
                        else sum -= inputValues[i].value;
                    }
                    break;
                case "*":
                case ":":
                case "√":
                    sum = Math.sqrt(inputValues[0].value);
                    break;
                case "||":
                case "log":
            }
        }
        return sum;
    }

    const refActiveInputs = (value) => {
        setActiveInputsCount(value)
    }

    useEffect(() => setTotalSum(countTheSum()), [activeInputs, selectedOperation]);

    return [totalSum, refActiveInputs];
}
