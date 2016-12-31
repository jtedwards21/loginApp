import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute, withRouter } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Home from './modules/Home'
import Login from './modules/Login'
import Logout from './modules/Logout'
import Signup from './modules/Signup'
import Dashboard from './modules/Dashboard'
import auth from './public/auth'
import requireAuth from './public/requireAuth'
import axios from 'axios'



render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
　　　　　　<Route path="/signup" component={Signup} />
      <Route path="/login" component={Login}/>
      <Route path="/logout" component={Logout}/>
      <Route path="/dashboard" component={Dashboard} onEnter={requireAuth}/>
      <Route path="/about"component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
