import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import MyApp from "./components/MyApp";
import MyInfo from "./components/MyInfo";

ReactDOM.render(
    //<React.StrictMode>
    //  <App />
    // </React.StrictMode>,
    //<div><h1>Hello Koray</h1><p>This is an example paragraph</p></div>,
    <React.StrictMode>
        <MyInfo/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
