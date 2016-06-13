import React from 'react';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import SearchTodo from 'SearchTodo';

const todos = [
    {
        id: 1,
        text: 'Eat burger'
    },
    {
        id: 2,
        text: 'Drink some coke'
    },
    {
        id: 3,
        text: 'Get more burgers'
    },
    {
        id: 4,
        text: 'Put checkup and eat everything!'
    }
];

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todos,
            showCompleted: false
        };

        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleSearchTodos = this.handleSearchTodos.bind(this);
    }

    handleAddTodo(todo) {
        const nextTodo = {id: this.state.todos.length + 1, text: todo};
        this.setState({todos: this.state.todos.concat([nextTodo])});
    }

    handleSearchTodos(showCompleted, searchTodo) {

        const filteredTodos = todos.filter((todo) => {
           return  todo.text.toLowerCase().indexOf(searchTodo.toLowerCase()) > -1;
        });

        this.setState({
            showCompleted: showCompleted,
            todos: filteredTodos
        });
    }

    render() {
        const {todos} = this.state;
        return (
            <div>
                <SearchTodo onSearchTodos={this.handleSearchTodos}/>
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        );
    }
}


Main.propTypes = {};
Main.defaultProps = {};

export default Main;
