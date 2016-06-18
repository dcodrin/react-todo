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
        case 'ADD_TODOS':
            return [
                ...state,
                ...action.todos
            ];
        default:
            return state;
    }
};