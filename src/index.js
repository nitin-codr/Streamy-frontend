import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import App from './components/App';
import reducers from './reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(reducers, composeEnhancer(applyMiddleware()));
ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.querySelector('#root')
)