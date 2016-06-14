import React from 'react';
import uuid from 'node-uuid';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import SearchTodo from 'SearchTodo';

const todos = [
    {
        id: uuid(),
        text: 'Eat burger'
    },
    {
        id: uuid(),
        text: 'Drink some coke'
    },
    {
        id: uuid(),
        text: 'Get more burgers'
    },
    {
        id: uuid(),
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
        const nextTodo = {id: uuid(), text: todo};
        this.setState({todos: [...this.state.todos, nextTodo]});
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
