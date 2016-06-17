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
        case 'TOGGLE_COMPLETED':
            return state.map(todo => {
                if(todo.id === action.id){
                    const checkCompleted = !todo.completed;
                    return {
                        ...todo,
                        completed: checkCompleted,
                        completedAt: checkCompleted ? moment().unix() : undefined
                    };
                } else {
                    return todo;
                }
            });
        case 'ADD_TODO':
            return [...state,
                {
                    id: uuid(),
                    text: action.text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: ''
                }
            ];
        default:
            return state;
    }
};