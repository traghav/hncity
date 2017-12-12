import React, { Component } from 'react';
import * as firebase from 'firebase';
import CityPicker from './citypicker.js';


class Details extends Component {
	constructor(props) {
		super(props);
		this.state = {role: 'participant',
					  mail: '',
					  city:''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		}
	handleChange(event) {
		this.setState({mail: event.target.value});
		}
	handleRoleChange(roleSelected) {
		this.setState({role: roleSelected});
	}
	handleCityChange(city){
		this.setState({city:city});

	}


	isEmailAddress(str) {
	   var pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/;
	   return pattern.test(str);  // returns a boolean 
	}


	uploadUser(){
		const rootRef =  firebase.database().ref().child('user');
		const cityRef = rootRef.child(this.state.city);
		cityRef.push({
			city:this.state.city,
			email:this.state.mail,
			role:this.state.role,
			timestamp:(new Date()).getTime()
		});


	}

	handleSubmit(event) {
		//

		if(this.isEmailAddress(this.state.mail)===true) {
			this.props.changeEmail(this.state.mail);
			this.props.changeRole(this.state.role);
			this.uploadUser();	
		}
		else
			alert('An invalid email was submitted.');
		
		event.preventDefault();
			}
	render() {

		return (
			<form onSubmit={this.handleSubmit}>
				<CityPicker changeCity={this.props.changeCity} changeCityDetail={this.handleCityChange.bind(this)}  />
				<h4>Your email please!</h4>
				
				  <input type="text" value={this.state.mail} onChange={this.handleChange} />
				<br/><br/>
				 <div className="radio">
                <label>
                  <input type="radio" value="participant" checked={this.state.role === 'participant'} onChange={(e) => this.handleRoleChange('participant')} />
                  I just want to attend 
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="organizer" checked={this.state.role === 'organizer'} onChange={(e) => this.handleRoleChange('organizer')} />
                  I want to help organize an event!
                </label>
              </div>
              				<input type="submit" value="Sign me up" />
			</form>
				);
			}
}

export default Details;
