import React, { Component } from 'react';

import Details from './detail.js';
import Chat from './chat.js';

class MainView extends Component {
    constructor(props) {
    super(props);
    this.state = {
        email:"",
        city:"",
        role:""
    };
    }
    changeEmail(email){
      this.setState({email:email});
    }
    changeCity(city){
      this.setState({city:city});
    }
    changeRole(role){
      this.setState({role:role});
    }
  render() {
    if(this.state.email==="") {
      return (
      <div>
         
          <Details changeEmail={this.changeEmail.bind(this)} changeRole={this.changeRole.bind(this)} changeCity={this.changeCity.bind(this)}/>
      </div>
    );  
    }
    else if(this.state.role==="organizer")
    {
      return (
        <div>
          <Chat city={this.state.city} email={this.state.email} />
        </div>);
    }
    else {
      return(
        <h1>Thank you for your interest. If something is organized, the organizers will get in touch with you.</h1>
        );
    }
    
  }
}

export default MainView;
        // 
        // <Chat city="Kol" email={this.state.email}/>  
        //<Chat city=" Kol"/>