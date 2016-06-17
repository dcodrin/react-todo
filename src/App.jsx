import React from 'react';
import ReactDOM from 'react-dom';

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

store.subscribe(() => {
    console.log('New State', store.getState());
});


ReactDOM.render(routes(store), document.querySelector('#app'));
