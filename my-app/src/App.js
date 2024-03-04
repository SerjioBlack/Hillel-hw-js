import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import ListGroup from "./components/ListGroup";

function App() {
    return (
        <div className="App">
            <div>
                <h1>Пример использования компонента ListGroup</h1>
                <ListGroup>
                    <div>one</div>
                    <div>two</div>
                </ListGroup>
            </div>
        </div>
    );
}

export default App;