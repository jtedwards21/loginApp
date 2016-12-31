import React from 'react'
import NavLink from './NavLink'
import auth from './../public/auth'
import { Link } from 'react-router'
import axios from 'axios'
import NavBar from './NavBar'

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
      <div className="row">
        <NavBar />
        <h1 id="title" className="text-center col-sm-12">What's Goin' On Tonight?</h1>
	  <ul id="nav">
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
        {this.props.children}
      </div>
    )
  }
})
