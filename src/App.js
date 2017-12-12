import React, { Component } from 'react';

//import './App.css';
import MainView from './components/mainview.js';
import Chat from './components/chat.js';
class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
        email:""
    };

//    console.log(this.props)
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to HNCity</h1>
        </header>
        <p className="App-intro"></p>
        <Chat city='Test' email='test' />
        
        
   
	    </div>
    );
  }
}

export default App;
        // <CityPicker/>
        // <MainView />

        //<Chat city=" Kol"/>