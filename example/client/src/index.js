import React from 'react'
import ReactDOM from 'react-dom'
import { SocketConnect } from '../../../src'

const App = () => (
  <SocketConnect>
    <div>Here the app.</div>
  </SocketConnect>
)

ReactDOM.render(<App />, document.getElementById('app'))
