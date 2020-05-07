import React, { Component } from 'react';

class Register extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	email: '',
	  	password: '',
	  	name: '',
	  };
	}

	onEmailChange = (event) => {
		this.setState({ email: event.target.value })
	}

	onPasswordChange = (event) => {
		this.setState({ password: event.target.value })
	}

	onNameChange = (event) =>{
		this.setState({ name: event.target.value })
	}

	onRegister = () =>{
		const { email, name, password }= this.state;
		fetch('http://localhost:3000/register', {
			method: 'post',
			headers: {'content-type': 'application/json'},
			body: JSON.stringify({
				email: email,
				password: password,
				name: name,
			})
		})
		.then(response => response.json())
		.then(user => {
			if(user){
				this.props.loadUser(user)
				this.props.onRouteChange('home')
			}
		})
	}

	render(){
		// const { onRouteChange } = this.props;
		return(
			<div className="center ma">
				<div className="sans-serif w-90 white mw6 center shadow-5 relative cover bg-top mt2" >
			      <div id="overlay" className="absolute absolute--fill bg-navy o-70 z-unset"></div>

			      <div className="relative pa4 pa5-m">
			        <h1 className="serif tracked ma0 mb4 pv3">Create Account</h1>
			        <div action="" id="login" className="">
			          <div className="mb3">
			            <label htmlFor="name" className="db f6 white-80 ttu ph2 mb2">Name</label>
			            <input 
			            	type="text" 
			            	name="name" 
			            	className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill"
			            	onChange={this.onNameChange} 
			            />
			          </div>
			          <div className="mb3">
			            <label htmlFor="email" className="db f6 white-80 ttu ph2 mb2">Email</label>
			            <input 
			            	type="email" 
			            	name="email" 
			            	className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill"
			            	onChange={this.onEmailChange}
			            />
			          </div>
			          <div className="mb4">
			            <label htmlFor="password" className="db f6 white-80 ttu ph2 mb2">Password</label>
			            <input 
			            	type="password" 
			            	name="password" 
			            	className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill"
			            	onChange={this.onPasswordChange} 
			            />
			          </div>
			          <div>
			            <button 
			            	className="input-reset db w-100 light-gray f6 b ttu tracked pv3 ph3 pointer bg-dark-blue hover-bg-blue bn br-pill"
			            	onClick={this.onRegister}
			            >
			            	Create
			            </button>
			          </div>
			        </div>
			      </div>
			    </div>
			</div>
		);
	}
	
}

export default Register;