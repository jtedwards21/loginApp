import React from 'react'

export default React.createClass({
　　getInitialState(){
    return {}
  },
  render(){
    return (
    <div>
        <div className="center-text">Sign Up!</div>
	<form className="form-horizontal">
	  <div className="form-group">
            <label for="inputEmail" className="col-sm-2 control-label">Email</label>
	    <div className="col-sm-10">
	      <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
	    </div>
	  </div>
	  <div className="form-group">
	    <label for="inputPassword" className="col-sm-2 control-label">Password</label>
	    <div className="col-sm-10">
	      <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
	    </div>
	  </div>
	</form>
    </div>
    )
  }
})
