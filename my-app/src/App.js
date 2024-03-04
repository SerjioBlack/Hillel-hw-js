import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Slider from "./components/Slider";
import firstImage from './images/first.jpeg';
import secondImage from './images/second.jpeg';
import thirdImage from './images/third.jpeg';

function App() {
    const images = [firstImage, secondImage, thirdImage];
    return (
        <div className="App">
            <h1>Пример использования компонента Slider</h1>
            <Slider images={images} />
        </div>
    );
}

export default App;