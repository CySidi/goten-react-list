import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import ExampleGotenList from './exampleGotenList'
import ExampleGotenListRowComponent from './exampleGotenListRowComponent'
import ExampleGotenOwnButtonComponents from './exampleGotenOwnButtonComponents'


class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">GotenList Examples</h1>
        </header>
        <div className="App-body">
            <div>
                <h3>Example 1)</h3>
                <ExampleGotenList/>
            </div>
            <div>
                <h3>Example 2) (using Row components)</h3>
                <ExampleGotenListRowComponent/>
            </div>
            <div>
                <h3>Example 3) (using own button components)</h3>
                <ExampleGotenOwnButtonComponents/>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
