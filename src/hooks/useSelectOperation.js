import { useEffect, useState } from 'react';

export default function useSelectOperation(props) {
    const { operations } = props;

    const [selectedOperation, setSelectedOperation] = useState({});
    const [availableOperations, setAvailableOperations] = useState(operations);

    function setOperation(operator) {
        availableOperations.forEach(element => {
            if (element.id == operator.id) {
                setSelectedOperation(operator);
            }
        });
    }

    useEffect(() => {
        const currentlyOperations = availableOperations.map(element => {
            element.id == selectedOperation.id ? element.active = true : element.active = false;

            return {
                ...element,
            }
        })
        setAvailableOperations(currentlyOperations);
    }, [selectedOperation]);

    return [setOperation, availableOperations, selectedOperation];
}
