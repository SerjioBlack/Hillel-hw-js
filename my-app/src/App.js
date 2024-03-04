import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import CustomAlert from "./components/CustomAlert";

function App() {
  return (
      <div className="App">
          <h1>Пример использования компонента CustomAlert</h1>
          <CustomAlert type="warning" text="what is love?" />
      </div>
  );
}

export default App;
