import React, { Component } from 'react';
import './App.css';
import environment from './environments/environment';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        {
           JSON.stringify(environment)
        }
        </header>
      </div>
    );
  }
}

export default App;
