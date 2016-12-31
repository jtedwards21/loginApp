import React from 'react'
import NavLink from './NavLink'
import auth from './../public/auth'
import { Link } from 'react-router'
import NavBar from './NavBar'
import Footer from './Footer'

export default React.createClass({
　　getInitialState(){
    return {loggedIn: auth.loggedIn()}
  },
  updateAuth(loggedIn){
    this.setState({loggedIn});
  },
  render() {
    var thin = {width: "60%"};
　　　　console.log(this.props.children);
    return (
      <div>
          <NavBar loggedIn={this.state.loggedIn} />
        <div style={thin} id="main-container" className="container">	
          <div className="row">
            <h1 id="title" className="text-center col-sm-12">What's Goin' On Tonight?</h1>
	　　　 <div id="section" className="col-sm-12">
            {this.props.children}
	    </div>
          </div>
        </div>
	<Footer />
      </div>
    )
  }
})
