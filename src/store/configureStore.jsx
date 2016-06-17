import {combineReducers, createStore, compose} from 'redux';
import {searchTextReducer, todosReducer, showCompletedReducer} from 'reducers';

const configure = (initialState = {}) => {
    const reducer = combineReducers({
        searchText: searchTextReducer,
        todos: todosReducer,
        showCompleted: showCompletedReducer
    });

    return createStore(reducer, initialState, compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
};

export default configure;