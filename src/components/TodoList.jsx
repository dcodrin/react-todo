import React from 'react';
import {connect} from 'react-redux';

import Todo from 'Todo';
import TodoApi from 'TodoApi';

export class TodoList extends React.Component {
    render() {
        const {todos, showCompleted, searchText} = this.props;
        const todosToRender = TodoApi.filterTodos(todos, showCompleted, searchText).map((todo) =>{
            return (<Todo key={todo.id} {...todo}/>);
        });
        if(todos.length === 0 || todosToRender.length === 0){
            return (
                <div>
                    <p className="container__message">Such motivation. So many things todo. Much sarcasm I sense.</p>
                </div>
            );
        }
        return (
            <div>
                {todosToRender}
            </div>
        );
    }
}

TodoList.propTypes = {};
TodoList.defaultProps = {};

//makes todos available on this.props.todos
export default connect(
    (state) => {
        return state;
    }
)(TodoList);
