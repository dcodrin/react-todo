import React from 'react';
import ReactDOM from 'react-dom';
import {addTodos, startAddTodos} from 'actions';
console.log(VERSION);
//Load custom css using webpack aliases
//Notice the usage of sass! loader
import 'style!css!sass!applicationStyles';

//Launch foundation
$(document).foundation();

//Routes
import routes from 'routes';

//Actions
import {addTodo, toggleCompleted, showCompleted, setSearchText} from 'actions';

//Store
import configureStore from 'configureStore';
const store = configureStore();

//TodoApi
import TodoApi from 'TodoApi';

store.dispatch(startAddTodos());

ReactDOM.render(routes(store), document.querySelector('#app'));
