import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IconContext } from 'react-icons';
import 'bootstrap/dist/css/bootstrap-reboot.css';

ReactDOM.render(
  <React.StrictMode>
    <IconContext.Provider value={{ color: 'white', size: '50px' }}>
      <App />
    </IconContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
