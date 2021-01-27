import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { InputsValueProvider } from "./contexts/InputsValueContext";


ReactDOM.render(

  <React.StrictMode>
    <InputsValueProvider>
      <App />
    </InputsValueProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
