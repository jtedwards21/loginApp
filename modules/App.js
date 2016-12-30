import React from 'react'
import NavLink from './NavLink'
import auth from './../public/auth'
import { Link } from 'react-router'
import axios from 'axios'

export default React.createClass({
　　getInitialState(){
    return {loggedIn: auth.loggedIn(), token: {}}
  },
  
  updateAuth(loggedIn){
    this.setState({loggedIn});
  },
  componentDidMount(){
  },
  
  render() {
    return (
      <div>
        <h1>React Router Login</h1>
	<ul>
	　　<Link to="/signup">Sign up</Link>
	  {this.state.loggedIn ? (
	  <Link to="/logout">Log out</Link>
	) : (
	  <Link to="/login">Sign in</Link>
	)}	
	</ul>
	  {this.state.loggedIn ? (<p>You are logged in</p>):(<p>You are not logged in</p>)}
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>  
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
	{this.state.response}
        {this.props.children}
      </div>
    )
  }
})
