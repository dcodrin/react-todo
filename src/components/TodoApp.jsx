import React from 'react';
import uuid from 'node-uuid';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import SearchTodo from 'SearchTodo';
import TodoApi from 'TodoApi';

class TodoApp extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: TodoApi.getTodos(),
            showCompleted: false
        };

        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleSearchTodos = this.handleSearchTodos.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleAddTodo(todo) {
        const nextTodo = {id: uuid(), text: todo, completed: false};
        TodoApi.setTodos([...this.state.todos, nextTodo]);
        this.setState({todos: [...this.state.todos, nextTodo]});
    }

    handleSearchTodos(showCompleted, searchTodo) {
        const filteredTodos = this.state.todos.filter((todo) => {
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


TodoApp.propTypes = {};
TodoApp.defaultProps = {};

export default TodoApp;
