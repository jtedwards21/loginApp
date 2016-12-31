import React from 'react'

export default React.createClass({
  getInitialState(){
    return {}
  },
  render(){
    return (
      <div className="col-sm-12 place">
	<div className="col-sm-3">
	  <img className="my-img-responsive center-block" src={this.props.imageUrl} />
	</div>
	<div className="col-sm-3 place-info">
	  <div className="col-sm-12 info-display">
		<div className="col-sm-3">Name: </div>
		<div className="col-sm-9">{this.props.name}</div>
	  </div>
	  <div className="col-sm-12">
		<div className="col-sm-3">Phone: </div>
		<div className="col-sm-9">{this.props.phone}</div>
	  </div>
	  <div className="col-sm-12">
		<div className="col-sm-3">Price: </div>
		<div className="col-sm-9">{this.props.price}</div>
	  </div>
	</div>
	<div className="review">
		Hello, this is a review.
	</div>
　　　　　　</div>
    )
  }
});

