export default {
    setTodos: function (todos) {
        if (Array.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function () {
        const stringTodos = localStorage.getItem('todos');
        let todos = [];
        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {
            console.log(e);
        }
        return Array.isArray(todos) ? todos : [];
    },
    filterTodos: function (todos, showCompleted, searchText) {

        let filteredTodos = todos;

        //Filter by showCompleted

        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });

        //Filter by searchText

        filteredTodos = filteredTodos.filter((todo) => {
            return searchText.length === 0 || todo.text.indexOf(searchText) > -1;
        });

        //Sort todos with non-completed first

        filteredTodos.sort((a, b) => {
            if (!a.completed && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }
        });

        return filteredTodos;
    }
};