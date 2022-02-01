import React from 'react';
import './css/App.css';
import { Popup } from "./components/Popup";

import { observer } from "./index";
function App(props) {

    // Min height for window
    let minh = "calc(100vh)"

    if (window.innerWidth <= 480)
        minh = window.innerHeight + 'px'
    let align = "center"
    if (!props.store.togglePopup)
        return (
            <div style={{ minHeight: minh, alignItems: align }} className="App">
                <div onClick={() => { props.store.showPopup(); observer() }} className="PopupOpen">Налоговый вычет</div>
            </div>
        );
    else
        return (
            <div style={{ minHeight: minh, alignItems: align }} className="App">
                <Popup store={props.store}></Popup>
            </div>
        );
}

export default App;