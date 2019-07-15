import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import LightSwitch from './components/LightSwitch'
import User from './components/User';
import UserBoard from './components/UserBoard';
import UserPresence from './components/UserPresence';

function App() {
  const names = ["Suhas","India","Ned"]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
        <h1>Hello</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <main>
          <Title content="Some Simple Title" />
          <LightSwitch />
          <User content="Suhas"/>
          <div>
            <UserBoard content="User Board"/>
            <div>
              {names.map(name => 
                <div>
                  <User content={name}/>
                  <UserPresence />
                </div>
              )}
            </div>
          </div>
        </main>
      </header>
    </div>
  );
}

export default App;
