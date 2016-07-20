import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { SocketConnect } from '../../../src'
import Echo from './echo'
import Toggle from './toggle'

const lastMessage = (state = {}, action) => {
  if (action.type === 'newSocketMessage') {
    return { message: action.data }
  }
  return state
}
const reducers = combineReducers({ lastMessage })

const store = createStore(reducers)

const App = () => (
  <Provider store={store}>
    <div>
      <h3>The App</h3>
      <Toggle>
        <SocketConnect url="http://localhost:3000/things">
          <Echo />
        </SocketConnect>
      </Toggle>
    </div>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('app'))
