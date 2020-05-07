import React, { Component } from 'react';

class SignIn extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	signInEmail: '',
	  	signInPassword: ''
	  };
	}

	onEmailChange = (event) => {
		this.setState({ signInEmail: event.target.value })
	}

	onPasswordChange = (event) => {
		this.setState({ signInPassword: event.target.value })
	}

	onSubmitSignIn = () =>{
		fetch('http://localhost:3000/signin', {
			method: 'post',
			headers: {'content-type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
		.then(response => response.json())
		.then(user => {
			if(user.id){
				this.props.loadUser(user);
				this.props.onRouteChange('home');
			}
		})
	}

	render(){
		const { onRouteChange } = this.props;
		return(
			<div className="center ma">
				<div className="sans-serif w-90 white mw6 center shadow-5 relative cover bg-top mt2" >
			      <div id="overlay" className="absolute absolute--fill bg-navy o-70 z-unset"></div>

			      <div className="relative pa4 pa5-m">
			        <h1 className="serif tracked ma0 mb4 pv3">Sign In</h1>
			        <div action="" id="login" className="">
			          <div className="mb3">
			            <label htmlFor="email" className="db f6 white-80 ttu ph2 mb2">Email</label>
			            <input 
			            	type="email" 
			            	name="email-address" 
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
			            	onClick={this.onSubmitSignIn}
			            >
			            	Sign In
			            </button>
			          </div>
			        </div>
			        
			        <div className="tc b f6 mt4 o-70 glow pa2 i">
			          New Member? <p className="white pointer underline" onClick={() => onRouteChange('register')} >Register</p>
			        </div>
			      </div>
			    </div>
			</div>
		);
	}
	
}

export default SignIn;