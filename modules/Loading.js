import React from 'react'

export default React.createClass({
  getInitialState(){
    return {};
  },
  render(){
    var bannerStyle = {position: 'relative', padding: '10px 20px', animation: 'loader 1s cubic-bezier(0.5, 0.1, 0.15, 1) alternate infinite', 
  backgroundColor: '#eee'}
    return (
       <div style={bannerStyle} className="banner">
         LOADING
         <div className="banner-left"></div>
        <div className="banner-right"></div>
       </div>
    )
  }
})
