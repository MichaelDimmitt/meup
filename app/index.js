require('./style.css')

import React from 'react'
import ReactDom from 'react-dom'
import { parseQs } from '../lib/queryString'
import App from './components/App'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { toHome, toMeetupDetails, loadData, saveSession, fetchMeetups } from './actions'

import reducer from './reducer'

import injectTapEventPlugin from 'react-tap-event-plugin';
import { reduxLogic } from './reduxLogic';

// Needed for onTouchTap - http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const loggerMiddleware = createLogger()

const store = createStore(
  reducer,
  process.env.NODE_ENV === 'development' ?
  applyMiddleware(thunkMiddleware, loggerMiddleware) :
  applyMiddleware(thunkMiddleware)
)
reduxLogic(store)

ReactDom.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.querySelector('#app')
)



