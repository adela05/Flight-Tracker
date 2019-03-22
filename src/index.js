import React from 'react';
import ReactDOM from 'react-dom';
import {
    Provider
} from 'react-redux';
import {
    createStore
} from 'redux';
import App from './Components/App';
import reducers from './Components/reducers';

const store = createStore(reducers);

ReactDOM.render( < Provider > < App / > < /Provider>, document.querySelector('#root'));