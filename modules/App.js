import React from 'react'
import NavLink from './NavLink'
import auth from './../public/auth'
import { Link } from 'react-router'
import axios from 'axios'
import NavBar from './NavBar'

export default React.createClass({
　　getInitialState(){
    return {loggedIn: auth.loggedIn(), places: []}
  },
  updateAuth(loggedIn){
    this.setState({loggedIn});
  },
  getPlaces(token){
    var url = '/yelp/search/' + token;
    var that = this;
    var callback = function(data){
       var places = data.data.businesses;
       that.setState({places:places})
    };

    axios(url)
    .then(data => {callback(data)});
  },
  componentDidMount(){
    var url = '/yelp/token';
    var that = this;
    var callback = function(data){
      var token = data.data.access_token
      that.getPlaces(token);
    };

    axios(url)
    .then(data => {callback(data)});

  },
  render() {
    return (
      <div>
        
      <div id="main-container" className="container">
<NavBar loggedIn={this.state.loggedIn} />	
      <div className="row">
        <h1 id="title" className="text-center col-sm-12">What's Goin' On Tonight?</h1>
        {this.props.children}
      </div>
      </div>
      </div>
    )
  }
})
