import React, { Component } from 'react';


class Details extends Component {
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
		//alert('A name was submitted: ' + this.state.mail);
		console.log(this.state);
		this.props.changeEmail(this.state.mail);
		event.preventDefault();
			}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h4>Mail for reactjs</h4>
				
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
