import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import NotFound from './components/NotFound.js';
import * as serviceWorker from './serviceWorker';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

const router = (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={App} />
            <Route path='/active' component={App} />
            <Route path='/completed' component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
