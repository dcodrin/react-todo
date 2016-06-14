import React from 'react';
import uuid from 'node-uuid';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import SearchTodo from 'SearchTodo';

const todos = [
    {
        id: uuid(),
        text: 'Eat burger',
        completed: true
    },
    {
        id: uuid(),
        text: 'Drink some coke',
        completed: true
    },
    {
        id: uuid(),
        text: 'Get more burgers',
        completed: true
    },
    {
        id: uuid(),
        text: 'Put checkup and eat everything!',
        completed: false
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
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleAddTodo(todo) {
        const nextTodo = {id: uuid(), text: todo, completed: false};
        this.setState({todos: [...this.state.todos, nextTodo]});
    }

    handleSearchTodos(showCompleted, searchTodo) {
        const filteredTodos = todos.filter((todo) => {
            return todo.text.toLowerCase().indexOf(searchTodo.toLowerCase()) > -1;
        });

        this.setState({
            showCompleted: showCompleted,
            todos: filteredTodos
        });
    }

    handleToggle(id) {
        var updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({todos: updatedTodos});
    }

    render() {
        const {todos} = this.state;
        return (
            <div>
                <SearchTodo onSearchTodos={this.handleSearchTodos}/>
                <TodoList onToggle={this.handleToggle} showCompleted={this.state.showCompleted} todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        );
    }
}


Main.propTypes = {};
Main.defaultProps = {};

export default Main;
