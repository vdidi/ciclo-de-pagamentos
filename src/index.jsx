import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'

import App from './main/app'
import reducers from './main/reducers'

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promise)(createStore)(reducers, devtools)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('app')) 
