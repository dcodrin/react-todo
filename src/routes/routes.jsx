import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';

import TodoApp from 'TodoApp';

const routes = (store) => {
    return (
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/" component={TodoApp}>
                </Route>
            </Router>
        </Provider>
    );
};

export default routes;