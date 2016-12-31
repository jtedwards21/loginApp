import React from 'react'
import Place from './Place'

export default React.createClass({
  getInitialState(){
    //Show some places
    return {}
  },
  render() {
    return (
      <div className="col-sm-12" id="home">
	<div className="section-title text-center">Home</div>
	<div id="places">
	</div>
      </div>
    )
  }
})
