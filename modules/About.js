import React from 'react'
import axios from 'axios'

export default React.createClass({
  render() {
    return (
	<div className="col-sm-12" id="about">
	  <div className="section-title text-center">About</div>
	  <div className="col-sm-6 col-sm-offset-3">
	    <i>What's Goin' On Tonight</i> is a web app for connecting with other people having fun in the evening. Users tell us where they are going this evening, their responses are collected together and can be seen here.
	  </div>
	</div>
    )
  }
})
