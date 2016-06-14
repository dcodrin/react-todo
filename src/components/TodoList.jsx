import React from 'react';

import Todo from 'Todo';

class TodoList extends React.Component {
    render() {
        const {todos, showCompleted} = this.props;

        const renderTodos = () => {
            let todosToRender = [];
            if(showCompleted){
                todos.forEach((todo) => {
                    if(todo.completed){
                        todosToRender.push(<Todo onToggle={this.props.onToggle} key={todo.id} {...todo}/>);
                    }
                });
            } else {
                 todos.forEach((todo) =>{
                    todosToRender.push(<Todo onToggle={this.props.onToggle} key={todo.id} {...todo}/>);
                });
            }

            return todosToRender;
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
