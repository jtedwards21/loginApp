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
import Dashboard from './modules/Dashboard'
import auth from './public/auth'
import requireAuth from './public/requireAuth'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/logout" component={Logout}/>
      <Route path="/dashboard" component={Dashboard} onEnter={requireAuth}/>
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
