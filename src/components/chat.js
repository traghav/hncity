import React, { Component } from 'react';
import * as firebase from 'firebase';
import { ChatFeed, Message } from 'react-chat-ui';
import {CSVLink} from 'react-csv';
import ReactDOM from 'react-dom';
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
		this.state = {
		  messages : [
		  ],
		  is_typing: false,
		  users:[[]]
		  //...
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		}
	componentDidMount() {	
		const rootRef =  firebase.database().ref().child('chat');
		const cityRef = rootRef.child(this.props.city);		
		cityRef.on('value', snap => {
			const p=[];
		 	for(var key in snap.val()){
		 		var id=snap.val()[key]['sender'];
		 		if(id===this.props.email)
		 			id=0
		 		var m=new Message ({id:id,message:snap.val()[key]['message'],senderName:snap.val()[key]['sender']});
		 		p.push(m);

		 	}
		 	
		 	this.setState({
		 		messages: p
		 	});
		 	
		});
		this.listUsers();

		
	}	
	handleChange(event) {
		const rootRef =  firebase.database().ref().child('test');
		const speedRef = rootRef.child(this.props.city);
		const text=event.target.value
		speedRef.push({
			speed:text
		});
	}
	listUsers(){
		const rootRef =  firebase.database().ref().child('user');
		const cityRef = rootRef.child(this.props.city);
		const p=[];
		cityRef.once('value', snap => {
			
			
			var organizer=[];
			var participant=[];
			for(var key in snap.val()){
				var row=[];
				if(organizer.includes(snap.val()[key].email)===false&&snap.val()[key].role==='organizer') {
					organizer.push(snap.val()[key].email);
					row={}
					row['E-mail']=(snap.val()[key].email);
					row['Role']=(snap.val()[key].role);
					row['Signed up on']=(snap.val()[key].timestamp);
					p.push(row);
						
				}
				if(participant.includes(snap.val()[key].email)===false&&snap.val()[key].role==='participant') {
					participant.push(snap.val()[key].email);
					row={}
					row['E-mail']=(snap.val()[key].email);
					row['Role']=(snap.val()[key].role);
					row['Signed up on']=(snap.val()[key].timestamp);
					p.push(row);
						
				} 
			}
			this.setState({
				users:p
			});


		});
		
		
	}
	scrollToBottom(){
		const elem = ReactDOM.findDOMNode(this.refs.chat);
	    
	    if (elem) {
	     
	      elem.scrollIntoView(false);
	  }
	}
	
	handleSubmit(event) {
		event.preventDefault();
		const rootRef =  firebase.database().ref().child('chat');
		const cityRef = rootRef.child(this.props.city);
		const text=this.refs['chatbox'].value;
		this.refs['chatbox'].value="";
		cityRef.push({
			message:text,
			sender:this.props.email,
			timestamp:(new Date()).getTime()
		});
			}
	render() {
		
		this.scrollToBottom();	
		return ( 
			
			
			<div id="main" class="alt" margin="2em">
			<section id="one">
		
				<header class="major">
				<h1>{this.props.city}</h1>
				</header>

						

						<h3>Chat</h3>
						<div class="row">
						<div class="1u 12u$(small)">
					    		<p> </p></div>
						<div class="7u 12u$(small)">
							<ChatFeed
						      messages={this.state.messages} // Boolean: list of message objects
						      isTyping={this.state.is_typing} // Boolean: is the recipient typing
						      hasInputField={false} // Boolean: use our input, or use your own
						      showSenderName={true} //show the name of the user who sent the message
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
					    	
					    	<form onSubmit={this.handleSubmit}>
					    		
					    		<div class="row">
					    		<div class="10u 12u$(small)">

					    		<input type="text" ref="chatbox"/>
					    		</div>
					    		<div class="2u 12u$(small)">
					    		<input type="submit"  value="Send" />
					    		</div>
					    		</div>
					    		
					    		
							</form>
							</div>
							</div>
							<div ref="chat">
							<br/>
							</div>


							<h3>Hello Fellow!</h3>
							<h4>Firstly, thank you for volunteering to organize a Hacker News city meetup!</h4>
							<h4>Secondly, profuse apologies. This tool is <em>rough</em> around the edges, I built it to learn React.</h4>
							<h4>If you're one of the first few organizers, use the garbage chat feature I built to get started. </h4>
							<h4>You could use the chat to decide on a better platform for collaborating</h4>
							<h4>Maybe leave breadcrumbs for other organizers to catch up with you fellows</h4>
							<h4>Could be a Whatsapp group, an e-mail chain or a Telegram Channel, to each city their own! </h4>
							<h4>Heck, you could meetup for coffee if you live in one of those cool cities.</h4>
							<h4>Oh and don't forget to invite the rest of the peeps who signed up.</h4>
							<h4>	<CSVLink data={this.state.users}
						  filename={this.props.city+".csv"}
						  className="btn btn-primary"
						  target="_blank">
						    Click here to access the guest list!
						</CSVLink> </h4>
						<h4>Happy Organizing 😊! if you end up organizing something, please let me know <a href="https://twitter.com/raghav8t">@raghav8t</a> </h4>
							



						
					
				


				<header class="major">
					
					
			
				</header>

			
			
					
	
	
	
	</section>
	</div>
	
	




		

		);
	}
}

export default Chat;
