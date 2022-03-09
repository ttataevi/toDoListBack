import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// class Toggle extends Component {
// 	state = {isToggleOn: true};
//
// 	handleClick = ()  => {
// 		this.setState(prevState => ({
// 			isToggleOn: !prevState.isToggleOn
// 		}));
// 	}
//
// 	render() {
// 		return (
// 			<button onClick={this.handleClick}>
// 				{this.state.isToggleOn ? 'ON' : 'OFF'}
// 			</button>
// 		);
// 	}
// }
//
// ReactDOM.render(
// 	<Toggle/>,
// 	document.getElementById('root')
// );

class LoggingButton extends React.Component {
	// This syntax ensures `this` is bound within handleClick.
	// Warning: this is *experimental* syntax.
	// handleClick = () => {
	// 	console.log('this is:', this);
	// }
	// handleClick() {
	// 	console.log('this is:', this);
	// }
	//
	// render() {
	// 	// This syntax ensures `this` is bound within handleClick
	// 	return (
	// 		<button onClick={() => this.handleClick()}>
	// 			Click me
	// 		</button>
	// 	);
	// }
	// handleClick (){
	// 	console.log('this is:', this);
	//
	// }
	//
	//
	// render() {
	// 	return (
	// 		<button onClick={this.handleClick}>
	// 			Click me
	// 		</button>
	// 	);
	// }


}
//
// ReactDOM.render(
// 	<LoggingButton/>,
// 	document.getElementById('root')
// );

// function UserGreeting(props) {
// 	return <h1>Welcome back!</h1>;
// }
//
// function GuestGreeting(props) {
// 	return <h1>Please sign up.</h1>;
// }
//
//
// function Greeting(props) {
// 	const isLoggedIn = props.isLoggedIn;
// 	if (isLoggedIn) {
// 		return <UserGreeting />;
// 	}
// 	return <GuestGreeting />;
// }
//
//
// function LoginButton(props) {
// 	return (
// 		<button onClick={props.onClick}>
// 			Login
// 		</button>
// 	);
// }
//
// function LogoutButton(props) {
// 	return (
// 		<button onClick={props.onClick}>
// 			Logout
// 		</button>
// 	);
// }
// class LoginControl extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.handleLoginClick = this.handleLoginClick.bind(this);
// 		this.handleLogoutClick = this.handleLogoutClick.bind(this);
// 		this.state = {isLoggedIn: false};
// 	}
//
// 	handleLoginClick() {
// 		this.setState({isLoggedIn: true});
// 	}
//
// 	handleLogoutClick() {
// 		this.setState({isLoggedIn: false});
// 	}
//
// 	render() {
// 		const isLoggedIn = this.state.isLoggedIn;
// 		let button;
// 		if (isLoggedIn) {
// 			button = <LogoutButton onClick={this.handleLogoutClick} />;
// 		} else {
// 			button = <LoginButton onClick={this.handleLoginClick} />;
// 		}
//
// 		return (
// 			<div>
// 				<Greeting isLoggedIn={isLoggedIn} />
// 				{button}
// 			</div>
// 		);
// 	}
// }
//
// ReactDOM.render(
// 	<LoginControl />,
// 	document.getElementById('root')
// );

//
// function Mailbox(props) {
// 	const unreadMessages = props.unreadMessages;
// 	return (
// 		<div>
// 			<h1>Hello!</h1>
// 			{unreadMessages.length > 0 &&
// 				<h2>
// 					You have {unreadMessages.length} unread messages.
// 				</h2>
// 			}
// 		</div>
// 	);
// }
//
// const messages = ['React', 'Re: React', 'Re:Re: React'];
// ReactDOM.render(
// 	<Mailbox unreadMessages={messages} />,
// 	document.getElementById('root')
// );

// const  numbers = [1,2,3,4]
// const listItems = numbers.map((number)=>
// 	<li>{number}</li>
// )
//
//
// ReactDOM.render(
// 	<ul>{listItems}</ul>,
// 	document.getElementById('root')
// );


//
// class NameForm extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {value: ''};
//
// 		this.handleChange = this.handleChange.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}
//
// 	handleChange(event) {
// 		this.setState({value: event.target.value});
// 	}
//
// 	handleSubmit(event) {
// 		alert('A name was submitted: ' + this.state.value);
// 		event.preventDefault();
// 	}
//
// 	render() {
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				<label>
// 					Name:
// 					<input type="text" value={this.state.value} onChange={this.handleChange} />
// 				</label>
// 				<input type="submit" value="Submit" />
// 			</form>
// 		);
// 	}
// }


//
// class EssayForm extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			value: 'Please write an essay about your favorite DOM element.'
// 		};
//
// 		this.handleChange = this.handleChange.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}
//
// 	handleChange(event) {
// 		this.setState({value: event.target.value});
// 	}
//
// 	handleSubmit(event) {
// 		alert('An essay was submitted: ' + this.state.value);
// 		event.preventDefault();
// 	}
//
// 	render() {
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				<label>
// 					Essay:
// 					<textarea value={this.state.value} onChange={this.handleChange} />
// 				</label>
// 				<input type="submit" value="Submit" />
// 			</form>
// 		);
// 	}
// }
//
// ReactDOM.render(<EssayForm/>,document.getElementById('root'))

function  Boilwater(props){
	if(props.celsius >=100){
		return <p>Will boil.</p>
	}
	return <p> Won't boil.</p>
}
class Calculator extends Component {

	state = {temperature: ' '}
	handleChange= (e) =>{

		this.setState({temperature : e.target.value})
	}

	render() {
		const  temp = this.state.temperature;
		return(
			<fieldset>
				<legend>Enter temperature in Celsius:</legend>
				<input
					value={temp}
					onChange={this.handleChange} />
				<Boilwater
					celsius={parseFloat(temp)} />
			</fieldset>
		);
	}
}

ReactDOM.render(
	<Calculator />,
	document.getElementById('root')
);
