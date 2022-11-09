import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Prog from './prog.jsx';
import reportWebVitals from './reportWebVitals';

import Cursor from "./cursor.jsx";

const butter = ReactDOM.createRoot(document.getElementById('butter'));
const cursor = ReactDOM.createRoot(document.getElementById('cursor'));

butter.render(
    <Prog />
);
cursor.render(
    
    <Cursor />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
