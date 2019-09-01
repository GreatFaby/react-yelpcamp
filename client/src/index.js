import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AUTH_USER } from './store/actions/actionTypes';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './store/reducers/auth';
import reduxThunk from 'redux-thunk';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const createStoreWithMiddleware = compose(applyMiddleware(reduxThunk))(
  createStore
);

const store = createStoreWithMiddleware(reducers);

const token = sessionStorage.getItem('token');
if (token) {
  store.dispatch({ type: AUTH_USER });
}

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
