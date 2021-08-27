import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {Nav} from './components/Nav/Nav';
import {Profile} from './components/User/Profile';


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
                <body>
                    <section className="Profile-section">
                        <Profile/>
                    </section>
                </body>
            </div>
        </div>
    );
}

export default App;
