import React from 'react'
import ReactDOM from 'react-dom'
  
import App from './containers/App'
import { ChatApp } from './reducers/App'
  
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'

  

//Custom middlewares
const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

let store = createStore(
  ChatApp,
  applyMiddleware(logger, thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
