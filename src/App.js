import React, { Component } from 'react';

import './App.css';
import Details from './components/detail.js';
import Chat from './components/chat.js';
import ChatUI from './components/uichat.js';
import CityPicker from './components/citypicker.js';
class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
        email:""
    };

//    console.log(this.props)
    }
    changeEmail(email){
      this.setState({email:email});
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to HNCity</h1>
        </header>
        <p className="App-intro"></p>
          <Details changeEmail={this.changeEmail.bind(this)} />
          <Chat city="Kol" email={this.state.email}/>
          

        
   
	    </div>
    );
  }
}

export default App;
        // <CityPicker/>
        // 
        //<Chat city=" Kol"/>