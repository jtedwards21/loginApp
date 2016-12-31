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
      <div>
        <NavBar loggedIn={this.state.loggedIn} />
      <div className="container">
      <div className="row">
        <h1 id="title" className="text-center col-sm-12">What's Goin' On Tonight?</h1>
        {this.props.children}
      </div>
      </div>
      </div>
    )
  }
})
