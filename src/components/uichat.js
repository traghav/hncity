import React, { Component } from 'react';


class ChatUI extends Component {
	constructor(props) {
		super(props);
		this.state = {role: 'participant',
					  mail: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		}
	handleChange(event) {
		this.setState({mail: event.target.value});
		}
	handleRoleChange(roleSelected) {
		this.setState({role: roleSelected});
		console.log(roleSelected);
	}

	handleSubmit(event) {
		alert('A name was submitted: ' + this.state.mail);
		console.log(this.state)
		event.preventDefault();
			}
	render() {
		return (
			<h1>We will make a Chat UI here!</h1>
				);
			}
}

export default ChatUI;
