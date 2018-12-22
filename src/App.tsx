import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextInput from './Input';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App state from somewhere else</h1>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
            <TextInput />
        </header>
      </div>
    );
  }
}

export default App;
