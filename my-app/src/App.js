import React from 'react';
import './App.css';
import Header from './components/Header';
import NavigationPanel from './components/NavigationPanel';
import MainSection from './components/MainSection';

function App() {
    return (
        <div className="app">
            <Header />
            <div className="container">
                <NavigationPanel />
                <MainSection />
            </div>
        </div>
    );
}
export default App;
