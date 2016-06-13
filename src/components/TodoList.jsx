import React from 'react';

import Todo from 'Todo';

class TodoList extends React.Component {
    render() {

        const {todos} = this.props;

        const renderTodos = () => {
            return todos.map((todo) =>{
               return (
                   <Todo key={todo.id} {...todo}/>
               );
            });
        };

        return (
            <div>
                {renderTodos()}
            </div>
        );
    }
}

TodoList.propTypes = {};
TodoList.defaultProps = {};

export default TodoList;
