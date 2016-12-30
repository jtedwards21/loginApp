import React from 'react'
import axios from 'axios'

export default React.createClass({
  componentDidMount(){
    var id='YMRwFiiXGc0SzZ249SVYqg';
    var secret='YWra9IEwLV4reDy4r1R7cpGwINrmdgEm1F9xI5sxowQRCdUEjlgRVFwLevzwdA4J';
    var url='https://api.yelp.com/oauth2/token';
    
    axios.post('/user', {
	grant_type:'client_credientals',
	client_id:id,
	client_secret:secret
    })
    .then(function (response) {
      this.setState({response:response});
    })

  },
  render(){
    return(
	<div></div>
    )
  }
  

})
