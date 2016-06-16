export const setSearchText = (searchText) => {
    return {
        type: 'SEARCH_TEXT',
        searchText
    };
};

export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        todo
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