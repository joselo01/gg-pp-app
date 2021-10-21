import React from 'react';
import ReactDOM from 'react-dom';
import './loader.js';
import './globalStyles/scss/main.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App.jsx';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
