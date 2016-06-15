import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'TodoApp';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={TodoApp}>
        </Route>
    </Router>
);

export default routes;