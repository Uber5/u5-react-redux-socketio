import React, { PropTypes } from 'react'

export const SocketConnect = React.createClass({
  componentWillMount: function() {
    const socket = new Promise((resolve, reject) => {
      // TODO: connect socket, as promise
    })
    this.setState({
      socket
    })
  },
  componentWillUnmount: function() {
  },
  getChildContext: function() {
    return { socket: this.state.socket }
  },
  render: function() {
    return this.props.children
  }
})

SocketConnect.childContextTypes = {
  socket: PropTypes.object.isRequired
}
