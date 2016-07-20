import React from 'react'
import { connect } from 'react-redux'
import { onSocket } from '../../../src'

const Echo = ({ message }) => {
  return (
    <p1>Message: { message }</p1>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    message: state.lastMessage.message || 'no message'
  }
}

const ConnectedEcho = connect(mapStateToProps)(Echo)

export default onSocket(dispatch => ({
  now: data => dispatch({ type: 'newSocketMessage', data: data.now })
}))(ConnectedEcho)
