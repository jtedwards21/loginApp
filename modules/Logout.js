import React from 'react'

export default　React.createClass({

  componentDidMount() {
    auth.logout()
  },

  render() {
    return <p>You are now logged out</p>
  }
})
