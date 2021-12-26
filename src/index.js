import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//renderiza os elementos no index.htmml
ReactDOM.render(
    //informação adicional sobre possíveis erros
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


