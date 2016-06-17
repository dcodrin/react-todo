import React from 'react';
import {connect} from 'react-redux';

import Todo from 'Todo';
import TodoApi from 'TodoApi';

export class TodoList extends React.Component {
    render() {
        const {todos, showCompleted, searchText} = this.props;
        if(todos.length === 0){
            return (
                <div>
                    <p className="container__message">Such motivation. So many things todo. Much sarcasm I sense.</p>
                </div>
            );
        }

        return (
            <div>
                { TodoApi.filterTodos(todos, showCompleted, searchText).map((todo) =>{
                    return (<Todo key={todo.id} {...todo}/>);
                })}
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
