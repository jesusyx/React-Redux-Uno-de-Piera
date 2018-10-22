import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";

import configStore from './store/configStore'

import CounterComponent from './components/CounterComponent'
import TodoListComponent from './components/TodoListComponent';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = configStore({ 
    counter: { count:10 }
});

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/" component={App}/>
                <Route exact path="/" component={CounterComponent}/>
                <Route path="/counter" component={CounterComponent}/>
                <Route path="/todos" component={TodoListComponent}/>
            </div>
            
        </Router>
    </Provider>,

document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
