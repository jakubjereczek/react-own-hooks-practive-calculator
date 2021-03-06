import './App.css';
import React from 'react';
import { useSelectOperation, useTotalSum } from './hooks';
import { Inputs } from './components';
import { useInputsValueContext } from './contexts/InputsValueContext'

import { useMemo, useState } from 'react';

const operations = [
  { id: 0, name: "dodawanie", active: true },
  { id: 1, name: "odejmowanie", active: false },
  { id: 2, name: "mnożenie", active: false },
  { id: 3, name: "dzielenie", active: false },
  { id: 4, name: "pierwiastek", active: false },
  { id: 5, name: "wartosc bezwzgledna", active: false },
  { id: 6, name: "logarytm naturalny", active: false }
]

function App() {

  const { clearValue } = useInputsValueContext();


  const [setOperation, availableOperations, selectedOperation] = useSelectOperation({ operations });

  const [addedInputs, setAddedInput] = useState(0);
  const maxAddedInput = 4;

  const operactionsRendered = availableOperations.map(operation => {
    const classes = !operation.active ? "box" : "box active";
    return (<div key={operation.id} className={classes} onClick={() => {
      setOperation(operation)
    }}>{operation.name}</div>
    )
  });

  // Jesli zaznaczymy pierw, war. bez. lub log = 1 input. Reszty 2. 
  let inputsNumbers = useMemo(() => selectedOperation.id > 3 ? 1 : 2, [selectedOperation]);

  const [totalSum, refActiveInputs, refreshAndReturnSum] = useTotalSum(inputsNumbers, selectedOperation);

  let activeInputs = useMemo(() => {
    refActiveInputs(inputsNumbers + addedInputs)

    //aktualnianie ilosci inputow - czyszczenie zawartosci niepotrzebnych
    // Od id wzwyz
    let numbers = ((inputsNumbers + addedInputs) - 1);
    console.log("numbers " + numbers + "inputs " + inputsNumbers, "added" + addedInputs)
    if (inputsNumbers != 1)
      clearValue(numbers);
    return inputsNumbers;
  }, [addedInputs, inputsNumbers]);

  const inputs = (
    <Inputs count={inputsNumbers} type="number" />
  )

  const totalSumRefreshed = useMemo(() => {
    return refreshAndReturnSum();
  }, [inputs])

  return (
    <div className="app">
      <div class="row">
        <div class="numbers">
          <h2>Uzupełnij liczby, które potrzebne są do obliczenia działania</h2>
          {console.log(inputsNumbers)
          }
          {inputsNumbers == 1 ? (
            inputs
          ) : (
              <React.Fragment>
                <div class="buttons">
                  {(addedInputs >= 1) ?
                    <button onClick={() => {
                      setAddedInput(addedInputs - 1);
                    }}>-1</button> : null
                  }
                  {(addedInputs != maxAddedInput) ? (
                    <button onClick={() => {
                      setAddedInput(addedInputs + 1);
                    }}>+1</button>
                  ) : null}
                </div>
                {activeInputs = inputsNumbers + addedInputs}
                <Inputs count={activeInputs} type="number" />
              </React.Fragment>
            )}
        </div>
        <div class="operators">
          {operactionsRendered}
        </div>
      </div>
      <div class="row">
        <div class="result">
          <h2>Wynik działania jest równy</h2>
          <h3>{totalSumRefreshed}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
