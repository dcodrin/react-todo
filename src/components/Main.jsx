import React from 'react';

import TodoList from 'TodoList';

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
    }

    render() {
        const {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos}/>
            </div>
        );
    }
}

Main.propTypes = {};
Main.defaultProps = {};

export default Main;
