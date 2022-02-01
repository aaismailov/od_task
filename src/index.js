import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from "./store";
import './css/Index.css';
import {
    BrowserRouter
} from "react-router-dom";
function tick() {

    const element = (
        <React.StrictMode>
            <BrowserRouter basename={window.location.pathname || ''}>
                <App store={store} />
            </BrowserRouter>
        </React.StrictMode>
    );

    ReactDOM.render(
        element, document.getElementById('root')
    );

    if (window.innerWidth <= 480) {
        document.body.style.minHeight = window.innerHeight + 'px'
        document.getElementById('root').style.minHeight = window.innerHeight + 'px'
    } else {
        document.body.style.minHeight = "calc(100vh)"
        document.getElementById('root').style.minHeight = "calc(100vh)"
    }
}

tick()

export let observer = () => { tick() }