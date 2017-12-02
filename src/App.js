import React, { Component } from 'react';
import './App.css';
import CityPicker from './components/citypicker.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to HNCity</h1>
        </header>
        <p className="App-intro">Welcome, we will do things here</p>
	    <CityPicker/>
      </div>
    );
  }
}

export default App;
