import React, { Component } from "react"
import facade from "./apiFacade";
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" }
  }
  login = (evt) => {
    evt.preventDefault();
    this.props.login(this.state.username, this.state.password);
  }

  onChange = (evt) => {
    this.setState({ [evt.target.id]: evt.target.value })
  }
  render() {
    return (
      
      <div>
      <BrowserRouter>
        <ul class="header">
          <li>
            <NavLink to="/" exact>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <form onSubmit={this.login} onChange={this.onChange} >
              <input placeholder="User Name" id="username" />
              <input placeholder="Password" id="password" />
              <button>Login</button>
            </form>
          </li>
        </ul>
        </BrowserRouter>
        <Routes />
      </div>
    )
  }
}

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />

      </Switch>
    </BrowserRouter>
  );
}

class LoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = { dataFromServer: "welcome " + props.username };
  }
  componentDidMount() { }
  render() {
    return (
      <div>
      <BrowserRouter>
        <ul class="header">
          <li>
            <NavLink to="/" exact>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <p>logged in as: {this.username}</p>
          </li>
        </ul>
        </BrowserRouter>
        <Routes />
      </div>
      
    )
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false }
  }
  logout = () => {
    facade.logout();
    this.setState({ loggedIn: false });
  }
  login = (user, pass) => {
    facade.login(user, pass)
      .then(res => this.setState({ loggedIn: true }));
  }
  render() {
    return (

      <div>
        {!this.state.loggedIn ? (<LogIn login={this.login} />) :
          (<div>
            <LoggedIn />
            <button onClick={this.logout}>Logout</button>
          </div>)}
      </div>
    )
  }
}
export default App;
