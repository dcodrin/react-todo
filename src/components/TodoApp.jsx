import React from 'react';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import SearchTodo from 'SearchTodo';


class TodoApp extends React.Component {
    render() {
        return (
            <div>
                <h1 className="page-title">Do Some Stuff</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <SearchTodo/>
                            <TodoList />
                            <AddTodo />
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
