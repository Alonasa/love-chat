import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {Nav} from './components/Nav/Nav';
import {Profile} from './components/User/Profile';


function App() {
    return (
        <div className="App">
            <div className="App__container">
                <header className="App__header">
                    <a className="App__main">
                        <img src={logo} className="App__logo" alt="logo"/>
                        <span className="App__title">Love Chat</span>
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
