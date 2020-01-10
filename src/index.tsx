import React from 'react';
import ReactDOM from 'react-dom';

import { DataService } from './DataService';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.scss';

const apiPath = process.env.REACT_APP_API_PATH ?? "/api";
const service = new DataService(apiPath);

ReactDOM.render(
    <App service={service}/>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
