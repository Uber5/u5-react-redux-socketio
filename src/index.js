import React, { PropTypes } from 'react'
import io from 'socket.io-client'

const SocketConnect = React.createClass({
  getInitialState: function() {
    const raw = io(this.props.url)
    this.raw = raw
    const socket = new Promise((resolve, reject) => {
      raw.on('connect', () => resolve(raw))
    })
    return { socket }
  },
  componentWillMount: function() {
  },
  componentWillUnmount: function() {
    // TODO: does this close the socket?
    this.raw.close()
  },
  getChildContext: function() {
    return { socket: this.state.socket }
  },
  render: function() {
    return React.createElement(
      'span',
      null,
      this.props.children
    )
  }
})

SocketConnect.propTypes = {
  url: PropTypes.string.isRequired
}

SocketConnect.childContextTypes = {
  socket: PropTypes.object.isRequired
}

const SocketWrapper = React.createClass({
  componentWillMount: function() {
    console.log('SocketWrapper will mount', this.props.map, this.context, this.context.store)
    const store = this.context.store
    const socket = this.context.socket
    const eventMap = this.props.map(store.dispatch)
    Object.entries(eventMap).map(([ msg, handler ]) => {
      socket.then(socket => socket.on(msg, data => handler(data)))
    })
  },
  render: function() {
    return React.createElement(this.props.component)
  }
})

SocketWrapper.contextTypes = {
  socket: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}

const onSocket = mapDispatchToEvents => {
  return component => {
    // when we get an event on context.socket, then call mapDispatchToEvents[eventName]
    //console.log('onSocket', mapDispatchToEvents, component)
    // return component
    return () => (<SocketWrapper component={ component } map={ mapDispatchToEvents } />)
  }
}

export { SocketConnect, onSocket }
