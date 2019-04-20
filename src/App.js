import React, { Component } from 'react';
import './App.css';
import environment from './environments/environment';
class App extends Component {
  render() {
     const { baseUrl, settings, systemName } =  environment;
    return (
      <div className="App">
        <header className="App-header">
             {baseUrl}
             {systemName }
        </header>
      </div>
    );
  }
}

export default App;
