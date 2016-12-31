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
	<div id="places" className="col-sm-12">
	  {places}
	</div>
      </div>
    )
  }
})
