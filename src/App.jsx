import React from 'react';
import ReactDOM from 'react-dom';
import {addTodos, startAddTodos, login, logout, clearAllTodos} from 'actions';
import {hashHistory} from 'react-router';

import firebase from 'firebaseConfig';

//Load custom css using webpack aliases
//Notice the usage of sass! loader
import 'style!css!sass!applicationStyles';

//Launch foundation
$(document).foundation();

//Routes
import routes from 'routes';

//Store
import configureStore from 'configureStore';
const store = configureStore();


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startAddTodos());
        hashHistory.push('/todos');
    } else {
        store.dispatch(clearAllTodos());
        store.dispatch(logout());
        hashHistory.push('/');
    }
});


ReactDOM.render(routes(store), document.querySelector('#app'));
