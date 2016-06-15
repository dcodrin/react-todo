import React from 'react';

import Todo from 'Todo';

class TodoList extends React.Component {
    render() {
        const {todos} = this.props;
        if(todos.length === 0){
            return (
                <div>
                    <p className="container__message">Such motivation. So many things todo. Much sarcasm I sense.</p>
                </div>
            );
        }
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
