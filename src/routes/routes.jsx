import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';

import firebase from 'firebaseConfig';
import Login from 'Login';
import TodoApp from 'TodoApp';

const checkLogin = (nextState, replace, next) => {
    if (!firebase.auth().currentUser) {
        replace('/');
    }
    next();
};

const redirectUser = (nextState, replace, next) => {
    if (firebase.auth().currentUser) {
        replace('/todos');
    }
    next();
};

const routes = (store) => {
    return (
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/">
                    <IndexRoute component={Login} onEnter={redirectUser}/>
                    <Route path="todos" component={TodoApp} onEnter={checkLogin}/>
                </Route>
            </Router>
        </Provider>
    );
};

export default routes;