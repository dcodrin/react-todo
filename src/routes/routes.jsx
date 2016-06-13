import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
        </Route>
    </Router>
);

export default routes;