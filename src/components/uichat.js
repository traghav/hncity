import React, { Component } from 'react';
import { ChatFeed, Message } from 'react-chat-ui';
class ChatUI extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  messages : [
		    (new Message({ id: 3, message: "I'm the recipient! (The person you're talking to)", senderName: "Dock" })), // Gray bubble
		    (new Message({ id: 1, message: "I'm you -- the blue bubble!", senderName: "Jack" })) // Blue bubble
		  ],
		  is_typing: false
		  //...
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
		const message= [{
	    "type" : 1,
	    "text": "Hello! Good Morning!"
		}, {
	    "type": 0,
	    "text": "Hello! Good Afternoon!"
		}];
		return (
			<div>
			{console.log(this.state)}
			  <ChatFeed
		      messages={this.state.messages} // Boolean: list of message objects
		      isTyping={this.state.is_typing} // Boolean: is the recipient typing
		      hasInputField={false} // Boolean: use our input, or use your own
		      showSenderName={true}// show the name of the user who sent the message
		      bubblesCentered={false} //Boolean should the bubbles be centered in the feed?
		      // JSON: Custom bubble styles
		      bubbleStyles={
		        {
		          text: {
		            fontSize: 12
		          },
		          chatbubble: {
		            borderRadius: 35,
		            padding: 10
		          }
		        }
		      }
		    />
			<input/>

			</div>
				);
			}
}

export default ChatUI;
