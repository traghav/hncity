import React, { Component } from 'react';
import * as firebase from 'firebase';
var config = {
apiKey: "AIzaSyBzsVcfwFAg1OHOMpo-d-P8aK5nWFMaUHc",
authDomain: "hncity-2d41c.firebaseapp.com",
databaseURL: "https://hncity-2d41c.firebaseio.com",
projectId: "hncity-2d41c",
storageBucket: "hncity-2d41c.appspot.com",
messagingSenderId: "756209153194"
};
firebase.initializeApp(config);



class Chat extends Component {
	constructor(props) {
		super(props);
		this.state = {	speed: 0,
						 arr:['3'],
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		console.log(this.props)
		}
	componentDidMount() {
		//console.log(firebase);
		const rootRef =  firebase.database().ref().child('test2');
		const speedRef = rootRef.child('speed');
		const p=[];
		speedRef.on('value', snap => {
			

		 	for(var key in snap.val()){
		 		p.push(snap.val()[key]['speed']);	
		 	}
		 	this.setState({
		 		arr: p
		 	});
		 	
		});
		console.log(this.state.arr)
	}	
	handleChange(event) {
		const rootRef =  firebase.database().ref().child('test2');
		const speedRef = rootRef.child('speed');
		const text=event.target.value
		speedRef.push({
			speed:text
		});
	}
	

	handleSubmit(event) {
		alert('A name was submitted: ' + this.state.mail);
		console.log(this.state)
		event.preventDefault();
			}
	render() {
		
		const listItems = this.state.arr.map((number) =>
  			<li>{number}</li>
		);


		return ( <div>
				{listItems}
				<form onSubmit={this.handleChange}>
					<input/>
					<input type="submit" value="Sign me up" />
				</form>	
				</div>

				);
			}
}

export default Chat;
