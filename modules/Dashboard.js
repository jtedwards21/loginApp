import auth from './../public/auth'
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div　id="dashboard" className="col-sm-12">
	<div className="col-sm-3" id="dashboard-pills">
	  <ul className="nav nav-pills nav-stacked">
            <li role="presentation" className="active"><Link to="/userinfo">User Info</Link></li>
	    <li role="presentation"><Link to="/goin">Goin</Link></li>
	  </ul>
	</div>
	<div className="col-sm-9" id="current-pill">
	{this.props.children}
	</div>
      </div>
    )
  }
})
