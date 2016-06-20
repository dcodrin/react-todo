import React from 'react';
import {connect} from 'react-redux';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import SearchTodo from 'SearchTodo';
import {startLogout} from 'actions';


export class TodoApp extends React.Component {
    constructor() {
        super();
        this.state = {};

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        e.preventDefault();
        const {dispatch} = this.props;
        dispatch(startLogout());
    }

    render() {
        return (
            <div>
                <div className="page-actions">
                    <a href="#" onClick={this.handleLogout}>Logout</a>
                </div>
                <h1 className="page-title">Do Some Stuff</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-8 large-5">
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

export default connect()(TodoApp);
