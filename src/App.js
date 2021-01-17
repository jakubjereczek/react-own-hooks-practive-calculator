import './App.css';

function App() {
  return (
    <div className="app">
      <div class="row">
        <div class="numbers">
          <h2>Uzupełnij liczby, które potrzebne są do obliczenia działania</h2>
          <input type="number"></input>
          <input type="number"></input>
        </div>
        <div class="operators">
          <div class="box active">
            <p>Dodawanie</p>
          </div>
          <div class="box">
            <p>Odejmowanie</p>
          </div>
          <div class="box">
            <p>Mnożenie</p>
          </div>
          <div class="box">
            <p>Dzielenie</p>
          </div>
          <div class="box">
            <p>Pierwiastek</p>
          </div>
          <div class="box">
            <p>Wartość bezwzględna</p>
          </div>
          <div class="box">
            <p>Logarytm naturalny</p>
          </div>
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
