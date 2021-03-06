import React, { Component } from 'react';
import * as firebase from 'firebase';
import CityPicker from './citypicker.js';
import '../main.css';

class Details extends Component {
	constructor(props) {
		super(props);
		this.state = {role: 'participant',
					  mail: '',
					  city:'',
					  orgNumbers:0
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
	   // eslint-disable-next-line
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
			timestamp:(new Date()).toString()
		});
	}
	findOrganizerNumbers(){
		if(this.state.city!==''){
			const rootRef =  firebase.database().ref().child('user');
			const cityRef = rootRef.child(this.state.city);
			cityRef.once('value', snap => {
			
			var organizer=[];
			for(var key in snap.val()){
				if(organizer.includes(snap.val()[key].email)===false&&snap.val()[key].role==='organizer') {
					organizer.push(snap.val()[key].email);	
				}
			}
			if(this.state.orgNumbers!==organizer.length){
				this.setState({
					orgNumbers:organizer.length
				});	
			}
			});	
		}
		

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
		this.findOrganizerNumbers();
		return (
			<div id="main">
			<section id="two">
			<div class="main">

							<section id="two" class="tiles">
								<article>
									<span class="image">
										<img src="images/pic03.jpg" alt="" />
									</span>
									<header class="major">
										<h3>Hacker News City</h3>
										<form onSubmit={this.handleSubmit}>
				<CityPicker changeCity={this.props.changeCity} changeCityDetail={this.handleCityChange.bind(this)}  />
				<h4>Your email please!</h4>
				
				  <input type="email" value={this.state.mail} onChange={this.handleChange} />
				<br/><br/>
				 <div className="radio" >
                <label>
                  <input type="radio" value="participant" checked={this.state.role === 'participant'} onChange={(e) => this.handleRoleChange('participant')} />
                  I just want to attend 
                </label>
              </div>
              <div className="radio" id="demo-priority-low">
                <label>
                  <input type="radio" value="organizer" checked={this.state.role === 'organizer'} onChange={(e) => this.handleRoleChange('organizer')} />
                  I want to help organize an event!
                </label>
                <h4 hidden={this.state.role !== 'organizer'}>{this.state.orgNumbers} organizer(s) have already signed up.</h4>
              </div>
              				<input type="submit" value="Sign me up" />
			</form>
									</header>
								</article>
								<article>
									
									
										<h2>Meet up with your fellow Hacker News readers in your city!</h2>

										
									
								</article>
								
							</section>
			
			
			</div>
			</section>
			</div>
			
			
				);


			}
}

export default Details;
