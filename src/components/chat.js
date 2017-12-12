import React, { Component } from 'react';
import * as firebase from 'firebase';
import { ChatFeed, Message } from 'react-chat-ui';
import {CSVLink, CSVDownload} from 'react-csv';
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
//		console.log(this.props)
		}
	componentDidMount() {
		//console.log(firebase);
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
		 	console.log(p);	
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
				if(organizer.includes(snap.val()[key].email)===false&&snap.val()[key].role==='participant') {
					organizer.push(snap.val()[key].email);
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
		console.log(p.toString());
		
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
			
		return ( 
			<div>
			<section id="two" class="spotlights">
				<section>
					<a href="generic.html" class="image">
						<img src="images/pic08.jpg" alt="" data-position="center center" />
					</a>
					<div class="content">
						<div class="inner">
							<header class="major">
								<h3>Orci maecenas</h3>
							</header>
							<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
							<ul class="actions">
								<li><a href="generic.html" class="button">Learn more</a></li>
							</ul>
						</div>
					</div>
				</section>
			</section>

				<CSVLink data={this.state.users}
				  filename={"my-file.csv"}
				  className="btn btn-primary"
				  target="_blank">
				    Download me
				</CSVLink>
				
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
				<form onSubmit={this.handleSubmit}>
					<input ref="chatbox"/>
					<input  type="submit" value="📨" />
				</form>
		
				</div>

				);
			}
}

export default Chat;
