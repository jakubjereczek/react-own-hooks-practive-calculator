import { useEffect, useState } from 'react';

import { useInputsValueContext } from '../contexts/InputsValueContext';

export default function useTotalSum(activeInputs, selectedOperation) {

    const [totalSum, setTotalSum] = useState(0);
    const [activeInputsCount, setActiveInputsCount] = useState(activeInputs);

    const { inputValues } = useInputsValueContext();

    console.log(inputValues);

    function countTheSum() {
        let sum = 0;
        if (selectedOperation != null) {
            for (let i = 0; i < Object.keys(inputValues).length; i++) {
                switch (selectedOperation.name) {
                    case "dodawanie":
                        sum += inputValues[i].value
                        break;
                    case "odejmowanie":
                        if (i == 0) sum = inputValues[i].value;
                        else sum -= inputValues[i].value;
                        break;
                    case "mnożenie":
                        if (i == 0) sum = inputValues[i].value;
                        else sum *= inputValues[i].value;
                        break;
                    case "dzielenie":
                        if (i == 0) sum = inputValues[i].value;
                        else sum /= inputValues[i].value;
                        break;
                    case "pierwiastek":
                        sum = Math.sqrt(inputValues[0].value);
                        break;
                    case "pierwiastek":
                        sum = Math.abs(inputValues[0].value);
                        break;
                    case "logarytm naturalny":
                        sum = Math.log10(inputValues[0].value);
                        break;
                }

            }

        }
        return sum.toFixed(2);
    }

    const refActiveInputs = (value) => {
        setActiveInputsCount(value)
    }

    const refreshAndReturnSum = () => {
        return countTheSum();
    }

    useEffect(() => setTotalSum(countTheSum()),
        [activeInputs, selectedOperation]);

    return [totalSum, refActiveInputs, refreshAndReturnSum];
}
