import React from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import SearchTodo from 'SearchTodo';
import TodoApi from 'TodoApi';

class TodoApp extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: TodoApi.getTodos(),
            showCompleted: false,
            searchTodo: ''
        };

        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleSearchTodos = this.handleSearchTodos.bind(this);
    }

    handleAddTodo(todo) {
        const nextTodo = {
            id: uuid(),
            text: todo,
            completed: false,
            createdAt: moment().unix(),
            completedAt: ''
        };
        TodoApi.setTodos([...this.state.todos, nextTodo]);
        this.setState({todos: [...this.state.todos, nextTodo]});
    }

    handleSearchTodos(showCompleted, searchTodo) {
      this.setState({showCompleted, searchTodo});
    }

    //handleToggle(id, completedAt) {
    //    var updatedTodos = this.state.todos.map((todo) => {
    //        if (todo.id === id) {
    //            todo.completed = !todo.completed;
    //            todo.completedAt = todo.completed ? completedAt : '';
    //        }
    //        return todo;
    //    });
    //    this.setState({todos: updatedTodos});
    //}

    render() {
        const {todos, showCompleted, searchTodo} = this.state;
        const filterTodos = TodoApi.filterTodos(todos, showCompleted, searchTodo);
        return (
            <div>
                <h1 className="page-title">Do Some Stuff</h1>

                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <SearchTodo onSearchTodos={this.handleSearchTodos}/>
                            <TodoList />
                            <AddTodo onAddTodo={this.handleAddTodo}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


TodoApp.propTypes = {};
TodoApp.defaultProps = {};

export default TodoApp;
