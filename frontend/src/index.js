/* global document, window */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import './index.css';
import AsyncApp from './containers/AsyncApp';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(
  reducer,
  enhancer,
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AsyncApp />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
