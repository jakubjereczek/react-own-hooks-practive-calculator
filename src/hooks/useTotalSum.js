import { useEffect, useState } from 'react';

import { useInputsValueContext } from '../contexts/InputsValueContext';

export default function useTotalSum(activeInputs, selectedOperation) {

    const [totalSum, setTotalSum] = useState(0);
    const [activeInputsCount, setActiveInputsCount] = useState(activeInputs);

    const { inputValues } = useInputsValueContext();

    function countTheSum() {
        let sum = 1;
        console.log(inputValues)
        if (selectedOperation != null) {
            switch (selectedOperation.name) {
                case "dodawanie":
                    inputValues.forEach(input => {
                        console.log(sum)
                        sum += input.value;
                    });
                case "-":
                case "*":
                case ":":
                case "√":
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
