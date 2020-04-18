import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UseState from './UseState';
import * as serviceWorker from './serviceWorker';
import Traversy from './Traversy';

ReactDOM.render(
  <React.StrictMode>
    <UseState />
    <Traversy />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
