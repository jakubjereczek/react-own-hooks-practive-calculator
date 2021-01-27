import React from 'react';
import Input from './Input';

const Inputs = ({ count, type }) => {

    let inputs = [];
    for (let i = 0; i < count; i++) {
        inputs[i] = {
            id: i,
            type: type,
        }
    }

    const inputsRendered = inputs.map(input => <Input key={input.id} class={input.id} type={input.type} />);

    return inputsRendered;
}

export default Inputs;