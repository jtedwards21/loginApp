import React from 'react'
import Place from './Place'
import axios from 'axios'

export default React.createClass({
  getInitialState(){
    return {places: []}
  },
  getPlaces(token){
    var url = '/yelp/search/' + token;
    var that = this;
    var callback = function(data){
       var places = data.data.businesses;
       that.setState({places:places})
    };

    axios(url)
    .then(data => {callback(data)});
  },
  componentDidMount(){
    var script = document.createElement('script');
    script.src = './js/initSonic.js'
    document.body.appendChild(script);
    var url = '/yelp/token';
    var that = this;
    var callback = function(data){
      var token = data.data.access_token
      that.getPlaces(token);
    };

    axios(url)
    .then(data => {callback(data)});

  },
  render() {
    console.log(this.state.places);
    var places = [];
    places = this.state.places.map(function(p, i){
	return < Place key={i} name={p.name} imageUrl={p.image_url} phone={p.display_phone} price={p.price}/>
    });
    return (
      <div className="col-sm-12" id="home">
	<div className="section-title text-center">Home</div>
	<div className="col-sm-12" id="signup-lead">
	　　<div className="col-sm-8">
	    <div><span className="glyphicon glyphicon-thumbs-up"> Quickly </span></div>
	    <div><span className="glyphicon glyphicon-thumbs-up"> Meet New People During You're Night</span></div>
	    <div><span className="glyphicon glyphicon-thumbs-up"> Check out reviews of the best spots in your location</span></div>
	  </div>
	  <div className="col-sm-4">
	    <div className="btn btn-lg my-btn">Register</div>
	  </div>
	</div>
	<div id="places" className="col-sm-12">
	  <div id="loader" className="center-block"></div>
	  {places}
	</div>
	<script>
	  
        </script>
      </div>
    )
  }
})


