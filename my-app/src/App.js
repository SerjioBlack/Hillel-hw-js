import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Collapse from "./components/Collapse";

function App() {
    return (
        <div className="App">
            <h1>Пример использования компонента Collapse</h1>
            <Collapse text="collapse me" />
        </div>
    );
}

export default App;