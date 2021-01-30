import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.css';
import App from "./components/app";
import AppF from "./components/app/appf";

ReactDOM.render(
    <React.StrictMode>
        <AppF/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
