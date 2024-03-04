import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import BtnGroup from "./components/BtnGroup";

function App() {
    return (
        <div className="App">
            <div>
                <h1>Пример использования компонента BtnGroup</h1>
                <BtnGroup />
            </div>
        </div>
    );
}

export default App;