require('./style.css')

import React from 'react'
import ReactDom from 'react-dom'

import App from './components/App'
import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { reduxLogic } from './reduxLogic';

const store = createStore(
  reducer,
  process.env.NODE_ENV === 'development' ?
  applyMiddleware(thunkMiddleware, createLogger()) :
  applyMiddleware(thunkMiddleware)
)

reduxLogic(store)

ReactDom.render(
  <Provider store={store}>
    <Router className="App"></Router>
      <App />
  </Provider>,
  document.querySelector('#app')
)



