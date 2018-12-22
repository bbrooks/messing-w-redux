import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReduxInput from './ReduxedInput';

interface AppProps {
  headerText: string
}

class App extends Component<AppProps> {
  render() {
    return (
      <div className="App">
        <h1>{this.props.headerText}</h1>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
            <ReduxInput />
        </header>
      </div>
    );
  }
}

export default App;
