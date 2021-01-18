eimport './App.css';
import { useSelectOperation } from './hooks/useSelectOperation';
import { useMemo } from 'react';

const operations = [{ id: 0, name: "dodawanie", active: true },
{ id: 1, name: "odejmowanie", active: false },
{ id: 2, name: "mnożenie", active: false },
{ id: 3, name: "dzielenie", active: false },
{ id: 4, name: "pierwiastek", active: false },
{ id: 5, name: "wartosc bezwzgledna", active: false },
{ id: 6, name: "logarytm naturalny", active: false },
]

function App() {

  const [setOperation, availableOperations] = useSelectOperation({ operations });


  const operactionsRendered = availableOperations.map(operation => {
    const classes = !operation.active ? "box" : "box active";
    return (<div className={classes} onClick={() => {
      setOperation(operation)
    }}>{operation.name}</div>
    )
  });


  return (
    <div className="app">
      <div class="row">
        <div class="numbers">
          <h2>Uzupełnij liczby, które potrzebne są do obliczenia działania</h2>
          <input type="number"></input>
          <input type="number"></input>
        </div>
        <div class="operators">
          {operactionsRendered}
        </div>
      </div>
      <div class="row">
        <div class="result">
          <h2>Wynik działania jest równy</h2>
          <h3>0</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
