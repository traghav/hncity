import React, { Component } from 'react';

import './App.css';
import Details from './components/detail.js';
import Chat from './components/chat.js';
import ChatUI from './components/uichat.js';
import CityPicker from './components/citypicker.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to HNCity</h1>
        </header>
        <p className="App-intro"></p>
          <ChatUI />
        
   
	    </div>
    );
  }
}

export default App;
        // <CityPicker/>
        // <Details/>
        //<Chat city=" Kol"/>