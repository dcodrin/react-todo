import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';


//Load custom css using webpack aliases
//Notice the usage of sass! loader
import 'style!css!sass!applicationStyles';

//Launch foundation
$(document).foundation();


//App components


const App = (props) => {
    return (
        <div>
           <h1>App is rendered.</h1>
            {props.children}
        </div>
    );
};

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
        </Route>
    </Router>
);

ReactDOM.render(routes, document.querySelector('#app'));
