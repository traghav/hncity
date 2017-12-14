import React, { Component } from 'react';

//import './App.css';
import MainView from './components/mainview.js';
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
        <MainView/>
	</div>
    );
  }
}

export default App;
        // <CityPicker/>
        // <MainView />

        //<Chat city=" Kol"/>