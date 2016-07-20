import React from 'react'
import { connect } from 'react-redux'
import { onSocket } from '../../../../src'

const Echo = ({ message }) => {
  console.log('Echo, message', message)
  return (
    <p1>Message: { message }</p1>
  )
}
// export default Echo

const mapStateToProps = (state, ownProps) => {
  return {
    message: state.lastMessage.message || 'no message'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    someProp: f => f
  }
}

const ConnectedEcho = connect(mapStateToProps, mapDispatchToProps)(Echo)
// export default ConnectedEcho

export default onSocket(dispatch => ({
  now: data => dispatch({ type: 'newSocketMessage', data: data.now })
}))(ConnectedEcho)
