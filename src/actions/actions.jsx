export const setSearchText = (searchText) => {
    return {
        type: 'SEARCH_TEXT',
        searchText
    };
};

export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        text
    };
};

export const toggleCompleted = (id) => {
    return {
        type: 'TOGGLE_COMPLETED',
        id
    };
};

export const showCompleted = () => {
    return {
        type: 'SHOW_COMPLETED'
    };
};

export const addTodos = (todos) => {
    return {
        type: 'ADD_TODOS',
        todos
    };
};