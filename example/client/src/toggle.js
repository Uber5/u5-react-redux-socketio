import React from 'react'
import { connect } from 'react-redux'

// non-pure component, has got nothing to do with sockets, just to demo lifecycle
// of SocketConnect
export default React.createClass({
  getInitialState: function() { return { show: false } },
  render: function() {
    const inner = this.state.show ? this.props.children : null
    const toggle = () => this.setState({ show: !this.state.show })
    return (
      <div>
        <button onClick={ toggle }>{ this.state.show ? 'Hide' : 'Show' }</button>
        { inner }
      </div>
    )
  }
})
