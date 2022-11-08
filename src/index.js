import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Prog from './prog.jsx';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));

var Scrollbar = window.Scrollbar;
      
var options =  {
  "damping": 0.12
}
Scrollbar.init(document.querySelector('#root'), options);


root.render(
    
    <Prog />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
