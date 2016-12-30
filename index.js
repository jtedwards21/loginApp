import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute, withRouter } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Home from './modules/Home'
import Login from './modules/Login'
import Logout from './modules/Logout'
import Signup from './modules/Signup'
import Dashboard from './modules/Dashboard'
import auth from './public/auth'
import requireAuth from './public/requireAuth'
import axios from 'axios'

var getToken = function(){
    var id='YMRwFiiXGc0SzZ249SVYqg';
    var secret='YWra9IEwLV4reDy4r1R7cpGwINrmdgEm1F9xI5sxowQRCdUEjlgRVFwLevzwdA4J';
    var url='https://api.yelp.com/oauth2/token';
    
    axios({
	method:'post',
	url:url,
	data: {grant_type:'client_credientals',
	  client_id:id,
	  client_secret:secret
        }
     })
    .then(function (response) {
      console.log('hello');
    })
  
}();


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
　　　　　　<Route path="/signup" component={Signup} />
      <Route path="/login" component={Login}/>
      <Route path="/logout" component={Logout}/>
      <Route path="/dashboard" component={Dashboard} onEnter={requireAuth}/>
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
      <Route token={getToken} path="/about"component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
