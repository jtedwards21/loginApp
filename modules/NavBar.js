import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getInitialState(){
    return {}
  },
  render(){
      var loginLink 
      if(this.props.loggedIn){
        loginLink = (<li><Link to="/logout">Log out</Link></li>)
      } else {(<li><Link to="/login">Sign in</Link></li>)}

    return (
<nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <Link className="navbar-brand" to="/"><span id="glass" className="glyphicon glyphicon-glass"></span></Link>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="active"><Link to="/about">About <span className="sr-only">(current)</span></Link></li>
        <li><Link to="/dashboard" href="#">Dashboard</Link></li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#">Link</a></li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span className="glyphicon glyphicon-menu-hamburger"></span> <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><Link to="/signup">Sign Up</Link></li>
	　　　　{loginLink}
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
});
