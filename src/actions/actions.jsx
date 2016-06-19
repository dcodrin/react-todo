import moment from 'moment';

import firebase, {firebaseRef} from 'firebaseConfig';

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

export const startAddTodo = (text) => {
    return (dispatch, getState) => {
        const todo = {
            text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: null
        };

        return firebaseRef
            .child('todos')
            .push(todo)
            .then((snapshot) => {
                dispatch(addTodo({
                    ...todo,
                    id: snapshot.key
                }));
            });
    };
};

export const updateTodo = (id, updates) => {
    return {
        type: 'UPDATE_TODO',
        id,
        updates
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

export const deleteTodo = (id) => {
  return {
      type: 'DELETE_TODO',
      id
  };
};

export const startDeleteTodo = (id) => {
    return (dispatch, getState) => {
      return firebaseRef.child(`todos/${id}`).remove().then(() => {
          dispatch(deleteTodo(id));
      });
    };
};

export const startAddTodos = () => {
    return (dispatch, getState) => {
        return firebaseRef.child('todos').once('value').then((snapshot) => {
            const todosObject = snapshot.val();
            if(todosObject){
                const todos = Object.keys(todosObject).map((id) => {
                    return {
                        id,
                        ...todosObject[id]
                    };
                });
                dispatch(addTodos(todos));
            } else {
                dispatch(addTodos([]));
            }
        });
    };
};

export const startToggleTodo = (id, completed) => {
    return (dispatch, getState) => {
        const todoRef = firebaseRef.child(`todos/${id}`);
        const updates = {
            completed,
            completedAt: completed ? moment().unix() : null
        };

        return todoRef.update(updates).then((snapshot) => {
           dispatch(updateTodo(id, updates));
        });
    };
};