import React from 'react';

import Todo from 'Todo';

class TodoList extends React.Component {
    render() {
        const {todos} = this.props;

        return (
            <div>
                { todos.map((todo) =>{
                    return (<Todo onToggle={this.props.onToggle} key={todo.id} {...todo}/>);
                })}
            </div>
        );
    }
}

TodoList.propTypes = {};
TodoList.defaultProps = {};

export default TodoList;
