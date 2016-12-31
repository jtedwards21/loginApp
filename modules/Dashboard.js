import auth from './../public/auth'
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div　id="dashboard" className="col-sm-12">
        <div className="section-title text-center">Dashboard</div>
	<div className="" id="dashboard-pills">
	  <ul className="nav nav-pills nav-stacked">
            <li role="presentation" className="active"><Link to="/userinfo">User Info</Link></li>
	    <li role="presentation"><Link to="/goin">Goin</Link></li>
	  </ul>
	</div>
	{this.props.children}
      </div>
    )
  }
})
