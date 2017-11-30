import React, { Component } from 'react';
import './App.css';
import Country from './components/country.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to HNCity</h1>
        </header>
        <p className="App-intro">Welcome, we will do things here</p>
	    <Country/>
      </div>
    );
  }
}

export default App;
