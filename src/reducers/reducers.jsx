import moment from 'moment';
import uuid from 'node-uuid';

export const searchTextReducer = (state = '', action) => {
    switch (action.type) {
        case 'SEARCH_TEXT':
            return action.searchText;
        default:
            return state;
    }
};

export const showCompletedReducer = (state = false, action) => {
    switch (action.type) {
        case 'SHOW_COMPLETED':
            return !state;
        default:
            return state;
    }
};

export const todosReducer = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_TODO':
            return state.map(todo => {
                if(todo.id === action.id){
                    return {
                        ...todo,
                        ...action.updates
                    };
                } else {
                    return todo;
                }
            });
        case 'ADD_TODO':
            return [
                ...state,
                action.todo
            ];
        case 'DELETE_TODO':
            return [...state.filter(todo => todo.id !== action.id)];
        case 'ADD_TODOS':
            return [
                ...state,
                ...action.todos
            ];
        case 'CLEAR_TODOS':
            return [];
        default:
            return state;
    }
};

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                uid: action.uid
            };
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
};