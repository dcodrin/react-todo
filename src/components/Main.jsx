import React from 'react';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [
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
                    id:4,
                    text: 'Put checkup and eat everything!'
                }
            ]
        };

        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    handleAddTodo(todo) {
        const nextTodo = {id: this.state.todos.length + 1, text: todo};
        this.setState({todos: this.state.todos.concat([nextTodo])});
    }

    render() {
        const {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        );
    }
}

Main.propTypes = {};
Main.defaultProps = {};

export default Main;
