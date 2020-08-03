import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware,combineReducers } from "redux";
import reduxThunk from 'redux-thunk';
import {newsFeed} from './reducer/newsFeed';
import './index.css';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({  
  newsFeed
  
})
const store = createStore(rootReducer,applyMiddleware(reduxThunk))
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
