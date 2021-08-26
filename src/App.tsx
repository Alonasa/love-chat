import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {Nav} from './components/Nav/Nav';

function App() {
    return (
        <div className="App">
            <div className="App-container">
                <header className="App-header">
                    <a className="App-main">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <span className="App-title">Love Chat</span>
                    </a>
                    <Nav/>

                </header>
            </div>
        </div>
    );
}

export default App;
