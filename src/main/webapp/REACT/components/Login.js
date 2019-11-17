import React, { Component } from "react"
import facade from "../apiFacade";


class  Login extends React.Component{
 	constructor(props) {
    	super(props);
    	this.state = { username: "", password: "" }
  	}	
	render(){
		return (
			<form onSubmit={this.login} onChange={this.onChange} >
    			<input placeholder="User Name" id="username" />
    			<input placeholder="Password" id="password" />
    			<button>Login</button>
			</form>
		)
  	}
  	login = (evt) => {
    	evt.preventDefault();
    	this.props.login(this.state.username, this.state.password);
  	}
  	onChange = (evt) => {
  		this.setState({ [evt.target.id]: evt.target.value })
 	}

}




export default Login;
