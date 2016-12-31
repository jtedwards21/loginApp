import React from 'react'
import auth from './../public/auth'

export default React.createClass({
  getInitialState(){
    return {}
  },
  render(){
    const token = auth.getToken()
    return (
	<div>
          <p>You made it!</p>
          <p>{token}</p>
	</div>
    )
  }
})
