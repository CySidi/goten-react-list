import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ExampleGotenList from './exampleGotenList';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">GotenList Examples</h1>
        </header>
        <div className="App-body">
          <ExampleGotenList/>
        </div>
      </div>
    );
  }
}

export default App;
