import {combineReducers, createStore, compose} from 'redux';
import * as redux from 'redux';
import thunk from 'redux-thunk';
import {searchTextReducer, todosReducer, showCompletedReducer, authReducer} from 'reducers';

const configure = (initialState = {}) => {
    const reducer = combineReducers({
        searchText: searchTextReducer,
        todos: todosReducer,
        showCompleted: showCompletedReducer,
        auth: authReducer
    });

    return createStore(reducer, initialState, compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
};

export default configure;